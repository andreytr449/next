export const QuestionsListSkeleton = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={"question-skeleton" + i}
          className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm w-full animate-pulse"
        >
          <div className="w-4 h-6 bg-gray-200 rounded shrink-0"></div>

          <div className="flex flex-col gap-2 w-full mt-1">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
