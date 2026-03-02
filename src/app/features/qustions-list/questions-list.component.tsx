"use client";

import { useGetQuestionsQuery } from "@/app/entities/api/questions";
import { QuestionItem } from "./elements";
import { useSearchParams } from "next/navigation";
import { QuestionsListSkeleton } from "@/app/shared/ui";

export const QuestionsList = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data: response, isLoading } = useGetQuestionsQuery(page);

  const questions = response?.questions || []
  if(!isLoading && (!questions || questions?.length === 0)) return <h2 className="mt-28 flex items-center justify-center w-full text-3xl">No questions yet.</h2>
  console.log(questions)
  return (
    <div className="flex flex-col mt-28 items-center justify-center w-full px-4">
      <h3 className="mb-6 text-2xl font-bold">Your questions:</h3>

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {isLoading && <QuestionsListSkeleton />}

        {questions && questions.map((question, index) => (
            <QuestionItem
              key={question.id}
              question={question}
              index={index}
              page={page}
            />
          ))}
      </div>
    </div>
  );
};
