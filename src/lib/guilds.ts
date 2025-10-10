import { auth } from "@/auth";
import { Guild } from "../../types/types";

export const getUserGuilds = async () => {
  const session = await auth();
  if (!session) throw new Error();
  const userGuildsResponse = await fetch(
    "https://discord.com/api/v10/users/@me/guilds",
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    }
  );
  if (!userGuildsResponse.ok) throw new Error();
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
  if (!botGuildsResponse.ok) throw new Error();
  const botGuilds = (await botGuildsResponse.json()) as Guild[];
  const formatedBotGuilds = botGuilds.map((guild) => ({
    id: guild.id,
    name: guild.name,
    owner: guild.owner,
  }));
  const commonGuilds = formatedUserGuilds.filter((g) =>
    formatedBotGuilds.find((x) => x.id === g.id && g.owner)
  );
  return commonGuilds;
};
