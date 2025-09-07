import { signOutUser } from "@/app/actions/auth";

export function SignOut() {
  return (
    <form action={signOutUser}>
      <button type="submit" className="btn btn-error rounded-full">
        Deconnexion
      </button>
    </form>
  );
}
