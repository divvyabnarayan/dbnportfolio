"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiteNav } from "@/components/SiteNav";

function getScrollRoot() {
  return document.querySelector<HTMLElement>(".app-scroll");
}

export function HomepageNav() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    const scrollRoot = getScrollRoot();

    const updateVisibility = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const caseStudies = document.getElementById("case-studies");
        if (!caseStudies) return;

        const scrollY = scrollRoot?.scrollTop ?? window.scrollY;
        const triggerPoint = caseStudies.offsetTop - 80;
        setVisible(scrollY >= triggerPoint);
      });
    };

    updateVisibility();
    scrollRoot?.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      cancelAnimationFrame(frame);
      scrollRoot?.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center"
          initial={reduceMotion ? false : { opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Match .app-scroll content width so the logo lines up with section/footer margins */}
          <div className="pointer-events-auto w-full [scrollbar-gutter:stable]">
            <SiteNav />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
