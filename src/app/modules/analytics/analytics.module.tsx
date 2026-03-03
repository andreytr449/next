import { Questions } from '@/app/entities/api/questions';
import { Blocks, calculateQuestions } from '@/app/features/analytics';

interface AnalyticsModuleProps {
  questions: Questions[];
}

export const AnalyticsModule = ({ questions }: AnalyticsModuleProps) => {
  const { answered, avgPerDay, thisWeek, total } = calculateQuestions(questions);
  return (
    <main className="flex flex-col justify-center items-center gap-3 w-full">
      <Blocks
        answered={answered}
        avgPerDay={avgPerDay}
        thisWeek={thisWeek}
        total={total}
      />
    </main>
  );
};
