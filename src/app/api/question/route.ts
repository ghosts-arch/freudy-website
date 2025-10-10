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

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  console.log("before fetch");
  const validAnswerId = parseInt(body.validAnswer.split("_")[1], 10);
  const o = {
    question: body.question,
    explanation: body.explanation,
    answers: [
      { text: body.answer1, isValidAnswer: false },
      { text: body.answer2, isValidAnswer: false },
      { text: body.answer3, isValidAnswer: false },
      { text: body.answer4, isValidAnswer: false },
    ],
  };
  o["answers"][validAnswerId].isValidAnswer = true;
  try {
    const result = await fetch(
      `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/question`,
      {
        headers: {
          "x-api-key": process.env.INTERNAL_API_KEY,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(o),
      }
    );
    if (!result.ok) {
      const error = await result.text();
      console.log(error);
      return;
    }
    const data = await result.json();
    console.log("Success:", data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
  console.log("test");
  return NextResponse.json({});
}
