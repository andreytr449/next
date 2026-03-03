import { Block } from './elements';

export const OverviewStats = ({
  answered,
  avgPerDay,
  thisWeek,
  total,
}: {
  answered: number;
  avgPerDay: string;
  thisWeek: number;
  total: number;
}) => {
  return (
    <section className="flex flex-wrap gap-3 items-center justify-between my-10">
      <Block iconUrl="/Envelope With Arrow.png" title="Total Questions" value={total} />
      <Block iconUrl="/Check Mark Button.png" title="Answered" value={answered} />
      <Block iconUrl="/Fire.png" title="This Week" value={thisWeek} />
      <Block iconUrl="/Calendar.png" title="Avg per Day" value={avgPerDay} />
    </section>
  );
};
