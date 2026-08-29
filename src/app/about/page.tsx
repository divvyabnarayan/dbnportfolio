import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: `Learn more about ${site.name}, a UX designer crafting clarity for products people love.`,
};

export default function AboutPage() {
  return <AboutView />;
}
