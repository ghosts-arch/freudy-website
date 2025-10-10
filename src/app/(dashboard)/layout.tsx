import { auth } from "@/auth";

import Drawer from "@/components/drawer";
import { getUserGuilds } from "@/lib/guilds";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  const guilds = await getUserGuilds();

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1"></div>
          <div className="flex-none mr-6">
            <span className="badge bg-base-200 rounded-lg p-4">
              {session?.user.name}
            </span>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <Drawer guilds={guilds} />
    </div>
  );
}
