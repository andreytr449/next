import Image from "next/image";

export const UserProfile = ({
  nickname,
  totalQuestions,
  createdAt,
  variant = "full",
}: {
  nickname: string;
  createdAt?: Date;
  totalQuestions?: number;
  variant: "short" | "full";
}) => {
  return (
    <section className="flex text-white flex-col justify-center w-92 items-center bg-modal rounded-xl px-10 py-2">
      <Image
        src="/UserProfilePhoto.png"
        width={200}
        height={200}
        alt="user profile photo"
        className="rounded-full"
      />
      {variant === "full" ? (
        <>
          <p className="text-2xl font-black">{nickname}</p>
          <div className="flex justify-between gap-5 items-center">
            <p className="text-gray items-start">Total Questions:</p>
            <p className="">{totalQuestions}</p>
          </div>
          <div className="flex justify-between gap-5 items-center">
            <p className="text-gray items-start">Created at:</p>
            {/* <p className="">
              {createdAt &&
                createdAt.toLocaleDateString("en-EN", {
                  day: "numeric",
                  month: "long",
                })}
            </p> */}
          </div>
        </>
      ) : (
        <p className="text-2xl font-black">{nickname}</p>
      )}
    </section>
  );
};
