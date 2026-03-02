import { QuestionsResponse } from "./questions.interface";

export async function getUserQuestions(
  page: number = 1,
): Promise<QuestionsResponse> {
  const response = await fetch(`/api/questions?page=${page}&limit=5`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch user questions");
  }

  return data;
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
