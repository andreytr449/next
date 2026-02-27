"use client";

import {
  useCompleteQuestion,
  useGetQuestionsQuery,
} from "@/app/entities/api/questions";
import { Questions } from "@/app/entities/api/user";

export const QuestionsList = ({
  questions: initialQuestions,
}: {
  questions: Questions[];
}) => {
  const { data: questions } = useGetQuestionsQuery(initialQuestions);
  const { mutate: completedQuestions } = useCompleteQuestion();
  return (
    <div className="flex flex-col mt-28 items-center justify-center w-full px-4">
      <h3 className="mb-6 text-2xl font-bold">Your questions:</h3>

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {questions.map((question, index) => (
          <div
            onClick={() => completedQuestions(question.id)}
            className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm w-full"
            key={question.id || "question-" + index}
          >
            <span className="font-bold text-gray-500">{index + 1}.</span>
            <span className="text-gray-800">{question.question_text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
