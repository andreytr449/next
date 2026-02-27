"use client";

import { useGetQuestionsQuery } from "@/app/entities/api/questions";
import { Questions } from "@/app/entities/api/user";
import { QuestionsListSkeleton } from "@/app/shared/ui";
import { QuestionItem } from "./elements";

export const QuestionsList = ({
  questions: initialQuestions,
}: {
  questions: Questions[];
}) => {
  const { data: allQuestions, isFetching } =
    useGetQuestionsQuery(initialQuestions);

  const notAnsweredQuestions = allQuestions.filter(
    (question) => !question.is_completed,
  );

  return (
    <div className="flex flex-col mt-28 items-center justify-center w-full px-4">
      <h3 className="mb-6 text-2xl font-bold">Your questions:</h3>

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {isFetching && <QuestionsListSkeleton />}

        {!isFetching &&
          notAnsweredQuestions.length > 0 &&
          notAnsweredQuestions.map((question, index) => (
            <QuestionItem
              key={question.id || "question-" + index}
              question={question}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};
