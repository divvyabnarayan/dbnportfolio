"use client";

import Image from "next/image";
import { useState } from "react";

type AboutPhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
  scale?: number;
};

function PhotosBadge() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-2.5 right-2.5 z-10 h-7 w-7 overflow-hidden rounded-[0.55rem] shadow-[0_6px_16px_-8px_rgba(0,0,0,0.45)] sm:h-8 sm:w-8 sm:rounded-[0.65rem]"
    >
      <Image
        src="/brand/photos-icon.png"
        alt=""
        width={32}
        height={32}
        unoptimized
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function AboutPhotoCarousel({ photos }: { photos: readonly AboutPhoto[] }) {
  const [index, setIndex] = useState(0);
  const photo = photos[index] ?? photos[0];

  if (!photo) return null;

  const next = () => {
    setIndex((current) => (current + 1) % photos.length);
  };

  return (
    <button
      type="button"
      onClick={next}
      aria-label="Next photo"
      className="relative h-full min-h-0 w-full overflow-hidden rounded-[1.35rem] bg-white shadow-[0_8px_30px_-12px_rgba(18,24,22,0.18)] transition hover:brightness-[0.98] sm:rounded-[1.5rem]"
    >
      <Image
        key={photo.src}
        src={photo.src}
        alt={photo.alt}
        fill
        unoptimized
        sizes="280px"
        className="object-cover"
        style={{
          ...(photo.objectPosition
            ? { objectPosition: photo.objectPosition }
            : {}),
          ...(photo.scale ? { transform: `scale(${photo.scale})` } : {}),
        }}
      />
      <PhotosBadge />
    </button>
  );
}
