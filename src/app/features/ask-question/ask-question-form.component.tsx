"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorText, Textarea } from "@/app/shared/ui";
import { questionType } from "./ask-question.interface";
import { questionScheme } from "./ask-question.constant";
import { createQuestion } from "@/app/entities/api/questions";
import { toast } from "sonner";
import { useQuestionDraftStore } from "@/app/shared/store/question-draft";

export const AskQuestionForm = ({ userId }: { userId: string }) => {
  const { draft, clearDraft, setDraft } = useQuestionDraftStore();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<questionType>({
    resolver: yupResolver(questionScheme),
    defaultValues: {
      question: draft,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!getValues("question") && draft) {
      setValue("question", draft);
    }
  }, [draft, setValue, getValues]);

  const onSubmit = async (data: questionType) => {
    setIsLoading(true);
    const res = await createQuestion(userId, data.question);

    if (!res.ok) {
      toast.error(res.error);
    } else {
      toast.success("Question successful sended");
      reset({ question: "" });
      clearDraft();
    }
    setIsLoading(false);
  };

  const questionField = register("question");

  return (
    <div className="flex flex-col justify-center bg-modal p-10 rounded-2xl items-center pt-4">
      <h3 className="text-accent text-9xl font-unique">
        Type your question...
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md gap-4 px-4"
      >
        <Textarea
          {...questionField}
          onChange={(event) => {
            questionField.onChange(event);
            setDraft(event.target.value);
          }}
          label="Question"
        />
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
