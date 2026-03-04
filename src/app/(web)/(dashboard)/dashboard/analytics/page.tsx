import { getAllQuestions } from '@/app/entities/api/questions';
import { AnalyticsModule } from '@/app/modules/analytics';

export default async function Page() {
  const allQuestions = await getAllQuestions();

  if (!allQuestions.ok) throw new Error(allQuestions.error || 'Failed to fetch questions');

  return (
    <main className="flex flex-col justify-center items-center gap-3 w-full">
      <AnalyticsModule questions={allQuestions.questions} />
    </main>
  );
}
