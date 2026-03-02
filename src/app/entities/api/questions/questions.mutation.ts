import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeQuestion } from "./questions.api";
import { Questions, QuestionsResponse } from "./questions.interface";
import { toast } from "sonner";

export const useCompleteQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (questionId: string) => completeQuestion(questionId),
    onMutate: async (questionId) => {
      await queryClient.cancelQueries({ queryKey: ["questions", "dashboard"] });
      const previousQuestions = queryClient.getQueriesData<QuestionsResponse>({queryKey: ["questions", "dashboard"]});
    
      queryClient.setQueriesData<QuestionsResponse>({
        queryKey:['questions', 'dashboard']
      },
      (oldQuestions) => {
        if(!oldQuestions) return undefined
        return {
                ...oldQuestions,
                count: oldQuestions.count - 1,
                questions: oldQuestions.questions.map((question: Questions) =>
                  question.id === questionId
                ? { ...question, isCompleted: true }
                    : question,
                )
              }
        })
        
        return {  previousQuestions };
    },

    onError: (err, questionId, context) => {
      toast.error(err.message);
      if (context?.previousQuestions) {
        context.previousQuestions.forEach(([queryKey, previousData]) => {
          queryClient.setQueryData(queryKey, previousData);
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["questions", "dashboard"] });
    },
  });
};
