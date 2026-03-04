import { getAllQuestions } from '@/app/entities/api/questions';
import { AnalyticsModule } from '@/app/modules/analytics';
import { Button } from '@/app/shared/ui';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default async function Page() {
  const allQuestions = await getAllQuestions();

  if (!allQuestions.ok) throw new Error(allQuestions.error || 'Failed to fetch questions');

  return (
    <main className="flex flex-col justify-center items-center gap-3 w-full">
      <Link className="fixed top-24 left-10 z-20" href="/dashboard">
        <Button>
          <ChevronLeft /> Back to dashboard
        </Button>
      </Link>
      <AnalyticsModule questions={allQuestions.questions} />
    </main>
  );
}
