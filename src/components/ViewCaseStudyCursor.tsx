"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type ViewCaseStudyCursorProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function ViewCaseStudyCursor({
  children,
  href,
  className,
}: ViewCaseStudyCursorProps) {
  const [active, setActive] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const frame = useRef(0);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 420, damping: 36, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 420, damping: 36, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const onMove = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!canHover) return;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        rawX.set(event.clientX);
        rawY.set(event.clientY);
      });
    },
    [canHover, rawX, rawY],
  );

  const onEnter = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!canHover) return;
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setActive(true);
    },
    [canHover, rawX, rawY],
  );

  const onLeave = useCallback(() => {
    setActive(false);
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(frame.current);
  }, []);

  return (
    <>
      <a
        href={href}
        className={className}
        onMouseEnter={onEnter}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </a>

      {canHover ? (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-[80] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-[0.04em] text-paper shadow-[0_8px_24px_rgba(18,24,22,0.28)]"
          style={{ x, y }}
          initial={false}
          animate={{
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0.85,
          }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          View Case Study →
        </motion.div>
      ) : null}
    </>
  );
}
