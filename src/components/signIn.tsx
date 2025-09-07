import { signInDiscord } from "@/app/actions/auth";

export function SignIn() {
  return (
    <form action={signInDiscord}>
      <button type="submit" className="btn btn-primary rounded-full">
        Connexion avec Discord
      </button>
    </form>
  );
}
