import { AuthLogout } from '@/app/features/auth-logout';
import Image from 'next/image';
import { TotalQuestions } from './elements';
import Link from 'next/link';
import { DownloadCV } from '@/app/features/download-cv';

export const UserProfile = ({
  nickname,
  createdAt,
  variant = 'full',
}: {
  nickname: string;
  createdAt?: Date;
  totalQuestions?: number;
  variant: 'short' | 'full';
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
      {variant === 'full' ? (
        <>
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
          <DownloadCV />
          <Link
            className="border border-dashed border-white rounded-full py-1 px-5 my-5"
            href="/dashboard/analytics"
          >
            Analytics Page
          </Link>
          <AuthLogout />
        </>
      ) : (
        <p className="text-2xl font-black">{nickname}</p>
      )}
    </section>
  );
};
