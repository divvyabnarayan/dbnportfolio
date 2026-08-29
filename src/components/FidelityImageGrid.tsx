"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type FidelityImage = {
  src: string;
  alt: string;
  objectFit?: "contain" | "cover";
  width?: number;
  height?: number;
};

type FidelityImageGridProps = {
  images: FidelityImage[];
  layout?: "stack" | "grid";
};

export function FidelityImageGrid({ images, layout = "stack" }: FidelityImageGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();
  const active = activeIndex !== null ? images[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close]);

  return (
    <>
      <div
        className={
          layout === "grid"
            ? "mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5"
            : "mt-10 space-y-6 sm:mt-12"
        }
      >
        {images.map((image, index) => (
          <Reveal key={`${image.src}-${index}`} delay={index * 0.04}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger: ${image.alt}`}
              className="group block w-full cursor-zoom-in text-left transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              {image.objectFit === "contain" ? (
                <div className="overflow-hidden rounded-[1.25rem] border border-line bg-white p-3 sm:p-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width ?? 300}
                    height={image.height ?? 400}
                    unoptimized
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute inset-0 bg-ink/70 backdrop-blur-[2px]"
            onClick={close}
          />

          <div className="relative z-10 flex max-h-[min(92vh,920px)] w-full max-w-5xl flex-col">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute -top-1 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-paper sm:-top-2 sm:-right-2"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <p id={titleId} className="sr-only">
              {active.alt}
            </p>

            <div className="overflow-hidden rounded-[1.25rem] border border-white/20 bg-white p-3 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)] sm:p-5">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width ?? 1600}
                height={active.height ?? 900}
                unoptimized
                sizes="(max-width: 1024px) 92vw, 1024px"
                className="mx-auto h-auto max-h-[min(80vh,820px)] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
