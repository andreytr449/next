"use client"


import { Questions, useCompleteQuestion } from "@/app/entities/api/questions/";
import * as motion from "motion/react-client";
import { useState } from "react";

export const QuestionItem = ({
  question,
  index,
  page,
}: {
  question: Questions;
  index: number;
  page: number;
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const { mutate: completedQuestions } = useCompleteQuestion();

  const handleCompleteQuestion = () => {
    setIsLoading(true)
    completedQuestions(question.id)
  }

  const startIndex = (page - 1) * 5;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.3 }}
      onClick={handleCompleteQuestion}
      className={`${isLoading ? 'animate-pulse opacity-40' : ''} group relative flex items-start gap-3 cursor-pointer p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm w-full`}
    >
      <div
        className="
          absolute rotate-6 top-0 -right-10 flex justify-center items-center z-10 
          bg-modal text-white text-xs px-3 py-1.5 rounded-xl shadow-lg 
          pointer-events-none whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
        "
      >
        Mark as answered
      </div>
      <span className="font-bold text-gray-500">{index + startIndex + 1}.</span>
      <span className="text-gray-800">{question.question_text}</span>
    </motion.div>
  );
};
