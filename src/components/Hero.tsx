"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <header className="relative mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-6 pb-24 pt-28 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.22),transparent_70%)] blur-2xl"
      />

      <p className="mb-8 text-sm font-medium tracking-[0.18em] text-muted uppercase">
        {site.fullName} · {site.role}
      </p>

      <motion.h1
        className="font-display max-w-3xl text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-ink"
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
    </header>
  );
}
