export async function POST(request: Request) {
  const data = await request.json();

  await fetch(process.env.GOOGLE_SCRIPT_URL!, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return Response.json({
    message: "注文を受け取りました",
  });
}