import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/daily_fact`
  );
  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch daily fact" })
    );
  }

  const data = await response.json();
  return NextResponse.json(data, { status: 200 });
}
