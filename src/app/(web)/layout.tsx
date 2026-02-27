import type { Metadata } from "next";
import "@config/styles/globals.css";
import localFont from "next/font/local";
import { Header, Footer } from "@/app/widgets";
import { Providers, Toaster } from "@/app/shared/ui";

const uniqueFont = localFont({
  src: [
    {
      path: "../../../config/fonts/Unique-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../config/fonts/Unique-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-unique",
  display: "swap",
});

const bicycletteFont = localFont({
  src: [
    {
      style: "normal",
      path: "../../../config/fonts/Bicyclette-Bold.woff",
      weight: "700",
    },
    {
      style: "normal",
      path: "../../../config/fonts/Bicyclette-Black.woff",
      weight: "800",
    },
  ],
  variable: "--font-bicyclette",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Send & Receive Anonymous Questions",
  description:
    "Create your profile, share your link, and start receiving anonymous questions from your friends and followers. Join the community today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${uniqueFont.variable} ${bicycletteFont.variable} font-bicyclette antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
