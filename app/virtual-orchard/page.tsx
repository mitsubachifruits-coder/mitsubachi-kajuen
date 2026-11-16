"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { FruitVector, fruits, fruitDetails, type Fruit, type Kind } from "../fruitpedia/fruitpedia-shared";

type OrchardKind = "さくらんぼ" | "桃" | "すいか" | "ぶどう" | "西洋梨" | "りんご";
type WeatherMode = "clear" | "cloudy" | "rain" | "snow" | "fog";
type WeatherInfo = {
  mode: WeatherMode;
  label: string;
  temperature: number | null;
  isDay: boolean;
  wind: number;
  code: number;
  observedAt: string;
  source?: string;
  forecastOnly?: boolean;
};

const FONT_STACK = '"GenSenOrchard"';

const ORCHARDS: { kind: OrchardKind; label: string; accent: string; sampleId: string }[] = [
  { kind: "さくらんぼ", label: "さくらんぼ", accent: "#f3dfd9", sampleId: "sato" },
  { kind: "桃", label: "もも", accent: "#f3d8d7", sampleId: "natsukko" },
  { kind: "すいか", label: "すいか", accent: "#dce9d1", sampleId: "matsuribayashi" },
  { kind: "ぶどう", label: "ぶどう", accent: "#e2dbef", sampleId: "shine" },
  { kind: "西洋梨", label: "西洋梨", accent: "#e8e9d2", sampleId: "lafrance" },
  { kind: "りんご", label: "りんご", accent: "#f3ded7", sampleId: "fuji" },
];

function OrchardFruitIcon({ kind }: { kind: OrchardKind }) {
  const orchard = ORCHARDS.find((item) => item.kind === kind);
  const fruit = (orchard ? fruits.find((item) => item.id === orchard.sampleId) : null) ?? fruits.find((item) => item.kind === kind);
  if (!fruit) return null;
  return (
    <span className="orchardFruitIcon" aria-hidden="true">
      <FruitVector fruit={fruit} />
    </span>
  );
}

function WeatherGlyph({ mode, isDay }: { mode?: WeatherMode; isDay?: boolean }) {
  if (!mode) return (
    <svg viewBox="0 0 64 64" className="orchardGlyph" aria-hidden="true">
      <circle cx="32" cy="32" r="23" fill="#eff2eb" stroke="#a5b6a5" strokeWidth="3" />
      <path d="M22 32h20" stroke="#819983" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
  const stroke = "#4a6353";
  const fill = mode === "rain" ? "#7ea5c4" : mode === "snow" ? "#dfe9f4" : mode === "cloudy" ? "#cfd8d3" : mode === "fog" ? "#d5dbd7" : isDay === false ? "#eef1f4" : "#f7d56b";

  if (mode === "rain") {
    return (
      <svg viewBox="0 0 64 64" className="orchardGlyph" aria-hidden="true">
        <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 39c-6 0-10-4-10-9 0-6 5-10 11-10 2-7 8-12 16-12 9 0 16 7 17 16 6 1 10 5 10 11 0 7-6 12-13 12H18Z" fill="#f8fbfd" />
          <path d="M21 47l-3 8" />
          <path d="M32 47l-3 8" />
          <path d="M43 47l-3 8" />
        </g>
      </svg>
    );
  }
  if (mode === "snow") {
    return (
      <svg viewBox="0 0 64 64" className="orchardGlyph" aria-hidden="true">
        <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 35c-6 0-10-4-10-9 0-6 5-10 11-10 2-7 8-12 16-12 9 0 16 7 17 16 6 1 10 5 10 11 0 7-6 12-13 12H18Z" fill="#f8fbfd" />
          <path d="M21 48h0" />
          <path d="M32 47v10M27 52h10M28.5 49.5l7 7M35.5 49.5l-7 7" />
          <path d="M46 47v8M42 51h8M43.5 48.5l5 5M48.5 48.5l-5 5" />
        </g>
      </svg>
    );
  }
  if (mode === "cloudy" || mode === "fog") {
    return (
      <svg viewBox="0 0 64 64" className="orchardGlyph" aria-hidden="true">
        <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 39c-6 0-10-4-10-9 0-6 5-10 11-10 2-7 8-12 16-12 9 0 16 7 17 16 6 1 10 5 10 11 0 7-6 12-13 12H18Z" fill={fill} />
          {mode === "fog" && (
            <>
              <path d="M17 50h30" />
              <path d="M13 56h24" />
            </>
          )}
        </g>
      </svg>
    );
  }
  if (isDay === false) {
    return (
      <svg viewBox="0 0 64 64" className="orchardGlyph" aria-hidden="true">
        <path d="M40 10c-9 1-16 9-16 19 0 9 6 16 15 18-3 2-7 3-11 3-12 0-22-10-22-22S16 6 28 6c4 0 8 1 12 4Z" fill={fill} stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className="orchardGlyph" aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="12" fill={fill} />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M15 49l6-6M43 21l6-6" />
      </g>
    </svg>
  );
}


function makeRandomWeather(previous?: WeatherMode): WeatherInfo {
  const modes: WeatherMode[] = ["clear", "clear", "cloudy", "cloudy", "rain", "rain", "snow", "fog"];
  let mode = modes[Math.floor(Math.random() * modes.length)];
  if (previous && mode === previous) {
    mode = modes[(modes.indexOf(mode) + 1 + Math.floor(Math.random() * 4)) % modes.length];
    if (mode === previous) mode = previous === "clear" ? "cloudy" : "clear";
  }
  const labels: Record<WeatherMode, string> = {
    clear: "晴れ", cloudy: "くもり", rain: "雨", snow: "雪", fog: "霧",
  };
  return {
    mode,
    label: labels[mode],
    temperature: null,
    isDay: new Date().getHours() >= 6 && new Date().getHours() < 18,
    wind: 6,
    code: 0,
    observedAt: "",
    source: "演出用",
    forecastOnly: true,
  };
}

function BrandLogo() {
  const chars = [
    { text: "み", color: "#ff3131" },
    { text: "つ", color: "#006dff" },
    { text: "ば", color: "#00bf63" },
    { text: "ち", color: "#ffde59" },
    { text: "果", color: "#8c52ff" },
    { text: "樹", color: "#00a1ff" },
    { text: "園", color: "#ff66c4" },
  ];
  return (
    <span className="brandLogo" aria-label="みつばち果樹園">
      {chars.map((char) => (
        <span key={char.text} style={{ color: char.color }}>
          {char.text}
        </span>
      ))}
    </span>
  );
}

export default function VirtualOrchardPage() {
  const iframe = useRef<HTMLIFrameElement>(null);
  const [fontStatus, setFontStatus] = useState<"loading" | "ready" | "error">("loading");
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState<Fruit | null>(null);
  const [zone, setZone] = useState<OrchardKind | null>(null);
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [catalogKind, setCatalogKind] = useState<OrchardKind>("さくらんぼ");
  const [viewportError, setViewportError] = useState(false);
  const [frameAttempt, setFrameAttempt] = useState(0);

  const send = useCallback((payload: Record<string, unknown>) => {
    iframe.current?.contentWindow?.postMessage(payload, window.location.origin);
  }, []);

  useEffect(() => {
    let canceled = false;
    // Prevent flashes of the system font. The same exact face is used by the 3D canvas.
    void document.fonts.load('900 24px "GenSenOrchard"', 'みつばち果樹園さくらんぼ桃すいかぶどう西洋梨りんご').then((faces) => {
      if (canceled) return;
      if (faces.length === 0 || !document.fonts.check('900 24px "GenSenOrchard"')) {
        setFontStatus("error");
      } else {
        setFontStatus("ready");
      }
    }).catch(() => {
      if (!canceled) setFontStatus("error");
    });
    return () => { canceled = true; };
  }, []);

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  useEffect(() => {
    const applyWeather = () => setWeather((current) => makeRandomWeather(current?.mode));
    applyWeather();
    const interval = window.setInterval(applyWeather, 8 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source !== iframe.current?.contentWindow || !event.data || typeof event.data !== "object") return;
      if (event.data.type === "orchard:ready") setReady(true);
      if (event.data.type === "orchard:pick" && typeof event.data.id === "string") {
        const fruit = fruits.find((f) => f.id === event.data.id);
        if (fruit) setSelected(fruit);
      }
      if (event.data.type === "orchard:zone") {
        const name = event.data.kind as OrchardKind;
        if (ORCHARDS.some((o) => o.kind === name)) setZone(name);
        else if (event.data.kind == null) setZone(null);
      }
      if (event.data.type === "orchard:error") setViewportError(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    if (ready || viewportError) return;
    send({ type: "orchard:ping" });
    const ping = window.setInterval(() => send({ type: "orchard:ping" }), 650);
    const watchdog = window.setTimeout(() => setViewportError(true), 18000);
    return () => {
      window.clearInterval(ping);
      window.clearTimeout(watchdog);
    };
  }, [ready, viewportError, frameAttempt, send]);

  // Keep the catalog stable while the sky changes; replanting would discard harvested fruit.
  useEffect(() => {
    if (!ready) return;
    const enabled: Kind[] = ["さくらんぼ", "桃", "すいか", "ぶどう", "西洋梨", "りんご"];
    send({ type: "orchard:catalog", fruits: fruits.filter((f) => enabled.includes(f.kind)) });
  }, [ready, send]);

  useEffect(() => {
    if (!ready) return;
    send({ type: "orchard:weather", weather });
  }, [ready, weather, send]);

  useEffect(() => {
    const paused = !started || !!selected || showCatalog || showHelp;
    send({ type: "orchard:pause", paused });
    if (!paused && ready) send({ type: "orchard:focusControls" });
  }, [started, selected, showCatalog, showHelp, ready, send]);

  useEffect(() => {
    if (!selected && !showCatalog && !showHelp) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setSelected(null);
      setShowCatalog(false);
      setShowHelp(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected, showCatalog, showHelp]);

  const go = (kind: OrchardKind) => {
    if (!started) setStarted(true);
    setZone(kind);
    send({ type: "orchard:go", kind });
  };

  const weatherTitle = weather ? weather.label : "空模様を準備中";
  const weatherSubline = "タップして空を変える";

  return (
    <>
      <link rel="preload" href="/fonts/GenSenRoundedJP-H.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <main className={`orchardShell ${fontStatus !== "ready" ? "orchardFontsPending" : ""}`} aria-label="みつばちになって果樹園を飛ぶ">
        {fontStatus === "loading" && <div className="orchardFontSpinner" role="status" aria-label="フォントを読み込んでいます" />}
        {fontStatus === "error" && (
          <div className="orchardFontError" role="alert">
            フォントを読み込めませんでした。<br />
            <code>public/fonts/GenSenRoundedJP-H.otf</code> の配置を確認してページを再読み込みしてください。
          </div>
        )}
        <iframe
          ref={iframe}
          key={frameAttempt}
          title="みつばち果樹園"
          src={`/virtual-orchard/world.html?v=20261116-beeflight-v2-${frameAttempt}`}
          onLoad={() => send({ type: "orchard:ping" })}
          className="orchardWorld"
          allow="fullscreen"
        />
        <div className="orchardOverlay" aria-hidden="true" />

        <header className="orchardTop">
          <a className="orchardTopBrand" href="/" aria-label="みつばち果樹園のトップページに戻る" title="トップページに戻る">
            <BrandLogo />
          </a>
          <div className="orchardTopRight">
            <button
              type="button"
              className="orchardWeather"
              title="タップして空模様を変更"
              aria-label={`現在の空模様は${weatherTitle}。タップすると変わります`}
              onClick={() => setWeather((current) => makeRandomWeather(current?.mode))}
            >
              <WeatherGlyph mode={weather?.mode} isDay={weather?.isDay} />
              <span>
                <strong>{weatherTitle}</strong>
                <small>{weatherSubline}</small>
              </span>
            </button>
            <button className="orchardCircle" aria-label="操作方法" title="操作方法" onClick={() => setShowHelp(true)}>
              ?
            </button>
          </div>
        </header>

        {!started && (
          <div className="orchardEntrance">
            <div className="orchardWelcome">
              <div className="orchardEyebrow">WELCOME TO MITSUBACHI</div>
              <h1>果樹園を、飛ぼう。</h1>
              <p>
                みつばちになって、実りの上を自由に飛ぼう。<br />
                収穫も、水やりも、ただ眺めるだけでも。
              </p>
              <div className="welcomeLogoLine">
                <BrandLogo />
              </div>
              <button onClick={() => setStarted(true)} className="orchardStart" disabled={!ready || fontStatus !== "ready"}>
                {ready ? "果樹園に入る ↗" : "果樹園を準備しています…"}
              </button>
            </div>
          </div>
        )}

        {started && (
          <>
            <div className="orchardFind" aria-live="polite">
              <span className="orchardDot" />
              {zone ? `${zone}の畑` : "果樹園の入口"}
              <small>空を自由に飛ぼう</small>
            </div>
            <div className="orchardBottom">
              <nav className="orchardNav" aria-label="畑を選ぶ">
                {ORCHARDS.map((o) => (
                  <button key={o.kind} onClick={() => go(o.kind)} className={`orchardNavItem ${zone === o.kind ? "active" : ""}`} style={{ "--zone-bg": o.accent } as CSSProperties}>
                    <OrchardFruitIcon kind={o.kind} />
                    <span>{o.label}</span>
                  </button>
                ))}
              </nav>
              <button className="orchardBrowse" onClick={() => setShowCatalog(true)}>
                品種を探す <span aria-hidden="true">⌕</span>
              </button>
            </div>
          </>
        )}

        {showHelp && (
          <div className="orchardSmallBackdrop" onClick={() => setShowHelp(false)}>
            <div className="orchardHelp" role="dialog" aria-modal="true" aria-label="操作方法" onClick={(e) => e.stopPropagation()}>
              <button className="smallClose" onClick={() => setShowHelp(false)} aria-label="閉じる">
                ×
              </button>
              <span className="orchardEyebrow">HOW TO EXPLORE</span>
              <h2>みつばちの飛び方</h2>
              <p>パソコンでは <strong>W・A・S・D</strong> で飛び、<strong>Space・C</strong> で上昇・下降します。ドラッグで見回し、ホイールでカメラ距離を変えられます。</p>
              <p>スマホでは左下のスティックで飛び、右側の「上昇・下降」ボタンで高度を変えます。画面スワイプでカメラを回せます。</p>
              <p>操作しなければその場でホバリングできます。<strong>空から眺める</strong>を押すと、果樹園全体を高い空から見渡せます。</p>
              <p>果物に近づくと<strong>収穫・水やり・事典</strong>が使えます。水やりによる成長や、クリアすべき目的はありません。</p>
              <p>木や実をクリックすると、くだもの事典が開きます。マップで畑を選ぶこともできます。</p>
              <button className="orchardStart" onClick={() => setShowHelp(false)}>
                わかった！
              </button>
            </div>
          </div>
        )}

        {showCatalog && (
          <div className="orchardSmallBackdrop" onClick={() => setShowCatalog(false)}>
            <div className="orchardCatalog" role="dialog" aria-modal="true" aria-label="品種を探す" onClick={(e) => e.stopPropagation()}>
              <div className="catalogTop">
                <div>
                  <span className="orchardEyebrow">FRUIT COLLECTION</span>
                  <h2>品種を探す</h2>
                </div>
                <button className="smallClose" onClick={() => setShowCatalog(false)} aria-label="閉じる">
                  ×
                </button>
              </div>
              <div className="catalogChips">
                {ORCHARDS.map((o) => (
                  <button key={o.kind} className={catalogKind === o.kind ? "picked" : ""} onClick={() => setCatalogKind(o.kind)}>
                    <OrchardFruitIcon kind={o.kind} />
                    <span>{o.label}</span>
                  </button>
                ))}
              </div>
              <div className="catalogNames">
                {fruits
                  .filter((f) => f.kind === catalogKind)
                  .map((f) => (
                    <button
                      key={f.id}
                      onClick={() => {
                        setShowCatalog(false);
                        setSelected(f);
                        send({ type: "orchard:focus", id: f.id });
                      }}
                    >
                      {f.name}
                      <span>↗</span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}

        {viewportError && (
          <div className="orchardError">
            3Dの読み込みを確認できませんでした。
            <button
              type="button"
              onClick={() => {
                setViewportError(false);
                setReady(false);
                setStarted(false);
                setFrameAttempt((n) => n + 1);
              }}
            >
              読み込み直す
            </button>
          </div>
        )}
      </main>

      {selected && fontStatus === "ready" &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="modalBackdrop" role="presentation" onClick={() => setSelected(null)}>
            <section className="modalCard" role="dialog" aria-modal="true" aria-label={selected.name} onClick={(e) => e.stopPropagation()}>
              <button className="modalClose" aria-label="閉じる" onClick={() => setSelected(null)}>
                ×
              </button>
              <div className="modalVisual" style={{ background: selected.color }}>
                <FruitVector fruit={selected} />
              </div>
              <div className="modalContent">
                <span className="productBadge">{selected.kind}</span>
                <h2 className="modalTitle">{selected.name}</h2>
                <p className="modalText">{selected.summary}</p>
                {fruitDetails[selected.id] && (
                  <div className="modalDetailMore">
                    <p>{fruitDetails[selected.id]}</p>
                  </div>
                )}
                <div className="modalFact">
                  <span>主な産地・栽培例</span>
                  <strong>{selected.origin || "国産"}</strong>
                </div>
                <div className="modalFact">
                  <span>旬の目安</span>
                  <strong>{selected.period.length ? `${selected.period.join("・")}月` : "-"}</strong>
                </div>
                <a
                  href={`/fruitpedia?view=tree&fruit=${encodeURIComponent(selected.id)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detailButton modalAction"
                >
                  家系図を見る
                  <span className="detailButtonArrow">→</span>
                </a>
              </div>
            </section>
          </div>,
          document.body,
        )}

      <style>{`
        @font-face{font-family:"GenSenOrchard";src:url("/fonts/GenSenRoundedJP-H.otf") format("opentype");font-style:normal;font-weight:100 900;font-display:block;}
        .orchardFontsPending .orchardTop,.orchardFontsPending .orchardEntrance,.orchardFontsPending .orchardFind,.orchardFontsPending .orchardBottom,.orchardFontsPending .orchardSmallBackdrop,.orchardFontsPending .orchardError{visibility:hidden;}
        .orchardFontSpinner{position:fixed;z-index:100;left:50%;top:50%;width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:50%;border:3px solid rgba(64,100,73,.16);border-top-color:#3f694e;animation:orchardFontSpin .8s linear infinite;}
        @keyframes orchardFontSpin{to{transform:rotate(360deg)}}
        .orchardFontError{position:fixed;z-index:100;left:50%;top:50%;transform:translate(-50%,-50%);width:min(92vw,520px);background:#fff;padding:24px;border-radius:18px;text-align:center;line-height:1.8;font:14px system-ui,sans-serif;}
        .orchardFontError code{overflow-wrap:anywhere;font-size:12px;}
        .orchardShell{position:fixed;inset:0;z-index:2147482000;overflow:hidden;background:#d9e7da;color:#2e342e;font-family:${FONT_STACK};}
        .orchardShell,.orchardShell *,.modalBackdrop,.modalBackdrop *{font-family:${FONT_STACK} !important;font-synthesis:none;}
        .orchardFontError,.orchardFontError *{font-family:system-ui,sans-serif !important;}
        .orchardWorld{position:absolute;inset:0;width:100%;height:100%;border:0;display:block;}
        .orchardOverlay{position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(18,34,28,.10),transparent 24%,transparent 66%,rgba(22,43,31,.08));}
        .orchardShell button,.orchardShell a{font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;}
        .orchardTop{position:absolute;z-index:15;top:0;left:0;right:0;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;padding:max(20px,env(safe-area-inset-top)) max(20px,env(safe-area-inset-right)) 0 max(20px,env(safe-area-inset-left));pointer-events:none;}
        .orchardTopBrand{pointer-events:auto;display:flex;align-items:center;justify-content:center;min-height:58px;padding:10px 17px;border:1px solid rgba(43,55,43,.10);border-radius:18px;background:rgba(255,255,252,.90);backdrop-filter:blur(18px);box-shadow:0 8px 30px rgba(31,51,40,.08);white-space:nowrap;text-decoration:none;color:inherit;transition:transform .15s ease,box-shadow .15s ease;}.orchardTopBrand:hover{transform:translateY(-1px);box-shadow:0 10px 34px rgba(31,51,40,.14);}.orchardTopBrand:focus-visible{outline:3px solid #4a9e72;outline-offset:3px;}
        .orchardTopBrand .brandLogo{font-size:clamp(16px,2vw,24px);line-height:1.1;}
        .orchardWeather,.orchardCircle{pointer-events:auto;background:rgba(255,255,252,.90);border:1px solid rgba(43,55,43,.10);backdrop-filter:blur(18px);box-shadow:0 8px 30px rgba(31,51,40,.08);}
        .orchardTopRight{display:flex;gap:9px;align-items:stretch;}
        .orchardWeather{display:flex;align-items:center;gap:10px;border-radius:18px;padding:8px 14px;min-height:58px;text-align:left;color:#2f4035;}
        .orchardGlyph{display:block;width:28px;height:28px;flex:none;}
        .orchardWeather strong{display:block;font-size:12px;white-space:nowrap;}
        .orchardWeather small{display:block;color:#81877e;font-size:10px;white-space:nowrap;}
        .orchardCircle{display:grid;place-items:center;border-radius:16px;width:49px;height:58px;color:#2f4035;font-size:20px;font-weight:700;}
        .orchardEntrance{position:absolute;inset:0;z-index:10;display:grid;place-items:center;padding:24px;background:rgba(237,243,226,.16);backdrop-filter:blur(2px);}
        .orchardWelcome{width:min(500px,calc(100% - 12px));text-align:center;padding:42px 28px 36px;border-radius:28px;background:rgba(255,255,249,.88);box-shadow:0 20px 72px rgba(34,53,35,.14);border:1px solid rgba(255,255,255,.85);backdrop-filter:blur(14px);}
        .orchardEyebrow{font-weight:800;letter-spacing:.17em;color:#859279;font-size:10px;}
        .orchardWelcome h1{font-size:clamp(33px,5vw,50px);letter-spacing:-.065em;margin:17px 0;color:#324638;line-height:1.25;}
        .orchardWelcome p{font-size:14px;color:#677665;line-height:2;margin:0 0 16px;}
        .welcomeLogoLine{display:flex;justify-content:center;margin-bottom:24px;}
        .brandLogo{display:inline-flex;gap:.02em;align-items:center;font-size:28px;font-weight:900;letter-spacing:-.06em;line-height:1;font-family:${FONT_STACK};}
        .orchardStart{background:#3f694e;color:#fff;border:0;border-radius:999px;font-size:14px;font-weight:700;padding:15px 25px;box-shadow:0 10px 28px rgba(50,107,65,.17);}
        .orchardStart:disabled{opacity:.6;cursor:wait;}
        .orchardFind{position:absolute;z-index:11;top:92px;left:24px;padding:10px 14px 10px 12px;background:rgba(255,255,251,.82);backdrop-filter:blur(12px);border-radius:13px;border:1px solid rgba(32,62,40,.08);font-size:13px;font-weight:750;display:flex;align-items:center;gap:8px;}
        .orchardFind small{color:#818b80;font-size:10px;font-weight:500;}
        .orchardDot{background:#6ba778;width:8px;height:8px;border-radius:50%;}
        .orchardBottom{position:absolute;z-index:12;bottom:max(19px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:10px;max-width:calc(100vw - 22px);}
        .orchardNav{display:flex;gap:5px;align-items:center;border:1px solid rgba(40,51,41,.09);background:rgba(255,255,252,.9);backdrop-filter:blur(18px);box-shadow:0 14px 50px rgba(21,41,24,.15);padding:6px;border-radius:22px;}
        .orchardNavItem{display:flex;gap:6px;align-items:center;justify-content:center;white-space:nowrap;background:transparent;border:0;border-radius:17px;padding:10px 12px;font-size:12px;font-weight:700;color:#697466;transition:background .2s;}
        .orchardNavItem.active,.orchardNavItem:hover{background:var(--zone-bg);color:#344237;}
        .orchardFruitIcon{display:grid;place-items:center;width:28px;height:28px;border-radius:10px;background:rgba(255,255,255,.62);padding:2px;flex:none;overflow:hidden;}
        .orchardFruitIcon .fruitVectorWrap{width:100%;height:100%;display:grid;place-items:center;}
        .orchardFruitIcon .vectorSvg,.orchardFruitIcon .vectorSvg.dense{width:100%;height:100%;display:block;overflow:visible;}
        .orchardBrowse{padding:15px 16px;border-radius:20px;background:#3b664a;color:#fff;white-space:nowrap;font-size:12px;font-weight:700;border:0;box-shadow:0 12px 28px rgba(24,59,34,.17);}
        .orchardBrowse span{font-size:17px;margin-left:6px;}
        .orchardSmallBackdrop{position:fixed;inset:0;z-index:90;background:rgba(25,37,27,.36);backdrop-filter:blur(6px);display:grid;place-items:center;padding:14px;}
        .orchardHelp,.orchardCatalog{position:relative;background:#fffdf9;border-radius:24px;padding:27px;width:min(510px,100%);box-shadow:0 20px 65px rgba(0,0,0,.14);max-height:min(82dvh,720px);overflow:auto;}
        .orchardHelp h2,.orchardCatalog h2{font-size:27px;margin:7px 0 18px;letter-spacing:-.05em;}
        .orchardHelp p{font-size:14px;line-height:2;color:#697268;}
        .orchardHelp .orchardStart{margin-top:10px;}
        .smallClose{border:0;border-radius:999px;background:#eff1ed;color:#444;position:absolute;top:15px;right:17px;font-size:25px;width:38px;height:38px;}
        .catalogTop{display:flex;justify-content:space-between;}
        .catalogChips{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:18px;}
        .catalogChips button{border:1px solid #e4e8df;background:#fff;border-radius:999px;padding:9px 12px;color:#657364;font-size:12px;display:inline-flex;align-items:center;gap:8px;}
        .catalogChips button.picked{background:#405d49;color:#fff;}
        .catalogChips button .orchardFruitIcon{width:24px;height:24px;background:rgba(255,255,255,.78);}
        .catalogNames{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;max-height:38dvh;overflow-y:auto;}
        .catalogNames button{border:1px solid #e9ebe5;background:#f8f9f6;padding:11px 13px;border-radius:12px;text-align:left;display:flex;justify-content:space-between;gap:8px;color:#4c5c4f;font-size:13px;}
        .catalogNames button span{color:#92a08a;}
        .orchardError{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:20px;z-index:35;background:#fff;border-radius:16px;font-size:14px;max-width:330px;line-height:1.7;}
        .orchardError button{margin-left:10px;border:0;border-radius:999px;padding:10px 14px;background:#3f694e;color:#fff;font-size:12px;}
        .orchardFontsPending ~ .modalBackdrop{visibility:hidden;}
        .modalBackdrop{position:fixed;inset:0;z-index:2147483647;background:rgba(25,25,20,.55);padding:14px 24px 24px;display:grid;place-items:start center;overflow-y:auto;overscroll-behavior:contain;}
        .modalCard{background:white;border-radius:18px;width:min(580px,100%);max-height:calc(100dvh - 38px);overflow:auto;position:relative;color:#31312e;font-family:${FONT_STACK};}
        .modalClose{position:absolute;right:15px;top:15px;border:0;background:white;border-radius:50%;width:34px;height:34px;font-size:24px;cursor:pointer;z-index:2;}
        .modalVisual{height:280px;padding:10px;display:grid;place-items:center;}
        .modalContent{padding:30px;}
        .productBadge{display:inline-flex;min-height:22px;align-items:center;padding:3px 9px;border:1px solid #d9e4cb;border-radius:999px;background:#f5f9ef;color:#667351;font-size:8px;line-height:1.4;letter-spacing:.08em;}
        .modalTitle{font-size:clamp(24px,3vw,34px);font-weight:700;margin:18px 0;color:#31312e;}
        .modalText{margin:0 0 12px;font-size:12px;line-height:2;color:#777770;}
        .modalDetailMore{margin:0 0 18px;padding:16px 18px;border-radius:14px;background:#f8f8f4;color:#62635c;font-size:12px;line-height:1.95;}
        .modalDetailMore p{margin:0;}
        .modalFact{display:flex;justify-content:space-between;align-items:center;padding:17px 0;border-bottom:1px solid #eeeeea;font-size:12px;gap:15px;}
        .modalFact span{color:#777770;}
        .modalFact strong{font-weight:500;color:#31312e;text-align:right;overflow-wrap:anywhere;}
        .modalBackdrop .fruitVectorWrap{display:grid;place-items:center;width:100%;height:100%;min-width:0;min-height:0;}
        .modalBackdrop .vectorSvg,.modalBackdrop .vectorSvg.dense{display:block;width:82%;height:82%;max-width:100%;max-height:100%;overflow:visible;flex-shrink:0;}
        .modalCard .detailButton{display:inline-flex;min-width:112px;min-height:42px;flex:0 0 auto;align-items:center;justify-content:center;gap:10px;margin-top:22px;padding:8px 10px 8px 15px;border:1px solid #deddd8;border-radius:999px;background:#fff;color:#3f3f3a;font-size:10px;font-weight:500;line-height:1;letter-spacing:.06em;text-decoration:none;cursor:pointer;}
        .modalCard .detailButtonArrow{display:inline-flex;width:27px;height:27px;align-items:center;justify-content:center;border-radius:999px;background:#f3f3ef;color:#777770;font-size:13px;}
        @media(max-width:980px){.orchardNavItem{padding:9px 9px;font-size:11px;}}
        @media(max-width:740px){.orchardTop{padding:max(10px,env(safe-area-inset-top)) 11px 0;}.orchardWeather{padding:7px 9px;border-radius:13px;min-height:48px;gap:5px;}.orchardGlyph{width:22px;height:22px;}.orchardWeather strong{font-size:10px;}.orchardWeather small{font-size:8px;}.orchardCircle{width:39px;height:48px;border-radius:13px;}.orchardFind{top:max(72px,calc(env(safe-area-inset-top) + 63px));left:11px;}.orchardFind small{display:none;}.orchardBottom{left:0;transform:none;width:100%;bottom:max(9px,env(safe-area-inset-bottom));padding:0 9px;display:grid;gap:7px;}.orchardNav{width:100%;overflow-x:auto;scrollbar-width:none;border-radius:17px;justify-content:space-between;}.orchardNav::-webkit-scrollbar{display:none;}.orchardNavItem{flex:1;flex-direction:column;min-width:56px;gap:4px;font-size:9px;padding:6px 4px;}.orchardFruitIcon{width:26px;height:26px;border-radius:9px;}.orchardBrowse{justify-self:end;padding:10px 12px;border-radius:12px;font-size:11px;}.orchardWelcome{padding:36px 18px 28px;}.orchardWelcome h1{font-size:32px;}.orchardWelcome p{font-size:13px;}.brandLogo{font-size:24px;}}
        @media(max-width:740px){.orchardTopBrand{min-height:48px;padding:7px 9px;border-radius:13px;}.orchardTopBrand .brandLogo{font-size:clamp(12px,3.5vw,17px);letter-spacing:-.07em;}.orchardTop{gap:6px;}}
        @media(max-width:740px){.orchardBottom,.orchardNav,.orchardBrowse{display:none !important;}}
        @media(max-width:390px){.orchardTopBrand{padding:7px 6px;}.orchardTopBrand .brandLogo{font-size:12px;}.orchardTopRight{gap:5px;}}
        @media(max-width:680px){.modalBackdrop{padding:max(12px,env(safe-area-inset-top)) 12px max(24px,env(safe-area-inset-bottom));overflow-y:auto;overflow-x:hidden;display:block;-webkit-overflow-scrolling:touch;}.modalCard{width:min(100%,580px);max-height:none;height:auto;overflow:visible;border-radius:18px;margin:0 auto;}.modalVisual{height:clamp(185px,58vw,255px);}.modalContent{padding:23px 20px 27px;}.modalTitle{font-size:29px;line-height:1.35;overflow-wrap:anywhere;}.modalText,.modalDetailMore{font-size:13px;line-height:1.9;}.modalDetailMore{padding:14px 15px;}.modalFact{font-size:12px;}.modalClose{z-index:2;}}
      `}</style>
    </>
  );
}
