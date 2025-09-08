import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/question`,
    {
      headers: {
        "x-api-key": process.env.INTERNAL_API_KEY,
      },
    }
  );
  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch question" }));
  }
  const data = await response.json();
  return NextResponse.json(data.question, { status: 200 });
}
