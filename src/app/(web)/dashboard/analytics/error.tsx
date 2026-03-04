'use client';

import { Button } from '@/app/shared/ui';
import Link from 'next/link';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
      <Link href="/">
        <Button>Back to home page</Button>
      </Link>
    </div>
  );
}
