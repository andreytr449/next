import Link from "next/link";
import { FooterCardProp } from "./footer-card.interface";

export const FooterCard = ({ columns }: FooterCardProp) => {
  return (
    <div className="flex justify-between flex-wrap py-14 px-16 w-auto gap-10 bg-modal h-auto min-h-96 rounded-[20px]">
      {columns.map((column, columnIndex) => (
        <ul key={columnIndex} className="flex flex-col gap-4">
          <li className="text-[#e4e7e7] text-2xl font-black mb-5">
            {column.title}
          </li>
          {column.items.map((item) => (
            <li key={item.name} className="text-white font-bold">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
