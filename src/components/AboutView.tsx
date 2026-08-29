import type { ReactNode } from "react";
import Image from "next/image";
import { about, site } from "@/content/site";
import { SiteNav } from "@/components/SiteNav";
import { VinylPlayer } from "@/components/VinylPlayer";
import { AboutPhotoCarousel } from "@/components/AboutPhotoCarousel";
import { AboutQuoteCard } from "@/components/AboutQuoteCard";
import { AboutJourneyCard } from "@/components/AboutJourneyCard";
import { AboutPluckCards } from "@/components/AboutPluckCards";

function BentoCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] bg-white p-4 shadow-[0_8px_30px_-12px_rgba(18,24,22,0.18)] sm:rounded-[1.5rem] sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}

const socialLogoMap: Record<string, string> = {
  LinkedIn: "/brand/social/linkedin.png?v=2",
  Dribbble: "/brand/social/dribbble.png",
  Behance: "/brand/social/behance.png?v=4",
};

export function AboutView() {
  return (
    <div className="flex h-svh flex-col overflow-x-visible overflow-y-hidden bg-white text-ink">
      <SiteNav />

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 min-h-0 flex-col justify-center overflow-visible px-6 py-2 sm:px-8 sm:py-3">
        <p className="mb-1.5 flex w-full items-center justify-end gap-1.5 text-[0.7rem] text-muted italic sm:mb-2 sm:text-xs">
          <svg
            viewBox="0 0 16 16"
            aria-hidden
            className="h-3 w-3 text-muted"
            fill="currentColor"
          >
            <path d="M3.2 1.4 12.6 8.1c.5.4.2 1.1-.4 1.1H8.3l1.8 4.4c.2.5-.1 1-.6 1.1l-1.3.3c-.5.1-1-.2-1.1-.7L5.4 10.1 3.5 12.5c-.4.5-1.2.2-1.2-.4V2.1c0-.8.9-1.2 1.5-.7Z" />
          </svg>
              Click and hover around...
        </p>

        <div className="relative h-[calc(100%-1.5rem)] w-full max-h-full origin-left scale-[0.85] sm:h-[calc(100%-1.75rem)] sm:scale-[0.92] md:scale-100">
          <div
            className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border border-line/50 p-3 shadow-[0_20px_50px_-28px_rgba(18,24,22,0.2)] sm:rounded-[2rem] sm:p-4"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 12% 20%, rgba(244, 196, 176, 0.42), transparent 72%), radial-gradient(ellipse 75% 65% at 88% 18%, rgba(45, 212, 191, 0.22), transparent 70%), radial-gradient(ellipse 70% 75% at 82% 82%, rgba(15, 118, 110, 0.14), transparent 72%), radial-gradient(ellipse 65% 60% at 20% 88%, rgba(255, 107, 68, 0.12), transparent 70%), radial-gradient(ellipse 90% 80% at 50% 50%, rgba(238, 242, 239, 0.35), transparent 75%), linear-gradient(160deg, #ffffff 0%, #f8faf8 45%, #f4f7f5 100%)",
            }}
          >
            {/*
              Marco-style layout:
              [ About (tall) ] [ Music ] [ Socials / CTA / Photos ]
            */}
            <div className="grid h-full min-h-0 grid-cols-2 grid-rows-3 gap-3 sm:gap-4">
              <div className="row-span-3 grid min-h-0 grid-rows-[minmax(0,1.35fr)_minmax(0,0.65fr)] gap-3 sm:gap-4">
                <div className="min-h-0">
                  <BentoCard>
                    <h1 className="font-display shrink-0 text-[clamp(1.25rem,2.2vh,1.85rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                      Hi, I&apos;m {site.name} 👋
                    </h1>
                    <div className="mt-2 min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1 text-[clamp(0.78125rem,1.75vh,0.96875rem)] leading-relaxed text-ink-soft">
                      {about.intro.map((paragraph) => (
                        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                      ))}
                    </div>
                  </BentoCard>
                </div>
                <div className="min-h-0">
                  <AboutJourneyCard />
                </div>
              </div>

              <div className="row-span-2 grid min-h-0 grid-cols-2 gap-3 sm:gap-4">
                <div className="min-h-0">
                  <VinylPlayer />
                </div>

                <div className="flex h-full min-h-0 flex-col gap-3 sm:gap-4">
                  <div className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
                    {about.socialIcons.map((social) => {
                      const fillsTile = social.label === "LinkedIn";
                      const isBehance = social.label === "Behance";
                      const isDribbble = social.label === "Dribbble";

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[1.1rem] bg-white p-2 shadow-[0_8px_30px_-12px_rgba(18,24,22,0.18)] transition hover:-translate-y-0.5 sm:rounded-[1.25rem] sm:p-2.5"
                        >
                          <Image
                            src={socialLogoMap[social.label] ?? socialLogoMap.LinkedIn}
                            alt={social.label}
                            width={56}
                            height={56}
                            unoptimized
                            className={
                              fillsTile
                                ? "h-[82%] w-[82%] object-contain"
                                : isBehance
                                  ? "h-[78%] w-[78%] object-contain"
                                  : isDribbble
                                    ? "h-[72%] w-[72%] object-contain"
                                    : "h-[85%] w-[85%] object-contain"
                            }
                          />
                        </a>
                      );
                    })}
                  </div>

                  <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,0.55fr)_minmax(0,1.45fr)] gap-3 sm:gap-4">
                    <BentoCard className="min-h-0 items-center justify-center gap-1.5 p-2 pb-3 sm:gap-2 sm:p-2.5 sm:pb-4">
                      <h2 className="text-center font-display whitespace-nowrap text-[clamp(calc(0.53rem+3px),calc(1.45vh-1px),calc(0.8rem+3px))] font-semibold leading-none tracking-[-0.03em] text-ink">
                        {about.cta.heading}
                      </h2>
                      <a
                        href={about.cta.href}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#FF6B44] px-3.5 py-2 text-[0.55rem] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#ff5a2e] sm:px-4 sm:py-2.5 sm:text-[0.6rem]"
                      >
                        {about.cta.button}
                        <span aria-hidden>✉️</span>
                      </a>
                    </BentoCard>

                    <AboutPhotoCarousel photos={about.photos} />
                  </div>
                </div>
              </div>

              <div className="grid min-h-0 grid-cols-2 gap-3 sm:gap-4">
                <div className="min-h-0">
                  <AboutQuoteCard />
                </div>
                <div className="relative min-h-0">
                  <AboutPluckCards />
                </div>
              </div>
            </div>
          </div>

          {/* Lives in the page margin — does not shrink the about frame */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-full z-30 ml-3 flex -translate-y-1/2 flex-col items-center gap-1 sm:ml-4 md:ml-5"
          >
            <p className="font-hand -rotate-6 text-center text-[clamp(1.05rem,2.2vh,1.4rem)] leading-[1.15] text-ink">
              <span className="block whitespace-nowrap">Life when I am</span>
              <span className="block whitespace-nowrap">not designing</span>
            </p>
            <Image
              src="/brand/life-arrow.png?v=2"
              alt=""
              width={112}
              height={112}
              unoptimized
              className="h-16 w-16 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
