"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { about } from "@/content/site";

function mixHex(a: string, b: string, t: number) {
  const parse = (hex: string) => {
    const h = hex.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ] as const;
  };
  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  const clamp = (n: number) => Math.round(Math.min(255, Math.max(0, n)));
  const r = clamp(ar + (br - ar) * t);
  const g = clamp(ag + (bg - ag) * t);
  const bl = clamp(ab + (bb - ab) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

function mixRgba(a: string, b: string, t: number) {
  const parse = (v: string): [number, number, number, number] => {
    const m = v.match(/rgba?\(([^)]+)\)/);
    if (!m) return [255, 255, 255, 1];
    const parts = m[1].split(",").map((x) => Number(x.trim()));
    return [parts[0] ?? 255, parts[1] ?? 255, parts[2] ?? 255, parts[3] ?? 1];
  };
  const [ar, ag, ab, aa] = parse(a);
  const [br, bg, bb, ba] = parse(b);
  const lerp = (x: number, y: number) => x + (y - x) * t;
  return `rgba(${lerp(ar, br)}, ${lerp(ag, bg)}, ${lerp(ab, bb)}, ${lerp(aa, ba)})`;
}

/** Quadratic bezier for a smooth sun arc */
function bezier2(p0: number, p1: number, p2: number, t: number) {
  const u = 1 - t;
  return u * u * p0 + 2 * u * t * p1 + t * t * p2;
}

const DURATION = 1.6;

export function AboutQuoteCard() {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);

  const sunLeft = useTransform(progress, (t) => `${bezier2(86, 54, 10, t)}%`);
  const sunTop = useTransform(progress, (t) => `${bezier2(14, -8, 72, t)}%`);
  const sunOpacity = useTransform(progress, [0, 0.55, 0.85, 1], [1, 1, 0.35, 0]);
  const sunColor = useTransform(
    progress,
    [0, 0.35, 0.65, 1],
    ["#F7F1EA", "#FFE2A8", "#FF9B5E", "#FF6B3D"],
  );
  const sunSize = useTransform(progress, [0, 1], [22, 16]);
  const sunSizePx = useMotionTemplate`${sunSize}px`;

  const sky = useTransform(progress, (t) => mixHex("#E3A393", "#16131C", t));
  const duneTop = useTransform(progress, (t) => mixHex("#D9C5B2", "#2A2436", t));
  const duneBottom = useTransform(progress, (t) => mixHex("#8B6F5A", "#121018", t));
  const labelColor = useTransform(progress, (t) =>
    mixRgba("rgba(255,255,255,0.75)", "rgba(232,220,210,0.7)", t),
  );
  const textColor = useTransform(progress, (t) => mixHex("#FFFFFF", "#EDE4DA", t));
  const attributionColor = useTransform(progress, (t) =>
    mixRgba("rgba(255,255,255,0.85)", "rgba(232,220,210,0.8)", t),
  );

  useEffect(() => {
    if (reduceMotion) return;
    return () => {
      progress.stop();
    };
  }, [progress, reduceMotion]);

  const goNight = () => {
    if (reduceMotion) {
      progress.set(1);
      return;
    }
    animate(progress, 1, {
      duration: DURATION,
      ease: [0.4, 0, 0.2, 1],
    });
  };

  const goDay = () => {
    if (reduceMotion) {
      progress.set(0);
      return;
    }
    animate(progress, 0, {
      duration: DURATION * 0.85,
      ease: [0.4, 0, 0.2, 1],
    });
  };

  return (
    <motion.div
      className="relative h-full min-h-0 cursor-default overflow-hidden rounded-[1.35rem] shadow-[0_8px_30px_-12px_rgba(18,24,22,0.18)] sm:rounded-[1.5rem]"
      style={{ backgroundColor: sky }}
      onHoverStart={goNight}
      onHoverEnd={goDay}
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M-20 168C40 148 90 178 150 162C210 146 250 172 310 158C360 146 400 168 430 160V230H-20Z"
          style={{ fill: duneTop }}
        />
        <motion.path
          d="M-20 192C50 176 100 202 170 188C240 174 280 198 340 186C380 178 410 192 430 188V230H-20Z"
          style={{ fill: duneBottom }}
        />
      </svg>

      <motion.span
        aria-hidden
        className="pointer-events-none absolute z-[5] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_18px_rgba(255,230,180,0.45)]"
        style={{
          left: sunLeft,
          top: sunTop,
          opacity: sunOpacity,
          backgroundColor: sunColor,
          width: sunSizePx,
          height: sunSizePx,
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-5 pt-3 text-center sm:px-5">
        <div className="-translate-y-3 sm:-translate-y-4">
          <motion.p
            className="text-[0.5rem] font-medium tracking-[0.22em] uppercase sm:text-[0.55rem]"
            style={{ color: labelColor }}
          >
            {about.quote.label}
          </motion.p>

          <blockquote className="mt-2 flex max-w-[18rem] flex-col items-center gap-1.5">
            <motion.p
              className="font-quote text-[clamp(1.15rem,2.5vh,1.55rem)] font-semibold leading-none tracking-[-0.01em]"
              style={{ color: textColor }}
            >
              People ignore
            </motion.p>
            <motion.p
              className="text-[clamp(0.58rem,1.25vh,0.72rem)] font-semibold tracking-[0.32em] uppercase"
              style={{ color: textColor }}
            >
              design that
            </motion.p>
            <motion.p
              className="font-quote text-[clamp(1.15rem,2.5vh,1.55rem)] font-semibold leading-none tracking-[-0.01em]"
              style={{ color: textColor }}
            >
              ignores people.
            </motion.p>
          </blockquote>
        </div>

        <motion.p
          className="absolute inset-x-0 bottom-2.5 text-[0.5rem] tracking-[0.16em] uppercase sm:bottom-3 sm:text-[0.55rem]"
          style={{ color: attributionColor }}
        >
          — {about.quote.attribution}
        </motion.p>
      </div>
    </motion.div>
  );
}
