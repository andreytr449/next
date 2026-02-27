import { useQuery } from "@tanstack/react-query";
import { Questions } from "./questions.interface";
import { getUserQuestions } from "./questions.api";

export const useGetQuestionsQuery = (initialData?: Questions[]) => {
  return useQuery<Questions[], Error>({
    queryKey: ["questions", "dashboard"],
    queryFn: getUserQuestions,
    initialData: initialData ?? [],
  });
};
