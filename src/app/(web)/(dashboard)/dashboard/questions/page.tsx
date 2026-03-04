import { getAllQuestions } from '@/app/entities/api/questions';
import { QuestionListModule } from '@/app/modules/questions-list';

export default async function QuestionsPage({ searchParams }: { searchParams: { page?: string } }) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  const response = await getAllQuestions();

  if (!response.ok) throw new Error(response.error);

  const notAnsweredQuestions = response.questions.filter((q) => !q.is_completed);
  const count = notAnsweredQuestions.length;
  const totalPages = count ? Math.ceil(count / 5) : 1;

  return <QuestionListModule currentPage={currentPage} totalPages={totalPages} />;
}
