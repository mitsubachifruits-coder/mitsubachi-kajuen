export async function POST(request: Request) {
  try {
    const data = await request.json();

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set");

      return Response.json(
        {
          ok: false,
          message: "GOOGLE_SCRIPT_URL が設定されていません",
        },
        { status: 500 }
      );
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("Google Script error:", text);

      return Response.json(
        {
          ok: false,
          message: "Google Script への送信に失敗しました",
          detail: text,
        },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "注文を受け取りました",
      googleScriptResponse: text,
    });
  } catch (error) {
    console.error("ORDER_API_ERROR", error);

    return Response.json(
      {
        ok: false,
        message: "注文の送信中にエラーが発生しました",
      },
      { status: 500 }
    );
  }
}