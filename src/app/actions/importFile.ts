export type ImportFileFormState = {
  success: boolean;
};

export async function importFile(
  guildId: string,
  PrevState: ImportFileFormState,
  formData: FormData
): Promise<ImportFileFormState> {
  console.log(guildId);
  const importedFile = (formData.get("importedFile") as File) || null;
  if (!importedFile || importedFile.size === 0 || importedFile.name === "")
    return { success: false };
  const fileContent = await importedFile.text();
  const result = await fetch(`/api/guilds/${guildId}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileContent: fileContent }),
  });
  if (result.ok) {
    return { success: true };
  } else {
    return { success: false };
  }
}
