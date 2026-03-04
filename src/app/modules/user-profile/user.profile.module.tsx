import { Profile, User } from '@/app/entities/api/user/';
import { ShareBanner } from '@/app/features/share-profile';

interface Props {
  user: User;
  profile: Profile;
  totalPages: number;
  currentPage: number;
}

export const UserProfileModule = ({ profile, user, totalPages, currentPage }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center mx-52 my-10">
      <div className="flex items-center justify-between w-full">
        <ShareBanner userId={user.id} />
      </div>
    </main>
  );
};
