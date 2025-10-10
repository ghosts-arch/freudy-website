import { Question } from "../../types/types";

interface QuestionsGridProps {
  questions: Question[];
}

export default function QuestionsGrid({ questions }: QuestionsGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-start">
      {questions?.map((question, index) => (
        <div
          className="card  bg-base-300 shadow-sm card-sm rounded-lg self-start"
          key={index}
        >
          <div className="card-body space-y-4">
            <h2 className="card-title">{question.question}</h2>
            <p>
              Le système limbique joue un rôle clé dans les émotions et la
              mémoire.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {question.answers.map((answer, index) => (
                <span
                  className={`${
                    answer.isValidAnswer === true
                      ? "border-success"
                      : "border-error"
                  } border px-4 py-2 rounded-full`}
                  key={answer.id}
                >
                  {answer.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
