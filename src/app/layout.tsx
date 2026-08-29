import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Figtree, Jost } from "next/font/google";
import { PageLoader } from "@/components/PageLoader";
import { ScrollBoundsLock } from "@/components/ScrollBoundsLock";
import { BackToTopButton } from "@/components/BackToTopButton";
import "./globals.css";

const heading = Jost({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const quote = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-quote",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divvya — UX Designer",
  description:
    "Portfolio of Divvya, a UX designer crafting clarity for products people love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${heading.variable} ${body.variable} ${hand.variable} ${quote.variable} h-full antialiased`}>
        <PageLoader />
        <ScrollBoundsLock />
        <BackToTopButton />
        <div className="app-scroll">{children}</div>
      </body>
    </html>
  );
}
