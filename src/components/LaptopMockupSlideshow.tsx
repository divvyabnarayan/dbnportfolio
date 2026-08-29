"use client";

import Image from "next/image";
import { useState } from "react";

type MockupSlide = {
  title: string;
  src: string;
  alt: string;
};

type LaptopMockupSlideshowProps = {
  slides: MockupSlide[];
  className?: string;
};

export function LaptopMockupSlideshow({ slides, className }: LaptopMockupSlideshowProps) {
  const [index, setIndex] = useState(0);

  if (!slides.length) return null;

  const goPrev = () => {
    setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goNext = () => {
    setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const current = slides[index];

  return (
    <div className={`mx-auto flex w-full max-w-4xl flex-col items-center ${className ?? ""}`}>
      <div className="relative flex w-full items-center justify-center px-10 sm:px-14">
        {slides.length > 1 ? (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screen"
            className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm transition hover:bg-white sm:h-11 sm:w-11"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path
                d="M14.5 6.5 9 12l5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}

        <div className="w-full max-w-3xl">
          <div className="rounded-[1rem] border-[3px] border-ink bg-ink p-[10px] shadow-[0_24px_60px_-20px_rgba(28,28,28,0.35)] sm:rounded-[1.15rem] sm:p-3">
            <div className="relative mb-2 flex justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-white/35" aria-hidden />
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[0.45rem] bg-white sm:rounded-md">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                unoptimized
                sizes="(max-width: 768px) 90vw, 48rem"
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          </div>
          <div className="relative mx-auto -mt-px h-3 w-[106%] max-w-none -translate-x-[3%] rounded-b-[1rem] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] shadow-[0_10px_24px_-12px_rgba(28,28,28,0.45)] sm:h-3.5 sm:rounded-b-[1.15rem]">
            <div className="absolute inset-x-[28%] top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/10" aria-hidden />
          </div>
        </div>

        {slides.length > 1 ? (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screen"
            className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm transition hover:bg-white sm:h-11 sm:w-11"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path
                d="M9.5 6.5 15 12l-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}
      </div>

      <div className="mt-5 flex w-full flex-col items-center gap-5">
        <p className="text-center font-serif text-base font-semibold tracking-[-0.01em] text-ink sm:text-lg">
          {current.title}
        </p>

        {slides.length > 1 ? (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {slides.map((slide, dotIndex) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to ${slide.title}`}
                className={`h-2 w-2 rounded-full transition ${
                  dotIndex === index ? "bg-ink" : "bg-line"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
