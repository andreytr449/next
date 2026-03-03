import { getAllQuestions } from '@/app/entities/api/questions';
import { AnalyticsModule } from '@/app/modules/analytics';

export default async function Page() {
  const allQuestions = await getAllQuestions();

  if (!allQuestions.ok) return <h1>Something went wrong</h1>;

  return (
    <main className="flex flex-col justify-center items-center gap-3 w-full">
      <AnalyticsModule questions={allQuestions.questions} />
    </main>
  );
}
