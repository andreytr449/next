import Image from 'next/image';

export const UserCard = ({ nickname }: { nickname: string }) => {
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
    </section>
  );
};
