import { InferType } from "yup";
import { loginScheme, signupScheme } from "./auth.constant";

export type loginType = InferType<typeof loginScheme>;
export type signupType = InferType<typeof signupScheme>;
