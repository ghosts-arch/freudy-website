"use client";

import { importFile, ImportFileFormState } from "@/app/actions/importFile";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";

interface ModalProps {
  guildId: string;
}

export default function Modal({ guildId }: ModalProps) {
  console.log("modal", guildId);
  const initialState: ImportFileFormState = { success: false };
  const guildImportFile = importFile.bind(null, guildId);
  const [state, formAction] = useActionState(guildImportFile, initialState);
  useEffect(() => {
    if (state.success) {
      (document.getElementById("my_modal_1") as HTMLDialogElement).close();
      redirect("/dashboard");
    }
  }, [state]);
  const openModal = () => {
    (document.getElementById("my_modal_1") as HTMLDialogElement).showModal();
  };
  return (
    <>
      <button className="btn btn-primary rounded-full" onClick={openModal}>
        Importer
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box space-y-3">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Importer depuis un fichier</h3>
          <form action={formAction} className="flex flex-col space-y-3">
            <input
              type="file"
              className="file-input w-full"
              name="importedFile"
              accept=".csv, .json"
            />
            <button className="btn btn-success">importer</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
