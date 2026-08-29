"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { about } from "@/content/site";

export function AboutJourneyCard() {
  const stages = about.journey;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduce = useReducedMotion();
  const stage = stages[index];
  const isLast = index === stages.length - 1;

  const goNext = () => {
    setDirection(1);
    setIndex((current) => (current + 1) % stages.length);
  };

  const goTo = (next: number) => {
    setDirection(next > index || (index === stages.length - 1 && next === 0) ? 1 : -1);
    setIndex(next);
  };

  const variants = reduce
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (dir: number) => ({
          y: dir > 0 ? 28 : -28,
          opacity: 0,
          scale: 0.98,
        }),
        center: {
          y: 0,
          opacity: 1,
          scale: 1,
        },
        exit: (dir: number) => ({
          y: dir > 0 ? -28 : 28,
          opacity: 0,
          scale: 0.98,
        }),
      };

  return (
    <div
      className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] shadow-[0_8px_30px_-12px_rgba(18,24,22,0.18)] sm:rounded-[1.5rem]"
      style={{ backgroundColor: stage.background }}
    >
      <button
        type="button"
        onClick={goNext}
        aria-label={
          isLast
            ? "Restart journey from Curious Kid"
            : `Continue to ${stages[(index + 1) % stages.length].title}`
        }
        className="group relative flex min-h-0 flex-1 cursor-pointer flex-col overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-inset"
      >
        <div className="relative min-h-0 flex-1">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={stage.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={`${stage.image}?v=38`}
                alt={stage.alt}
                fill
                unoptimized
                priority={index === 0}
                sizes="(max-width: 1152px) 50vw, 560px"
                className={`object-contain object-center ${
                  stage.id === "curious-kid" ? "scale-[0.96]" : ""
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 px-3 pb-2 pt-6 sm:px-3.5 sm:pb-2.5">
          <div className="flex items-center gap-1.5">
            {stages.map((item, dotIndex) => (
              <span
                key={item.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIndex === index ? "w-4" : "w-1.5 bg-ink/20"
                }`}
                style={
                  dotIndex === index
                    ? { backgroundColor: stage.accent, width: "1rem" }
                    : undefined
                }
              />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.06em] text-ink uppercase shadow-sm sm:text-[0.65rem]">
            {isLast ? "Replay" : "Next chapter"}
            <motion.span
              aria-hidden
              animate={reduce ? undefined : { y: [0, 3, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              {isLast ? "↺" : "↓"}
            </motion.span>
          </span>
        </div>
      </button>

      <div className="sr-only">
        {stages.map((item, i) => (
          <button key={item.id} type="button" onClick={() => goTo(i)}>
            Go to {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
