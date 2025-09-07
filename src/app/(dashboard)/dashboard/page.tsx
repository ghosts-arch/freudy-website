import { auth } from "@/auth";
import UserAvatar from "@/components/avatar";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div className="flex">
      <h3 className="text-lg mt-8 ml-8">Bienvenue , {session.user.name}</h3>
    </div>
  );
}
