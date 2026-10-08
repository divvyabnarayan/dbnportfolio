"use client";

import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import type { TypographySection } from "@/content/case-studies";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

type TypographyShowcaseProps = {
  typography: TypographySection;
};

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;
  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function showcaseFont(fontFamily: string) {
  if (fontFamily.toLowerCase().includes("jakarta")) return plusJakarta.className;
  return poppins.className;
}

function responsiveFontSize(size: string) {
  const px = Number.parseFloat(size);
  if (px <= 22) return size;
  return `clamp(${Math.max(px * 0.45, 14)}px, ${px * 0.7}px, ${size})`;
}

export function TypographyShowcase({ typography }: TypographyShowcaseProps) {
  const accent = typography.accentColor ?? "#D70A0A";
  const weightCols =
    typography.weights.length <= 2
      ? "grid-cols-2"
      : "grid-cols-2 sm:grid-cols-4";

  return (
    <div className={`${showcaseFont(typography.fontFamily)} space-y-6`}>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#131313] p-6 text-white shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] sm:p-8 lg:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-6 h-72 w-72 rounded-full blur-3xl sm:h-80 sm:w-80"
          style={{ backgroundColor: hexToRgba(accent, 0.45) }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-16 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: hexToRgba(accent, 0.32) }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: hexToRgba(accent, 0.18) }}
        />

        <div className="relative">
          <p className="text-xs font-medium tracking-[0.18em] text-white/55 uppercase">
            Primary typeface
          </p>
          <p className="mt-3 text-[clamp(2.75rem,8vw,4.5rem)] leading-none font-bold tracking-[-0.04em]">
            {typography.fontFamily}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            {typography.fontDescription}
          </p>
        </div>

        <div className="relative mt-8 border-t border-white/10 pt-8">
          <p className="text-sm font-semibold text-white">Font family</p>
          <div className={`mt-4 grid gap-3 ${weightCols}`}>
            {typography.weights.map((item) => (
              <div
                key={item.weight}
                className="rounded-2xl border border-white/10 bg-white px-4 py-5 text-center text-[#131313] sm:px-5 sm:py-6"
              >
                <p
                  className="text-[clamp(2rem,5vw,2.75rem)] leading-none"
                  style={{ fontWeight: item.weight }}
                >
                  Aa
                </p>
                <p className="mt-3 text-xs font-semibold sm:text-sm">
                  {typography.fontFamily} {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {typography.groups?.length ? (
      <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_12px_40px_-32px_rgba(15,23,42,0.28)]">
        <div className="border-b border-black/5 px-5 py-5 sm:px-8 sm:py-6">
          <p className="text-lg font-semibold text-ink sm:text-xl">Font size</p>
        </div>

        <div className="divide-y divide-black/5">
          {typography.groups.map((group) => (
            <div key={group.title} className="px-5 py-6 sm:px-8 sm:py-8">
              <p className="text-sm font-semibold tracking-[0.08em] text-ink uppercase sm:text-base">
                {group.title}
              </p>
              <div className="mt-5 space-y-4">
                {group.items.map((style) => (
                  <div
                    key={style.token}
                    className="flex flex-col gap-3 border-b border-black/[0.04] pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="shrink-0 sm:max-w-[11rem]">
                      <p className="text-sm font-semibold text-ink">{style.token}</p>
                      <p className="mt-1 text-xs text-muted">
                        {style.weightLabel} · Size: {style.size.replace("px", "")}
                      </p>
                    </div>

                    <p
                      className="min-w-0 text-ink sm:text-right"
                      style={{
                        fontSize: responsiveFontSize(style.size),
                        fontWeight: style.weight,
                        lineHeight: 1.2,
                        textTransform: style.uppercase ? "uppercase" : undefined,
                      }}
                    >
                      {style.sample}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      ) : null}
    </div>
  );
}
