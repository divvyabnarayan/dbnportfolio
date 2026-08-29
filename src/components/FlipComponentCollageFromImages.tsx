"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function FlipComponentCollageFromImages() {
  return (
    <div
      className={`${poppins.className} relative h-full w-full overflow-hidden bg-[#F3F3F3] p-3 sm:p-5 lg:p-6`}
    >
      <div className="grid h-full grid-cols-2 grid-rows-[0.42fr_0.58fr] gap-2 sm:gap-3 lg:gap-4">
        {/* Top-left: Save money / Unlock Free NBN / Help Friends */}
        <Frame>
          <Image
            src="/projects/flip/hero-benefits.png"
            alt="Benefits cards"
            fill
            sizes="(max-width: 768px) 50vw, 38vw"
            className="object-cover object-center"
            unoptimized
          />
        </Frame>

        {/* Top-right: Dropdown (cropped so only dropdown + header are visible) */}
        <Frame>
          <Image
            src="/projects/flip/hero-dropdown.png"
            alt="Dropdown menu"
            fill
            sizes="(max-width: 768px) 50vw, 38vw"
            className="object-cover"
            style={{ objectPosition: "50% 14%" }}
            unoptimized
          />
        </Frame>

        {/* Bottom-left: Premium / Family / Fast Speed cards */}
        <Frame>
          <Image
            src="/projects/flip/hero-plans.png"
            alt="NBN plan cards"
            fill
            sizes="(max-width: 768px) 50vw, 38vw"
            className="object-cover object-center"
            unoptimized
          />
        </Frame>

        {/* Bottom-right: Review card */}
        <Frame>
          <Image
            src="/projects/flip/hero-review.png"
            alt="Review card"
            fill
            sizes="(max-width: 768px) 50vw, 38vw"
            className="object-cover object-center"
            unoptimized
          />
        </Frame>
      </div>
    </div>
  );
}

