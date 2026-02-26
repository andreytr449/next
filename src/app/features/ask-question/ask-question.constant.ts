import { object, string } from "yup";

export const questionScheme = object({
  question: string()
    .required("Question is required")
    .min(4, "Too Short!")
    .max(500, "Too Long!"),
});
