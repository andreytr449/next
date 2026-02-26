import { Button } from "@/app/shared/ui";
import Link from "next/link";

export default function NotFoundUser() {
  return (
    <main className="flex flex-col  items-center gap-5 justify-center my-28">
      <h1 className="text-4xl">Whoops! We&apos;re missing someone.</h1>
      <p className="text-gray max-w-92 text-center">
        It looks like you&apos;ve reached this page without specifying who you
        want to ask. We need a User ID to know where to send your question!
      </p>
      <Link href="/">
        <Button>Return to homepage</Button>
      </Link>
    </main>
  );
}
