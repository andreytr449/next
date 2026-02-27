import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeQuestion } from "./questions.api";
import { Questions } from "./questions.interface";
import { toast } from "sonner";

export const useCompleteQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (questionId: string) => completeQuestion(questionId),
    onMutate: async (questionId) => {
      await queryClient.cancelQueries({ queryKey: ["questions", "dashboard"] });

      const previousQuestions = queryClient.getQueryData([
        "questions",
        "dashboard",
      ]);
      queryClient.setQueryData(
        ["questions", "dashboard"],
        (oldQuestions: Questions[]) => {
          return oldQuestions.map((question: Questions) =>
            question.id === questionId
              ? { ...question, isCompleted: true }
              : question,
          );
        },
      );
      return { previousQuestions };
    },

    onError: (err, questionId, context) => {
      toast.error(err.message);
      if (context?.previousQuestions) {
        queryClient.setQueryData(
          ["questions", "dashboard"],
          context.previousQuestions,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["questions", "dashboard"] });
    },
  });
};
