import { Questions } from '@/app/entities/api/questions';
import { QuestionsStats, MonthActivity } from './analytics.interface';
import { count } from 'console';

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

export const getBestDay = (questions: Questions[]) => {
  if (questions.length === 0) return { count: 0, date: '-' };

  const byDay: Record<string, number> = {};

  questions.forEach((q) => {
    const day = q.created_at.split('T')[0];
    byDay[day] = (byDay[day] ?? 0) + 1;
  });

  const bestDay = Object.entries(byDay).reduce((best, current) =>
    current[1] > best[1] ? current : best
  );

  return {
    count: bestDay[1],
    date: new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    }).format(new Date(bestDay[0])),
  };
};

export const getLongestStreak = (questions: Questions[]) => {
  if (questions.length === 0) return { days: 0, range: '' };

  const days = [...new Set(questions.map((q) => q.created_at.split('T')[0]))].sort();

  let longestStreak = 1;
  let currentStreak = 1;
  let longestStart = days[0];
  let longestEnd = days[0];
  let currentStart = days[0];

  for (let i = 1; i < days.length; i++) {
    const prev = new Date(days[i - 1]);
    const curr = new Date(days[i]);
    const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
        longestStart = currentStart;
        longestEnd = days[i];
      }
    } else {
      currentStreak = 1;
      currentStart = days[i];
    }
  }

  const format = (date: string) =>
    new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(new Date(date));

  return {
    days: longestStreak,
    range: `${format(longestStart)} - ${format(longestEnd)}`,
  };
};

export const getLongestQuestion = (questions: Questions[]) => {
  if (questions.length === 0) return { chars: 0, date: '' };

  const longest = questions.reduce((best, current) =>
    current.question_text.length > best.question_text.length ? current : best
  );

  return {
    chars: longest.question_text.length,
    date: new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(new Date(longest.created_at)),
  };
};

export const calculateQuestions = (questions: Questions[]): QuestionsStats => {
  const total = questions.length;
  const answered = questions.filter((question) => question.is_completed).length;

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const thisWeek = questions.filter((q) => new Date(q.created_at) >= weekAgo).length;

  const avgPerDay = (questions.length / 30).toFixed(1);

  const months = groupByMonth(questions);
  const mostQuestionsDay = getBestDay(questions);
  const streak = getLongestStreak(questions);
  const longestQuestion = getLongestQuestion(questions);

  return {
    total,
    answered,
    thisWeek,
    avgPerDay,
    months,
    mostQuestionsDay,
    streak,
    longestQuestion,
  };
};
