import { Questions } from '@/app/entities/api/questions';
import {
  Blocks,
  calculateQuestions,
  QuestionsStatusChart,
  UserActivityChart,
} from '@/app/features/analytics';

interface AnalyticsModuleProps {
  questions: Questions[];
}

export const AnalyticsModule = ({ questions }: AnalyticsModuleProps) => {
  const { answered, avgPerDay, thisWeek, total, months } = calculateQuestions(questions);
  return (
    <main className="flex flex-col justify-center items-center gap-3 w-full">
      <Blocks answered={answered} avgPerDay={avgPerDay} thisWeek={thisWeek} total={total} />
      <div className="flex flex-wrap w-full items-center justify-center gap-2">
        <UserActivityChart chartData={months} />
        <QuestionsStatusChart
          answeredQuestionsCount={answered}
          pendingQuestionsCount={total - answered}
        />
      </div>
    </main>
  );
};
