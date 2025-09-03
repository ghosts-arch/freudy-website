export async function GET() {
  console.log();
  const response = await fetch(
    `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/daily_fact`,
    {
      cache: "no-cache",
    }
  );
  console.log(await response.text());
  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch daily fact" })
    );
  }
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
