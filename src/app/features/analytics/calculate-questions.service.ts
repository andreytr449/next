import { Questions } from '@/app/entities/api/questions';
import { QuestionsStats, MonthActivity } from './analytics.interface';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function groupByMonth(questions: Questions[]): MonthActivity[] {
  let months: Record<string, number> = {};
  months = Object.fromEntries(MONTHS.map((m) => [m, 0]));

  questions.forEach((q) => {
    const month = new Intl.DateTimeFormat('en-US', {
      month: 'long',
    }).format(new Date(q.created_at));

    months[month] = (months[month] ?? 0) + 1;
  });

  return Object.entries(months).map(([month, count]) => ({
    month,
    desktop: count,
  }));
}

export const calculateQuestions = (questions: Questions[]): QuestionsStats => {
  const total = questions.length;
  const answered = questions.filter((question) => question.is_completed).length;

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const thisWeek = questions.filter((q) => new Date(q.created_at) >= weekAgo).length;

  const avgPerDay = (questions.length / 30).toFixed(1);

  const months = groupByMonth(questions);

  return {
    total,
    answered,
    thisWeek,
    avgPerDay,
    months,
  };
};
