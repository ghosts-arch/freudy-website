export const getGuildQuestions = async (guildId: string) => {
  const response = await fetch(
    `http://${process.env.NEXT_API_IP}:${process.env.NEXT_API_PORT}/${guildId}/questions`,
    {
      headers: {
        "x-api-key": process.env.INTERNAL_API_KEY,
      },
    }
  );
  if (!response.ok) {
    console.log(response);
  }
  try {
    const questions = await response.json();
    console.log("1", questions);
    return questions;
  } catch (err) {
    console.log(err);
  }
};
