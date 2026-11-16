import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** 東根市内・山形空港の気象庁東根アメダス観測所。 */
const HIGASHINE_AMEDAS = "35334";
const LATITUDE = 38.4319;
const LONGITUDE = 140.3918;

type Mode = "clear" | "cloudy" | "rain" | "snow" | "fog";
type WeatherPayload = {
  mode: Mode;
  label: string;
  temperature: number | null;
  isDay: boolean;
  wind: number;
  code: number;
  observedAt: string;
  source: string;
  forecastOnly: boolean;
  precipitation10m?: number | null;
};

type JmaAmedasRow = {
  temp?: [number | null, number];
  precipitation10m?: [number | null, number];
  precipitation1h?: [number | null, number];
  wind?: [number | null, number];
};

type ModelNow = {
  time?: string;
  temperature_2m?: number;
  weather_code?: number;
  cloud_cover?: number;
  precipitation?: number;
  is_day?: number;
  wind_speed_10m?: number;
};

type ModelResponse = { current?: ModelNow };

const WEATHER_CODES = {
  rain: new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99]),
  snow: new Set([71, 73, 75, 77, 85, 86]),
  fog: new Set([45, 48]),
};

function isDayInHigashine() {
  const h = Number(new Intl.DateTimeFormat("en-US", {
    hour: "numeric", hourCycle: "h23", timeZone: "Asia/Tokyo",
  }).format(new Date()));
  return h >= 6 && h < 18;
}

async function getJson<T>(url: string, ms: number, revalidate: number): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
      next: { revalidate },
    });
    if (!response.ok) throw new Error(`${response.status} from ${new URL(url).hostname}`);
    return (await response.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

async function getText(url: string, ms: number, revalidate: number): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const response = await fetch(url, { signal: controller.signal, next: { revalidate } });
    if (!response.ok) throw new Error(`${response.status} from JMA latest time`);
    return (await response.text()).trim();
  } finally {
    clearTimeout(timer);
  }
}

function codeCondition(code: number, cloudCover: number | undefined): { mode: Mode; label: string } {
  if (WEATHER_CODES.snow.has(code)) return { mode: "snow", label: "雪" };
  if (WEATHER_CODES.rain.has(code)) return { mode: "rain", label: "雨" };
  if (WEATHER_CODES.fog.has(code)) return { mode: "fog", label: "霧" };
  if (code === 3 || code === 2 || (cloudCover ?? 0) > 72) return { mode: "cloudy", label: "くもり" };
  if (code === 1) return { mode: "cloudy", label: "晴れ時々くもり" };
  return { mode: "clear", label: "晴れ" };
}

function valueOf(v: [number | null, number] | undefined): number | null {
  const n = v?.[0];
  return typeof n === "number" && Number.isFinite(n) ? n : null;
}

async function fromJmaAmedas(): Promise<{ observedAt: string; temp: number | null; precipitation10m: number | null; wind: number | null }> {
  // The JMA's web display publishes its latest slot first. This is not a versioned public API.
  const latest = await getText("https://www.jma.go.jp/bosai/amedas/data/latest_time.txt", 5000, 60);
  const date = Date.parse(latest);
  if (!Number.isFinite(date) || Math.abs(Date.now() - date) > 1000 * 60 * 100) {
    throw new Error("AMeDAS observations are stale");
  }
  const timestamp = latest.slice(0, 19).replace(/[-T:]/g, "");
  if (!/^\d{14}$/.test(timestamp)) throw new Error("Invalid JMA observation timestamp");
  const all = await getJson<Record<string, JmaAmedasRow>>(
    `https://www.jma.go.jp/bosai/amedas/data/map/${timestamp}.json`, 6000, 60,
  );
  const row = all?.[HIGASHINE_AMEDAS];
  if (!row) throw new Error("AMeDAS Higashine station missing");
  const temp = valueOf(row.temp);
  const precipitation10m = valueOf(row.precipitation10m);
  const wind = valueOf(row.wind);
  if (temp == null && precipitation10m == null) throw new Error("AMeDAS Higashine values missing");
  return { observedAt: latest, temp, precipitation10m, wind };
}

async function fromJmaModel(): Promise<ModelNow> {
  const params = new URLSearchParams({
    latitude: String(LATITUDE), longitude: String(LONGITUDE),
    current: "temperature_2m,weather_code,cloud_cover,precipitation,is_day,wind_speed_10m",
    timezone: "Asia/Tokyo",
  });
  const json = await getJson<ModelResponse>(`https://api.open-meteo.com/v1/jma?${params}`, 7000, 900);
  if (!json.current || !Number.isFinite(json.current.weather_code)) throw new Error("JMA model missing current weather");
  return json.current;
}

function buildWeather(amedas: Awaited<ReturnType<typeof fromJmaAmedas>> | null, model: ModelNow | null): WeatherPayload {
  if (!amedas && !model) throw new Error("No data from AMeDAS nor JMA model");
  const condition = model
    ? codeCondition(model.weather_code ?? 2, model.cloud_cover)
    : { mode: "cloudy" as Mode, label: "空模様は確認中" };
  const precip = amedas?.precipitation10m;
  const temp = amedas?.temp ?? model?.temperature_2m ?? null;
  const measuredRain = precip != null && precip > 0.05;

  // Only make rain or snow FALL in the 3D garden if the local AMeDAS actually measures precipitation.
  // This avoids mistaking an area-wide model forecast for rain at the user's orchard.
  let mode: Mode = condition.mode;
  let label = condition.label;
  if (precip != null) {
    if (measuredRain) {
      mode = condition.mode === "snow" || (temp != null && temp < -0.5) ? "snow" : "rain";
      label = mode === "snow" ? "雪" : "雨";
    } else if (mode === "rain" || mode === "snow") {
      mode = (model?.cloud_cover ?? 100) < 35 ? "clear" : "cloudy";
      label = mode === "clear" ? "晴れ" : "くもり";
    }
  }

  return {
    mode, label,
    temperature: typeof temp === "number" && Number.isFinite(temp) ? temp : null,
    isDay: model?.is_day === 1 ? true : model?.is_day === 0 ? false : isDayInHigashine(),
    wind: amedas?.wind != null ? amedas.wind * 3.6 : model?.wind_speed_10m ?? 0,
    code: model?.weather_code ?? 0,
    observedAt: amedas?.observedAt ?? model?.time ?? new Date().toISOString(),
    source: amedas ? "気象庁 東根アメダス" : "気象庁モデル（予報）",
    forecastOnly: !amedas,
    precipitation10m: precip ?? null,
  };
}

export async function GET() {
  const [observations, model] = await Promise.allSettled([fromJmaAmedas(), fromJmaModel()]);
  const amedas = observations.status === "fulfilled" ? observations.value : null;
  const jmaModel = model.status === "fulfilled" ? model.value : null;

  if (!amedas && !jmaModel) {
    console.error("Higashine weather failed", {
      amedas: observations.status === "rejected" ? String(observations.reason) : null,
      model: model.status === "rejected" ? String(model.reason) : null,
    });
    return NextResponse.json({ error: "東根市の観測データと予報データを取得できませんでした" }, {
      status: 503, headers: { "Cache-Control": "no-store" },
    });
  }
  return NextResponse.json(buildWeather(amedas, jmaModel), {
    headers: { "Cache-Control": "public, s-maxage=120, stale-while-revalidate=300" },
  });
}
