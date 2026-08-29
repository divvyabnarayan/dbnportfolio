"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function DesignProcess() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <p className="text-sm font-medium tracking-[0.16em] text-muted">
          {"{03}"} — MY DESIGN PROCESS
        </p>
        <h2
          id="process-heading"
          className="font-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
        >
          How It Works
        </h2>
      </Reveal>

      <ol className="mt-14 space-y-6 sm:mt-16">
        {processSteps.map((step, index) => (
          <motion.li
            key={step.number}
            className="grid gap-4 overflow-hidden rounded-3xl border border-line bg-paper/70 p-6 backdrop-blur sm:grid-cols-[7rem_1fr] sm:gap-8 sm:p-8"
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    y: 48,
                    scale: 0.97,
                  }
            }
            whileInView={
              reduce
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
            }
            viewport={{ once: false, amount: 0.35, margin: "0px 0px -8% 0px" }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
              mass: 0.9,
              delay: reduce ? 0 : index * 0.05,
            }}
            style={{ transformOrigin: "center top" }}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.45,
                delay: reduce ? 0 : 0.08 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {step.stage}
              </p>
              <p className="font-display mt-2 text-3xl font-semibold tabular-nums text-accent">
                {step.number}
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : 0.14 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                {step.title}
              </h3>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                {step.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
