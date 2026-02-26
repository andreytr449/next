import { Profile, Questions, User } from "@/app/entities/api/user/";
import { ShareBanner } from "@/app/features/share-profile";
import { UserProfile } from "@/app/shared/ui";

interface Props {
  user: User;
  profile: Profile;
  questions: Questions[];
}

export const UserProfileModule = ({ profile, questions, user }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center mx-52 my-10">
      <div className="flex items-center justify-between w-full">
        <ShareBanner userId={user.id} />
        <UserProfile
          completedQuestions={1}
          createdAt={new Date(profile.created_at)}
          nickname={profile.username ? profile.username : user.email}
          totalQuestions={questions.length}
        />
      </div>
    </main>
  );
};
