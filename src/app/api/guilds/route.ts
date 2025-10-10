import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { Guild } from "../../../../types/types";

export const GET = auth(async function GET(request) {
  console.log(request.auth);
  const userGuildsResponse = await fetch(
    "https://discord.com/api/v10/users/@me/guilds",
    {
      headers: {
        Authorization: `Bearer ${request.auth?.accessToken}`,
      },
    }
  );
  console.log(userGuildsResponse);
  if (!userGuildsResponse.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch user guilds" })
    );
  }
  const guilds = (await userGuildsResponse.json()) as Guild[];
  const formatedUserGuilds = guilds.map((guild) => ({
    id: guild.id,
    name: guild.name,
    owner: guild.owner,
  }));

  const botGuildsResponse = await fetch(
    "https://discord.com/api/v10/users/@me/guilds",
    {
      headers: {
        Authorization: `Bot ${process.env.BOT_TOKEN}`,
      },
    }
  );
  if (!botGuildsResponse.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch bot guilds" })
    );
  }
  const botGuilds = (await botGuildsResponse.json()) as Guild[];
  const formatedBotGuilds = botGuilds.map((guild) => ({
    id: guild.id,
    name: guild.name,
    owner: guild.owner,
  }));
  const commonGuilds = formatedUserGuilds.filter((g) =>
    formatedBotGuilds.find((x) => x.id === g.id && g.owner)
  );
  return NextResponse.json(commonGuilds, { status: 200 });
});
