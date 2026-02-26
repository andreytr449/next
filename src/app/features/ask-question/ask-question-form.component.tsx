"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorText, Textarea } from "@/app/shared/ui";
import { questionType } from "./ask-question.interface";
import { questionScheme } from "./ask-question.constant";

export const AskQuestionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<questionType>({
    resolver: yupResolver(questionScheme),
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (question: questionType) => {
    setIsLoading(true);
    console.log(question);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <h3 className="text-accent text-9xl font-unique">
        Type your question...
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md gap-4 px-4"
      >
        <Textarea label="Question" {...register("question")} />
        <ErrorText message={errors.question?.message} />
        <button
          type="submit"
          className="cursor-pointer active:translate-y-[2px] w-full text-lg py-4 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white font-light transition duration-200 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div
            className={`${isLoading ? "animate-pulse" : ""} flex items-center justify-center w-full`}
          >
            {isLoading ? "Sending..." : "Send Question"}
          </div>
        </button>
      </form>
    </div>
  );
};
