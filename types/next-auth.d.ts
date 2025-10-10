import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
    expires: string;
    error: string;
    accessToken?: string;
    guilds?: { name: string; id: string; owner: any }[];
  }

  interface User {
    id: string;
    isOwner?: boolean;
  }

  interface JWT {
    name?: string | null;
    id?: string | null;
    email?: string | null;
    image?: string | null;
    isOwner?: boolean;
    accessToken?: string;
    guilds?: { name: string; id: string; owner: any }[];
  }
}
