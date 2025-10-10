"use client";

import { useSession } from "next-auth/react";
import { SignOut } from "./signOut";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Guild } from "../../types/types";

interface DrawerProps {
  guilds: Guild[];
}

export default function Drawer({ guilds }: DrawerProps) {
  const { data: session } = useSession();

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-48 p-4">
        {/* Sidebar content here */}
        <li>
          <Link href="/" className="text-lg font-bold">
            Freudy
          </Link>
        </li>

        {guilds?.map((guild: Guild) => (
          <ul className="menu bg-base-200 rounded-box w-56" key={guild.id}>
            <li className="menu-title">{guild.name}</li>
            <li>
              <Link href={`/dashboard/${guild.id}`}>Questions</Link>
            </li>
            <li>
              <a>Anecdotes</a>
            </li>
          </ul>
        ))}
        {session?.user.isOwner && (
          <li>
            <Link href="/logs">Logs</Link>
          </li>
        )}
        <li className="mt-auto">
          <SignOut />
        </li>
      </ul>
    </div>
  );
}
