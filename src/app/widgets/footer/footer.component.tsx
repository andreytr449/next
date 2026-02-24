import { FooterCard } from "./elements/footer-card.component";
import {
  firstBlockItems,
  secondBlockItems,
  userBlockItems,
} from "./footer.constant";
import { HandWithPlanet } from "@/app/shared/ui";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-10 px-10 lg:px-36 pt-20 pb-10">
      <div className="w-[500px]">
        <FooterCard
          columns={[
            { title: "Market", items: firstBlockItems },
            { title: "About", items: secondBlockItems },
          ]}
        />
      </div>

      <div className="w-[200px]">
        <FooterCard columns={[{ title: "User", items: userBlockItems }]} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="relative flex justify-between flex-wrap py-14 px-12 w-auto gap-10 bg-accent h-auto min-h-96 rounded-[20px]">
          <div className="absolute right-10 -top-20">
            <HandWithPlanet />
          </div>
          <div className="flex flex-col justify-end items-start">
            <h1 className="font-bold text-3xl">Subscribe to news</h1>
            <p className="">
              Be the first to know about new collections, earn opporunities and
              other news
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
