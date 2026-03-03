import { Questions } from '@/app/entities/api/questions';
import { QuestionsStats } from './analytics.interface';

export const calculateQuestions = (questions: Questions[]): QuestionsStats => {
  const total = questions.length;
  const answered = questions.filter((question) => question.is_completed).length;

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const thisWeek = questions.filter((q) => new Date(q.created_at) >= weekAgo).length;

  const avgPerDay = (questions.length / 30).toFixed(1);

  return {
    total,
    answered,
    thisWeek,
    avgPerDay,
  };
};
