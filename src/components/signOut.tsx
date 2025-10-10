"use client";

import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-error hover:underline"
    >
      Deconnexion
    </button>
  );
}
