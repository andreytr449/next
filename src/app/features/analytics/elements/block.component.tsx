import Image from 'next/image';

export const Block = ({
  title,
  iconUrl,
  value,
}: {
  title: string;
  iconUrl: string;
  value: number | string;
}) => {
  return (
    <section className="flex min-w-52 gap-2 flex-col border-2 border-dashed border-gray p-5 rounded-xl">
      <Image src={iconUrl} alt={title} width={40} height={40} />
      <h3 className="text-gray">{title}</h3>
      <p className="text-4xl">{value}</p>
    </section>
  );
};
