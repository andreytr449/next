'use client';

import { Settings } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../lib/utils';

export const ProfileSettingsLink = ({ className }: { className?: string }) => {
  return (
    <Link
      className={cn(
        'group relative border border-white rounded-full p-1 flex justify-center items-center gap-1 overflow-hidden transition-all duration-300',
        className
      )}
      href="/dashboard/settings"
    >
      <Settings
        className="shrink-0 pl-1 transition-all duration-500 group-hover:max-w-0 max-w-xs [transition-delay:300ms] group-hover:[transition-delay:0ms]"
        size={20}
      />
      <p className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs">
        Settings
      </p>
    </Link>
  );
};
