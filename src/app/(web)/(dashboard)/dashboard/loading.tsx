import { UserProfileSkeleton } from "@/app/shared/ui";

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center mx-52 my-10">
      <div className="flex items-center justify-between w-full">
        <div className="bg-gray animate-pulse h-[170px] w-[400px] rounded-2xl" />
        <UserProfileSkeleton />;
      </div>
      <div className="flex flex-col mt-28 items-center justify-center w-full px-4">
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm w-full animate-pulse"
            >
              <div className="h-5 w-5 bg-gray-200 rounded" />

              <div className="flex flex-col gap-2 w-full mt-0.5">
                <div
                  className={`h-4 bg-gray-200 rounded ${
                    index % 2 === 0 ? "w-3/4" : "w-full"
                  }`}
                />
                {index % 3 === 0 && (
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
