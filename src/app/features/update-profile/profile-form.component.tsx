'use client';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Button,
  Input,
} from '@/app/shared/ui';
import { IconCloud } from '@tabler/icons-react';
import { useState } from 'react';

export const ProfileForm = ({ username }: { username?: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section>
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconCloud />
          </EmptyMedia>
          <EmptyTitle className="text-white">Profile Picture</EmptyTitle>
          <EmptyDescription>Click to upload your avatar</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            Upload File
          </Button>
        </EmptyContent>
      </Empty>
      <form className="flex flex-col w-full gap-4 px-4 my-5">
        <Input
          value={username ?? ''}
          placeholder="John Doe"
          type="text"
          disabled={isLoading}
          label="Username"
        />
        <Input placeholder="Tell us about yourself" type="text" disabled={isLoading} label="Bio" />
        <button
          type="submit"
          className="cursor-pointer active:translate-y-[2px] w-full text-lg py-4 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white font-light transition duration-200 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div
            className={`${isLoading ? 'animate-pulse' : ''} flex items-center justify-center w-full`}
          >
            {isLoading ? 'Updating...' : 'Save Profile'}
          </div>
        </button>
      </form>
    </section>
  );
};
