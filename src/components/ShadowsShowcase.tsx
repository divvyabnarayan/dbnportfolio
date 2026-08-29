"use client";

import { Inter } from "next/font/google";
import type { ShadowsSection } from "@/content/case-studies";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

type ShadowsShowcaseProps = {
  shadows: ShadowsSection;
};

export function ShadowsShowcase({ shadows }: ShadowsShowcaseProps) {
  return (
    <div
      className={`${inter.className} overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#F7F7F7] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.28)]`}
    >
      <div className="space-y-10 px-6 py-10 sm:px-8 sm:py-12">
        {shadows.groups.map((group) => (
          <div key={group.title}>
            <p className="text-base font-semibold text-ink sm:text-lg">{group.title}</p>
            <div
              className={`mt-6 grid gap-x-6 gap-y-10 ${
                group.items.length > 2
                  ? "grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {group.items.map((item) => (
                <div key={item.label} className="text-center">
                  <div
                    className="mx-auto flex h-28 w-full max-w-[11rem] items-center justify-center rounded-2xl bg-white sm:h-32"
                    style={{ boxShadow: item.css }}
                  />
                  <p className="mt-4 text-sm font-semibold text-ink">{item.label}</p>
                  <p className="mt-1 font-mono text-xs text-[#888888]">
                    X: {item.x} · Y: {item.y}
                  </p>
                  <p className="font-mono text-xs text-[#888888]">
                    Blur: {item.blur} · Spread: {item.spread}
                  </p>
                  <p className="font-mono text-xs text-[#888888]">{item.color}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
