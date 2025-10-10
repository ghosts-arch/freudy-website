"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signInDiscord() {
  await signIn("discord", { redirectTo: "/dashboard" });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
  console.log("logout");
}
