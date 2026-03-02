"use client"


import { useGetQuestionsQuery } from "@/app/entities/api/questions"

export const TotalQuestions = () => {
    const {data:questions, isFetching} = useGetQuestionsQuery(1)

    const totalQuestions = questions?.count

    return ( 
    <div className="flex justify-between gap-5 items-center">
        <p className="text-gray items-start">Total Questions:</p>
        {isFetching ? 
        <div className="bg-gray rounded-xl animate-pulse w-24 h-5" />
   :        <p className="">{totalQuestions}</p>
    }
    </div>
  )
}