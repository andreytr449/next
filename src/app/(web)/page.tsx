import { HeroSection } from "@/app/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anonymous Q&A Platform: Ask & Receive Secret Messages",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
