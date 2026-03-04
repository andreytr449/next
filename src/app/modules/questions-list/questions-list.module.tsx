import { QuestionsList, QuestionsPagination } from '@/app/features/qustions-list';

interface Props {
  totalPages: number;
  currentPage: number;
}

export const QuestionListModule = ({ currentPage, totalPages }: Props) => {
  return (
    <section>
      <QuestionsList />
      <QuestionsPagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
};
