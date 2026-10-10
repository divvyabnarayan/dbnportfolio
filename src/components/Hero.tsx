"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/content/site";
import { HeroJoyConScroller } from "@/components/HeroJoyConScroller";
import { withBasePath } from "@/lib/basePath";
import { pageShellClass } from "@/lib/layout";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <header className={`relative grid min-h-[100svh] items-center gap-10 overflow-x-hidden pb-20 pt-24 ${pageShellClass} lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-8 lg:overflow-x-visible lg:pb-16 lg:pt-20`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.22),transparent_70%)] blur-2xl lg:left-0 lg:mx-0 lg:translate-x-0"
      />

      <div className="relative z-10">
        <p className="mb-8 text-sm font-medium tracking-[0.18em] text-muted uppercase">
          {site.fullName} · {site.role}
        </p>

        <motion.h1
          className="font-display max-w-3xl text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-ink"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.greeting}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.tagline}
        </motion.p>

        <motion.nav
          aria-label="Primary"
          className="mt-10 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={withBasePath(cta.href)}
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2.5 text-sm font-medium text-ink shadow-[0_1px_0_rgba(18,24,22,0.04)] backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white"
            >
              <span aria-hidden className="text-base transition group-hover:scale-110">
                {cta.emoji}
              </span>
              {cta.label}
            </a>
          ))}
        </motion.nav>
      </div>

      <motion.div
        className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[32rem]"
        initial={reduce ? false : { opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Selected work"
      >
        <HeroJoyConScroller />
      </motion.div>
    </header>
  );
}
