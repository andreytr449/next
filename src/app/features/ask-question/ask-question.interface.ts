import { InferType } from "yup";
import { questionScheme } from "./ask-question.constant";

export type questionType = InferType<typeof questionScheme>;
