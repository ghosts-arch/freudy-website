"use client";

import { createQuestion, State } from "@/app/actions/createQuestion";
import { useActionState } from "react";

export default function CreateQuestionForm() {
  const initialState: State = { message: "" };
  const [state, formAction] = useActionState(createQuestion, initialState);
  return (
    <form className="form-control space-y-4" action={formAction}>
      <label className="label">Question</label>
      <input
        type="text"
        className="input w-full"
        name="question"
        placeholder="question"
      />

      <label className="label">Explication</label>
      <input
        type="text"
        className="input w-full"
        name="explanation"
        placeholder="explication"
      />

      <div className="divider"></div>
      <fieldset className="fieldset space-y-3">
        <legend>Réponses possibles (1 réponse valide)</legend>
        <div className="flex items-center gap-3">
          <input
            name="answer_1"
            type="text"
            className="input w-full"
            placeholder="Réponse 1"
          />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                id="answer_1"
                value="answer_1"
                name="valid_answer"
                className="radio radio-error checked:radio-success"
                defaultChecked={false}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="input w-full flex-1"
            name="answer_2"
            placeholder="Réponse 2"
          />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                name="valid_answer"
                id="answer_2"
                value="answer_2"
                className="radio radio-error checked:radio-success"
                defaultChecked={false}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="input w-full flex-1 "
            name="answer_3"
            placeholder="Réponse 3"
          />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                name="valid_answer"
                value="answer_3"
                id="answer_3"
                className="radio radio-error checked:radio-success"
                defaultChecked={false}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="input w-full flex-1"
            name="answer_4"
            placeholder="Réponse 4"
          />
          <div className="flex items-center gap-2">
            <label className="label">
              <input
                type="radio"
                name="valid_answer"
                id="answer_4"
                value="answer_4"
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
