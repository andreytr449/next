"use client";

import { useUserQuery } from "@/app/entities/api/user";
import { AuthModal } from "@/app/features/auth";
import { Button } from "@/app/shared/ui";
import { useState } from "react";
import { UserMenuSkeleton } from "./user-menu-skeleton.component";
import Link from "next/link";

export const UserMenu = () => {
  const { isLoading, isError } = useUserQuery();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <UserMenuSkeleton />;

  return (
    <>
      <AuthModal open={isOpen} onOpenChange={(value) => setIsOpen(value)} />
      {isError ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-white text-black border-2 hover:text-background"
        >
          Create account
        </Button>
      ) : (
        <Link href="/dashboard">
          <Button className="bg-white text-black border-2 hover:text-background">
            Dashboard
          </Button>
        </Link>
      )}
    </>
  );
};
