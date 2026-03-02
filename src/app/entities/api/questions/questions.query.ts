import { useQuery } from "@tanstack/react-query";
import { QuestionsResponse, Questions } from "./questions.interface";
import { getUserQuestions } from "./questions.api";

export const useGetQuestionsQuery = (initialData?: Questions[], page = 1) => {
  return useQuery<QuestionsResponse, Error>({
    queryKey: ["questions", "dashboard"],
    queryFn: () => getUserQuestions(page),
  });
};
