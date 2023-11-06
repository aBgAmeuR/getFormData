export const getFormData = (formData: FormData): Record<string, string | null> => {
  const data: Record<string, string | null> = {};
  formData.forEach((value, key) => {
    data[key] =
      typeof value === "string" && value === "" ? null : (value as string);
  });
  return JSON.parse(JSON.stringify(data));
};
