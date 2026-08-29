"use client";

import Image from "next/image";
import type { WebsitePreviewSection } from "@/content/case-studies";

type WebsitePreviewProps = {
  preview: WebsitePreviewSection;
};

const screenshotDimensions: Record<string, { width: number; height: number }> = {
  "/projects/flip/website-shot-1.png": { width: 3840, height: 1940 },
  "/projects/flip/website-shot-2.png": { width: 3840, height: 2100 },
  "/projects/flip/website-shot-3.png": { width: 3840, height: 2160 },
  "/projects/flip/website-shot-4.png": { width: 3840, height: 2160 },
  "/projects/flip/website-shot-5.png": { width: 2880, height: 1322 },
};

export function WebsitePreview({ preview }: WebsitePreviewProps) {
  const displayUrl = preview.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const gallery =
    preview.gallery?.length
      ? preview.gallery
      : [{ src: preview.image, alt: preview.alt }];

  const visible = gallery.slice(0, 5);

  return (
    <div className="space-y-6">
      {visible.map((item, index) => (
        <div
          key={`${item.src}-${index}`}
          className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#F3F3F3] p-3 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.35)] sm:p-4"
        >
          <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.28)]">
            <div className="flex items-center gap-3 border-b border-black/8 bg-[#FAFAFA] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="min-w-0 flex-1 truncate rounded-full border border-black/8 bg-white px-4 py-1.5 text-center text-xs text-[#666666] sm:text-sm">
                {displayUrl}
              </div>
            </div>

            <div className="bg-[#F7F7F7]">
              <div className="overflow-hidden bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={screenshotDimensions[item.src]?.width ?? 1024}
                  height={screenshotDimensions[item.src]?.height ?? 518}
                  unoptimized
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
