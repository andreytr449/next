import { BestDay, QuestionsStreak, LongestQuestion } from './analytics.interface';
import { Block } from './elements';

export const InsightsBlocks = ({
  bestDay,
  streak,
  longestQuestion,
}: {
  bestDay: BestDay;
  streak: QuestionsStreak;
  longestQuestion: LongestQuestion;
}) => {
  return (
    <section className="flex flex-wrap gap-15 items-center justify-between my-10">
      <Block
        className="px-16 py-5"
        iconUrl="/Trophy.png"
        title="Best Day Record"
        value={bestDay.count}
        additionalText={bestDay.date}
      />
      <Block
        className="px-16 py-5"
        iconUrl="/Fire.png"
        title="Longest Streak"
        value={streak.days}
        additionalText={streak.range}
      />
      <Block
        className="px-16 py-5"
        iconUrl="/Writing Hand.png"
        title="Longest Question"
        value={longestQuestion.chars}
        additionalText={longestQuestion.date}
      />
    </section>
  );
};
