import { Profile } from "@/app/entities/api/user";
import { AskQuestionForm } from "@/app/features/ask-question";
import { UserProfile } from "@/app/shared/ui";

export const SendQuestionModule = ({
  profile,
  userId,
}: {
  profile: Profile;
  userId: string;
}) => {
  return (
    <main className="flex flex-col gap-10 items-center justify-center mx-52 my-10">
      <h1 className="text-5xl">Question to</h1>
      <UserProfile variant="short" nickname={profile.username} />
      <AskQuestionForm userId={userId} />
    </main>
  );
};
