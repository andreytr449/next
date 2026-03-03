import { Questions } from '@/app/entities/api/questions';
import {
  OverviewStats,
  calculateQuestions,
  QuestionsStatusChart,
  UserActivityChart,
  InsightsBlocks,
  WeekComparisonChart,
} from '@/app/features/analytics';
import { HeroArm } from '@/app/shared/ui';
import Image from 'next/image';

interface AnalyticsModuleProps {
  questions: Questions[];
}

export const AnalyticsModule = ({ questions }: AnalyticsModuleProps) => {
  const {
    answered,
    avgPerDay,
    thisWeek,
    total,
    months,
    mostQuestionsDay,
    longestQuestion,
    streak,
    weekComparison,
  } = calculateQuestions(questions);

  return (
    <main className="relative flex flex-col justify-center items-center gap-3 w-full">
      <h1 className="text-primary font-unique text-[160px] mt-5">Your Stats</h1>
      <p>Here&apos;s how your questions are doing!</p>
      <OverviewStats answered={answered} avgPerDay={avgPerDay} thisWeek={thisWeek} total={total} />
      <div className="flex flex-wrap w-full items-center justify-center gap-10">
        <UserActivityChart chartData={months} />
        <QuestionsStatusChart
          answeredQuestionsCount={answered}
          pendingQuestionsCount={total - answered}
        />
      </div>
      <div className="relative">
        <Image
          className="absolute -top-10 right-10"
          src="/hero-6.png"
          alt="hero"
          width={150}
          height={150}
        />
        <InsightsBlocks
          bestDay={mostQuestionsDay}
          longestQuestion={longestQuestion}
          streak={streak}
        />
      </div>
      <WeekComparisonChart chartData={weekComparison} />
      <span className="absolute top-21 -left-1">
        <HeroArm />
      </span>
    </main>
  );
};
