import { Questions } from "./questions.interface";

export async function getUserQuestions(): Promise<Questions[] | []> {
  const response = await fetch("/api/questions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch user questions");
  }

  return data.questions;
}

export async function completeQuestion(questionId: string) {
  const response = await fetch("/api/questions", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ questionId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to complete user question");
  }

  return data;
}
