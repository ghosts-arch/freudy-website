"use server";

import { signIn, signOut } from "@/auth";

export async function signInDiscord() {
  await signIn("discord", { redirectTo: "/dashboard" });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}
