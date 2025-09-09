export async function createQuestion(formData: FormData): Promise<void> {
  const question = formData.get("question");
  const explanation = formData.get("explanation");
  const validAnswer = formData.get("valid_answer");
  const answer1 = formData.get("answer_1");
  const answer2 = formData.get("answer_2");
  const answer3 = formData.get("answer_3");
  const answer4 = formData.get("answer_4");
  console.log(
    question,
    explanation,
    validAnswer,
    answer1,
    answer2,
    answer3,
    answer4
  );
}
