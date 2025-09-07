import { SignOut } from "@/components/signOut";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200 shadow-sm p-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Freudy
          </a>
        </div>
        <div className="flex gap-2">
          <SignOut />
        </div>
      </div>
      {children}
    </div>
  );
}
