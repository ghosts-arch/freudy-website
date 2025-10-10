"use client";

import Modal from "@/components/ui/modal";

import { useState, useEffect } from "react";
import { Question, DailyFact, Guild } from "../../../../types/types";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const [questions, setQuestions] = useState<Question[]>();

  return (
    <div className="mx-auto text-center mt-8 px-6">
      <p>Not implemented</p>
    </div>
  );
}
