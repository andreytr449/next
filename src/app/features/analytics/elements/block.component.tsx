import { cn } from '@/app/shared/lib/utils';
import Image from 'next/image';

export const Block = ({
  title,
  iconUrl,
  value,
  additionalText,
  className,
}: {
  title: string;
  iconUrl: string;
  value: number | string;
  additionalText?: string;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        'flex min-w-52 gap-2 flex-col border-2 border-dashed border-gray p-5 rounded-xl',
        className
      )}
    >
      <Image src={iconUrl} alt={title} width={40} height={40} />
      <h3 className="text-gray">{title}</h3>
      <p className="text-4xl">{value}</p>
      <p className="text-xs text-gray font-mono">{additionalText}</p>
    </section>
  );
};
