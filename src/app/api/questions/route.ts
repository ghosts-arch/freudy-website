import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/questions`,
    {
      headers: {
        "x-api-key": process.env.INTERNAL_API_KEY,
      },
    }
  );
  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch questions" }));
  }
  const data = await response.json();
  return NextResponse.json(data.questions, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const result = await fetch(
      `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/questions`,
      {
        headers: {
          "x-api-key": process.env.INTERNAL_API_KEY,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ questions: body.fileContent }),
      }
    );
    if (!result.ok) {
      const error = await result.text();
      return NextResponse.json({ error: error });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
  return NextResponse.json({});
}
