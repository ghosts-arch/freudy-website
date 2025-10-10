import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { headers } from "next/headers";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Discord({
      authorization:
        "https://discord.com/api/oauth2/authorize?scope=identify+guilds+email",
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.avatar,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (profile) {
        token.id = profile.id;
      }
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      const botInformationsResult = await fetch(
        "https://discord.com/api/v10/oauth2/applications/@me",
        {
          headers: {
            Authorization: `Bot ${process.env.BOT_TOKEN}`,
          },
        }
      );
      if (!botInformationsResult) token.isOwner = false;
      const data = await botInformationsResult.json();
      token.isOwner = data.owner?.id === token.id;
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          isOwner: token.isOwner as boolean,
        },
        accessToken: token.accessToken,
      };
    },
  },
});
