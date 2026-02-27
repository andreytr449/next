import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeQuestion } from "./questions.api";
import { Questions } from "./questions.interface";

export const useCompleteQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (questionId: string) => completeQuestion(questionId),
    onMutate: async (questionId) => {
      await queryClient.cancelQueries({ queryKey: ["questions"] });

      const previousQuestions = queryClient.getQueryData(["questions"]);

      queryClient.setQueryData(["questions"], (oldQuestions: Questions[]) => {
        if (!oldQuestions) return [];

        return oldQuestions.map((question: Questions) =>
          question.id === questionId
            ? { ...question, isCompleted: true }
            : question,
        );
      });

      return { previousQuestions };
    },

    onError: (err, questionId, context) => {
      if (context?.previousQuestions) {
        queryClient.setQueryData(["questions"], context.previousQuestions);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
  });
};
