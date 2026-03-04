'use client';

import { signOut } from '@/app/entities/api/auth';
import { Button } from '@/app/shared/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const AuthLogout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const handleClick = async () => {
    setIsLoading(true);
    await signOut();
    queryClient.invalidateQueries({ queryKey: ['user', 'current'] });

    setIsLoading(false);
  };

  return (
    <Button
      className={`${isLoading ? 'animate-pulse' : ''} text-xl bg-white text-black w-full `}
      onClick={handleClick}
    >
      {isLoading ? 'Loading...' : 'Log out'}
    </Button>
  );
};
