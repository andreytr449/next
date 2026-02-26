"use client";

import { Button } from "@/app/shared/ui";
import { toast } from "sonner";

export const ShareBanner = ({ userId }: { userId: string }) => {
  const handleCopyLink = async () => {
    try {
      const linkToCopy = `${window.location.origin}/ask/${userId}`;
      await navigator.clipboard.writeText(linkToCopy);

      toast.success("Link's successfully copied!");
    } catch {
      toast.error("Failed to copy link. Try again!");
    }
  };

  return (
    <div className="relative inline-flex h-auto  overflow-hidden rounded-xl p-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="flex gap-5 flex-col items-start h-full w-full cursor-pointer justify-start  rounded-xl bg-slate-950 px-3 py-3 text-sm font-medium text-white backdrop-blur-3xl">
        <h3 className="text-2xl">What do they want to ask you?</h3>
        <p className="text-gray max-w-96">
          Find out right now! Copy your link, drop it in your stories or bio,
          and start getting anonymous questions from your followers.
        </p>
        <Button onClick={handleCopyLink}>Copy link</Button>
      </span>
    </div>
  );
};
