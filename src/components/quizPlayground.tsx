import { useState } from "react";
import { Answer, Question } from "../../types/Question";

enum AnswerResult {
  NotAnswered,
  Correct,
  Incorrect,
}
interface QuizPlayGroundProps {
  question: Question;
}

export default function QuizPlayground({ question }: QuizPlayGroundProps) {
  const [answerResult, setAnswerResult] = useState<AnswerResult>(
    AnswerResult.NotAnswered
  );
  const [explanation, setExplenation] = useState<string | undefined>(undefined);
  function handleClick(userAnswer: Answer) {
    setAnswerResult(
      userAnswer.isValidAnswer ? AnswerResult.Correct : AnswerResult.Incorrect
    );
    setExplenation(question.explanation);
  }
  return answerResult == AnswerResult.NotAnswered ? (
    <div
      id="playground"
      className="container mx-auto text-center bg-base-200 py-16 px-6"
    >
      <h3 className="text-lg mb-4">{question.question}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {question?.answers.map((answer) => (
          <button
            className="btn btn-primary py-8"
            key={answer.id}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div
      id="playground"
      className="container mx-auto text-center bg-base-200 py-16 px-6"
    >
      <h3
        className={`text-lg mb-4 ${
          answerResult === AnswerResult.Correct
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {answerResult === AnswerResult.Correct
          ? "Bonne réponse"
          : "Mauvaise réponse "}
      </h3>
      <span>{explanation}</span>
    </div>
  );
}
