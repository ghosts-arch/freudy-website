export type State = {
  message: string;
};

export async function createQuestion(
  PrevState: State,
  formData: FormData,
  guildId: string
): Promise<State> {
  const question = formData.get("question");
  const explanation = formData.get("explanation");
  const validAnswer = formData.get("valid_answer");
  const answer1 = formData.get("answer_1");
  const answer2 = formData.get("answer_2");
  const answer3 = formData.get("answer_3");
  const answer4 = formData.get("answer_4");

  if (!validAnswer)
    return { message: "Veuillez selectionner une réponse valide." };
  console.log(
    question,
    explanation,
    validAnswer,
    answer1,
    answer2,
    answer3,
    answer4
  );
  await fetch(`/api/guilds/${guildId}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
      explanation,
      validAnswer,
      answer1,
      answer2,
      answer3,
      answer4,
      guildId,
    }),
  });
  return {
    message: "",
  };
}
