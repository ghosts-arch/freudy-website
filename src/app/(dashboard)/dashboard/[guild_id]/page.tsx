"use client";

import Modal from "@/components/ui/modal";
import QuestionsGrid from "@/components/questionsGrid";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { Question } from "../../../../../types/types";
import { useParams } from "next/navigation";

export default function GuildQuestions() {
  const { data: session, status } = useSession();
  const { guild_id } = useParams<{ guild_id: string }>();

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    console.log("t");
    fetch(`/api/guilds/${guild_id}/questions`).then((response) => {
      response
        .json()
        .then((questions: Question[]) => {
          console.log(questions);
          for (const question of questions) {
            console.log("test", question.answers);
          }
          setQuestions(questions);
        })
        .catch(() => {
          setQuestions([]);
        });
    });
  }, [guild_id]);

  console.log("t");

  return (
    <div className="mx-auto text-center mt-8 px-6">
      <div className="flex justify-end mb-4 gap-2">
        <Modal guildId={guild_id} />
        <button className="btn btn-secondary mb-4 rounded-full">Ajouter</button>
      </div>
      {questions?.length > 0 ? (
        <QuestionsGrid questions={questions}></QuestionsGrid>
      ) : (
        <p>pas de questions</p>
      )}
    </div>
  );
}
