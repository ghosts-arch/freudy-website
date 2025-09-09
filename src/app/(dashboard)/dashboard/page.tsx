import { auth } from "@/auth";
import CreateQuestionForm from "@/components/ui/forms/createQuestionForm";

import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="card card-border bg-base-100 w-[32rem]">
        <div className="card-body">
          <h2 className="card-title mb-4">Ajouter une question</h2>
          <CreateQuestionForm />
        </div>
      </div>
    </div>
  );
}
