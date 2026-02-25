import { object, string } from "yup";

export const signupScheme = object({
  name: string()
    .required("Name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: string().email("Invalid email format").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const loginScheme = object({
  email: string().email("Invalid email format").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
