import type { Metadata } from "next";
import { AiCodingView } from "@/components/AiCodingView";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Where Design Meets AI — ${site.name}`,
  description:
    "AI coding experiments by Divvya — exploring design-to-code workflows with Cursor, ChatGPT, and Figma.",
};

export default function AiCodingPage() {
  return <AiCodingView />;
}
