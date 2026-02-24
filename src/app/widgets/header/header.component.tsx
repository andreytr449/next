import { Logo } from "@/app/shared/ui";
import Link from "next/link";
import { Button } from "@/app/shared/ui";

export const Header = () => {
  return (
    <header className="z-50 bg-background sticky top-0 flex w-full items-center px-20 p-4 border justify-between border-b-gray">
      <Link href="/" className="flex items-center gap-2">
        <Logo />
        <span className="text-xl font-black">Spytay</span>
      </Link>
      <Button className="bg-white text-black border-2 hover:text-background">
        Create account
      </Button>
    </header>
  );
};
