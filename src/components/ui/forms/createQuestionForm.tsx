"use client";

import { createQuestion } from "@/app/actions/createQuestion";

export default function CreateQuestionForm() {
  return (
    <form className="form-control space-y-4" action={createQuestion}>
      <label className="label">Question</label>
      <input type="text" className="input w-full" name="question" />
      <label className="label">Explication</label>
      <input type="text" className="input w-full" name="explanation" />
      <div className="divider"></div>
      <fieldset className="fieldset space-y-3">
        <legend>Réponses possibles</legend>
        <div className="flex items-center gap-3">
          <input name="answer_1" type="text" className="input w-full flex-1" />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                id="answer_1"
                name="valid_answer"
                className="radio radio-error checked:radio-success"
                defaultChecked={false}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="text" className="input w-full flex-1" name="answer_2" />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                name="valid_answer"
                id="answer_2"
                className="radio radio-error checked:radio-success"
                defaultChecked={false}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="text" className="input w-full flex-1 " name="answer_3" />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                name="valid_answer"
                id="answer_3"
                className="radio radio-error checked:radio-success"
                defaultChecked={false}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="text" className="input w-full flex-1" name="answer_4" />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                name="valid_answer"
                id="answer_4"
                className="radio radio-error checked:radio-success"
                defaultChecked={false}
              />
            </label>
          </div>
        </div>
      </fieldset>

      <div className="card-actions justify-end mt-4">
        <button className="btn btn-success">Ajouter</button>
      </div>
    </form>
  );
}
