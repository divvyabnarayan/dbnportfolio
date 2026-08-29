"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { brandLogoOutlinePaths, brandLogoViewBox } from "@/components/brandLogoPath";

/** Stroke-draws the real logo outline, piece by piece. */
function LogoOutlineDraw({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={brandLogoViewBox}
      className={className}
      fill="none"
      aria-hidden
    >
      {brandLogoOutlinePaths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 1.1,
              delay: 0.1 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: { duration: 0.15, delay: 0.1 + i * 0.12 },
          }}
        />
      ))}
    </svg>
  );
}

export function PageLoader() {
  const [phase, setPhase] = useState<"draw" | "pulse" | "done">("draw");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Never let the overlay block the page underneath.
    const hardStop = window.setTimeout(() => setPhase("done"), 3200);

    if (reduceMotion) {
      const t = window.setTimeout(() => setPhase("done"), 350);
      return () => {
        window.clearTimeout(t);
        window.clearTimeout(hardStop);
      };
    }

    // outline draw finishes ~1.7s → solid logo + pulse 1s → exit
    const toPulse = window.setTimeout(() => setPhase("pulse"), 1750);
    const toDone = window.setTimeout(() => setPhase("done"), 1750 + 1000);
    return () => {
      window.clearTimeout(toPulse);
      window.clearTimeout(toDone);
      window.clearTimeout(hardStop);
    };
  }, [reduceMotion]);

  const visible = phase !== "done";
  const pulsing = phase === "pulse";

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <span
              aria-hidden
              className="absolute inset-[-22%] rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.2),transparent_70%)] blur-xl"
            />

            {reduceMotion ? (
              <BrandLogo className="relative h-full w-full text-accent" />
            ) : (
              <>
                <motion.div
                  className="absolute inset-0 text-accent"
                  animate={{ opacity: pulsing ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <LogoOutlineDraw className="h-full w-full" />
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={
                    pulsing
                      ? { opacity: 1, scale: [0.96, 1.1, 1] }
                      : { opacity: 0, scale: 0.96 }
                  }
                  transition={
                    pulsing
                      ? {
                          opacity: { duration: 0.25 },
                          scale: {
                            duration: 1,
                            times: [0, 0.4, 1],
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }
                      : { duration: 0.15 }
                  }
                >
                  <BrandLogo className="h-full w-full text-accent" />
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
