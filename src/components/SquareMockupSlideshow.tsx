"use client";

import Image from "next/image";
import { useState } from "react";

type MockupSlide = {
  title: string;
  src: string;
  alt: string;
};

type SquareMockupSlideshowProps = {
  slides: MockupSlide[];
  label?: string;
  className?: string;
};

export function SquareMockupSlideshow({
  slides,
  label,
  className,
}: SquareMockupSlideshowProps) {
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
    <div
      className={`mx-auto flex w-full max-w-xl flex-col items-center ${className ?? ""}`}
    >
      {label ? (
        <p className="case-section-label mb-5 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
          {label}
        </p>
      ) : null}

      <div className="relative flex w-full items-center justify-center px-10 sm:px-12">
        {slides.length > 1 ? (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screen"
            className="absolute top-1/2 left-0 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm transition hover:bg-white sm:h-10 sm:w-10"
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

        <div className="relative mx-auto aspect-square w-[min(64vw,18rem)] rounded-[1.85rem] border-[3px] border-ink bg-ink p-[10px] shadow-[0_20px_50px_-18px_rgba(28,28,28,0.32)] sm:w-[min(100%,20rem)]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] bg-black">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              unoptimized
              sizes="(max-width: 640px) 64vw, 20rem"
              className="object-cover"
              priority={index === 0}
            />
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
