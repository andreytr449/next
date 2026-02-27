import { Profile, User } from "@/app/entities/api/user/";
import { QuestionsList } from "@/app/features/qustions-list";
import { ShareBanner } from "@/app/features/share-profile";
import { UserProfile } from "@/app/shared/ui";

interface Props {
  user: User;
  profile: Profile;
  totalPages: number;
}

export const UserProfileModule = ({ profile, user, totalPages }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center mx-52 my-10">
      <div className="flex items-center justify-between w-full">
        <ShareBanner userId={user.id} />
        <UserProfile
          completedQuestions={1}
          variant="full"
          createdAt={new Date(profile.created_at)}
          nickname={profile.username ? profile.username : user.email}
          totalQuestions={totalPages * 5}
        />
      </div>
      <QuestionsList />
    </main>
  );
};
