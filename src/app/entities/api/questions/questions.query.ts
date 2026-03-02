import { useQuery } from "@tanstack/react-query";
import { QuestionsResponse } from "./questions.interface";
import { getUserQuestions } from "./questions.api";

export const useGetQuestionsQuery = (page:number) => {
  return useQuery<QuestionsResponse, Error>({
    queryKey: ["questions", "dashboard", page],
    queryFn: () => getUserQuestions(page),
  });
};
