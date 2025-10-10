import { useEffect, useState } from "react";
import { Question } from "../../../../../types/types";
import { getGuildQuestions } from "@/lib/questions";

export function useGuildsQuestions(guildId: string) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getGuildQuestions(guildId);
      setQuestions(questions);
      setLoading(false);
    };
    fetchQuestions();
  }, [guildId]);
  return { questions, loading };
}
