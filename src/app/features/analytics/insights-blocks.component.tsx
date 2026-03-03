import { Block } from './elements';

export const InsightsBlocks = ({
  answered,
  thisWeek,
  total,
}: {
  answered: number;
  avgPerDay: string;
  thisWeek: number;
  total: number;
}) => {
  return (
    <section className="flex flex-wrap gap-15 items-center justify-between my-10">
      <Block
        className="px-16 py-5"
        iconUrl="/Trophy.png"
        title="Best Day Record"
        value={total}
        additionalText="Asked on 27 feb"
      />
      <Block
        className="px-16 py-5"
        iconUrl="/Fire.png"
        title="Longest Streak"
        value={answered}
        additionalText="Asked on 27 feb"
      />
      <Block
        className="px-16 py-5"
        iconUrl="/Writing Hand.png"
        title="Longest Question"
        value={thisWeek}
        additionalText="Asked on 27 feb"
      />
    </section>
  );
};
