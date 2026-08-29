"use client";

import Image from "next/image";
import { useState } from "react";

type SlideshowImage = {
  src: string;
  alt: string;
};

type ImageSlideshowProps = {
  images: SlideshowImage[];
  className?: string;
  objectFit?: "cover" | "contain";
};

export function ImageSlideshow({
  images,
  className,
  objectFit = "cover",
}: ImageSlideshowProps) {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const goPrev = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goNext = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const current = images[index];

  return (
    <div className={className}>
      <div
        className={
          objectFit === "contain"
            ? "relative overflow-hidden rounded-[1.5rem] border border-line bg-white"
            : "relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface"
        }
      >
        {objectFit === "contain" ? (
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={1600}
            height={900}
            unoptimized
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="h-auto w-full"
          />
        ) : (
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            unoptimized
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover object-top"
          />
        )}

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm transition hover:bg-white sm:left-4 sm:h-11 sm:w-11"
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
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm transition hover:bg-white sm:right-4 sm:h-11 sm:w-11"
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
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((image, dotIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                dotIndex === index ? "bg-ink" : "bg-line"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
