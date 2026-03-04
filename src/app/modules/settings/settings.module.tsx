import { ProfileForm } from '@/app/features/update-profile';
import { HeroArm } from '@/app/shared/ui';

export const SettingModule = async ({ profile }: { profile: { username: string } }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-start justify-start mb-5">
        <h1 className="font-unique text-9xl text-primary">Profile Settings</h1>
        <h3 className="text-gray">Manage your public profile information</h3>
      </div>
      <div className="border border-dashed border-gray rounded-xl p-5 bg-modal w-[500px]">
        <ProfileForm username={profile.username} />
      </div>
      <span className="absolute top-36 -right-3 -scale-x-100">
        <HeroArm />
      </span>
    </div>
  );
};
