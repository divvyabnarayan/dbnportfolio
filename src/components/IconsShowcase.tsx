"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import type { IconsSection } from "@/content/case-studies";
import { flipWebsiteIcons } from "@/components/flip-icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

type IconsShowcaseProps = {
  icons: IconsSection;
};

function IconGlyph({
  glyph,
  paths,
  fillPaths,
  svgSrc,
  className,
}: {
  glyph: string;
  paths?: string[];
  fillPaths?: string[];
  svgSrc?: string;
  className?: string;
}) {
  if (svgSrc) {
    return (
      <Image
        src={svgSrc}
        alt=""
        width={24}
        height={24}
        unoptimized
        aria-hidden
        className={className}
      />
    );
  }

  if (paths?.length || fillPaths?.length) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={className}
      >
        {paths?.map((path) => (
          <path key={path} d={path} />
        ))}
        {fillPaths?.map((path) => (
          <path key={path} d={path} fill="currentColor" stroke="none" />
        ))}
      </svg>
    );
  }

  return (
    <span
      aria-hidden
      className={`material-icons leading-none ${className ?? ""}`}
      // Material Icons are rendered via a webfont; forcing the font-family
      // prevents showing the raw ligature text if the stylesheet is delayed.
      style={{ fontFamily: '"Material Icons"' }}
    >
      {glyph}
    </span>
  );
}

export function IconsShowcase({ icons }: IconsShowcaseProps) {
  const iconMap = new Map(flipWebsiteIcons.map((icon) => [icon.name, icon]));
  const showcaseIcons = icons.iconNames
    .map((name) => iconMap.get(name))
    .filter((icon): icon is (typeof flipWebsiteIcons)[number] => Boolean(icon));

  return (
    <div
      className={`${poppins.className} overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#F7F7F7] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.28)]`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons&display=swap"
        rel="stylesheet"
      />
      <div className="px-6 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-6 lg:grid-cols-8">
          {showcaseIcons.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <IconGlyph
                  glyph={icon.glyph}
                  paths={icon.paths}
                  fillPaths={icon.fillPaths}
                  svgSrc={icon.svgSrc}
                  className="h-6 w-6 text-[#D70A0A] text-[1.5rem]"
                />
              </div>
              <p className="text-[10px] font-medium text-[#888888] sm:text-xs">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
