"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/content/site";

const STACK = [
  { rotate: 0, x: 0, y: 0 },
  { rotate: 3.5, x: 7, y: 6 },
  { rotate: -3, x: -6, y: 9 },
  { rotate: 5, x: 10, y: 12 },
  { rotate: -4.5, x: -9, y: 14 },
  { rotate: 4, x: 11, y: 16 },
] as const;

export function AboutPluckCards() {
  const cards = about.pluckCards;
  const [front, setFront] = useState(0);
  const reduce = useReducedMotion();

  const pluck = () => {
    setFront((current) => (current + 1) % cards.length);
  };

  return (
    <div className="relative h-full min-h-0 overflow-visible">
      <button
        type="button"
        onClick={pluck}
        aria-label="Pluck the next card"
        className="absolute inset-0 cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2"
      >
        {cards.map((card, index) => {
          const stackPos = (index - front + cards.length) % cards.length;
          const pose = STACK[Math.min(stackPos, STACK.length - 1)];
          const isFront = stackPos === 0;
          const highlight = "highlight" in card ? card.highlight : undefined;
          const highlightColor =
            "highlightColor" in card ? card.highlightColor : undefined;

          return (
            <motion.article
              key={`${index}-${card.before}`}
              aria-hidden={!isFront}
              className="absolute inset-0 flex items-center justify-center rounded-[1.35rem] px-5 py-4 text-center shadow-[0_8px_30px_-12px_rgba(18,24,22,0.18)] sm:rounded-[1.5rem] sm:px-6"
              style={{
                backgroundColor: card.background,
                color: card.color,
                zIndex: cards.length - stackPos,
              }}
              initial={false}
              animate={{
                rotate: pose.rotate,
                x: pose.x,
                y: pose.y,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 380, damping: 28 }
              }
            >
              <p className="font-display text-[clamp(0.85rem,1.85vh,1.15rem)] leading-snug tracking-[-0.02em]">
                {card.before}
                {highlight ? (
                  <strong
                    style={
                      highlightColor ? { color: highlightColor } : undefined
                    }
                  >
                    {highlight}
                  </strong>
                ) : null}
              </p>
            </motion.article>
          );
        })}
      </button>
    </div>
  );
}
