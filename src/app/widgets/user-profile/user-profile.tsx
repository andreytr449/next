import { AuthLogout } from '@/app/features/auth-logout';
import Image from 'next/image';
import { TotalQuestions } from './elements';
import Link from 'next/link';
import { DownloadCV } from '@/app/features/download-cv';
import { ProfileSettingsLink } from '@/app/shared/ui';

export const UserProfile = ({
  nickname,
  createdAt,
}: {
  nickname: string;
  createdAt?: Date;
  totalQuestions?: number;
}) => {
  return (
    <section className="relative flex text-white flex-col justify-center w-92 items-center bg-modal rounded-xl px-10 py-2">
      <Image
        src="/UserProfilePhoto.png"
        width={200}
        height={200}
        alt="user profile photo"
        className="rounded-full"
      />
      <p className="text-2xl font-black">{nickname}</p>
      <TotalQuestions />
      <div className="flex justify-between gap-5 items-center">
        <p className="text-gray items-start">Created at:</p>
        <p className="">
          {createdAt &&
            createdAt.toLocaleDateString('en-EN', {
              day: 'numeric',
              month: 'long',
            })}
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <DownloadCV />
        <Link
          className="border border-dashed border-white rounded-full py-1 px-9 transition-all duration:300  hover:bg-white hover:text-black"
          href="/dashboard/analytics"
        >
          Analytics Page
        </Link>
        <AuthLogout />
      </div>
      <ProfileSettingsLink className="absolute top-5 right-4" />
    </section>
  );
};
