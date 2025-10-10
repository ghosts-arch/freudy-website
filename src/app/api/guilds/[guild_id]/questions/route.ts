import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(
  request,
  context: RouteContext<"/api/guilds/[guild_id]/questions">
) {
  console.log("test");
  const response = await fetch(
    `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/${
      (
        await context.params
      ).guild_id
    }/questions`,
    {
      headers: {
        "x-api-key": process.env.INTERNAL_API_KEY,
      },
    }
  );
  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch guild questions" })
    );
  }
  const questions = await response.json();
  console.log(questions);
  return NextResponse.json(questions, { status: 200 });
});

export const POST = auth(async function POST(
  request,
  context: RouteContext<"/api/guilds/[guild_id]/questions">
) {
  const body = await request.json();
  try {
    const result = await fetch(
      `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/${
        (
          await context.params
        ).guild_id
      }/questions`,
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
});
