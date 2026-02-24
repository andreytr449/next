"use client";

import { AuthModal } from "@/app/features/auth";
import { Button } from "@/app/shared/ui";
import { useState } from "react";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AuthModal open={isOpen} onOpenChange={(value) => setIsOpen(value)} />
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-white text-black border-2 hover:text-background"
      >
        Create account
      </Button>
    </>
  );
};
