"use client";

import { Dialog, DialogContent, DialogTitle } from "@/app/shared/ui";
import { useState } from "react";
import { LoginForm } from "./login-form.component";
import { RegisterForm } from "./register-form.component";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [currentSection, setCurrentSection] = useState<"signIn" | "signUp">(
    "signIn",
  );

  const handlePress = () => {
    setCurrentSection((prevState) =>
      prevState === "signUp" ? "signIn" : "signUp",
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <h1 className="text-accent text-9xl font-unique">
          {currentSection === "signUp" ? "Create account" : "Login"}
        </h1>
        {currentSection === "signIn" && <LoginForm />}
        {currentSection === "signUp" && <RegisterForm />}
        <div className="flex gap-1 py-2 ">
          <p className="text-white">
            {currentSection === "signUp"
              ? "Already have account?"
              : "Haven't account?"}
          </p>
          <p onClick={handlePress} className="text-accent cursor-pointer">
            {currentSection === "signUp"
              ? "Login to account"
              : "Create account"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
