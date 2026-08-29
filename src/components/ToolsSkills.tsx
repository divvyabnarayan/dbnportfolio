"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { toolboxTools } from "@/content/site";
import { Reveal } from "@/components/Reveal";

function useOrbitScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const sync = () => {
      const w = window.innerWidth;
      if (w < 480) setScale(0.58);
      else if (w < 640) setScale(0.72);
      else setScale(1);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return scale;
}

export function ToolsSkills() {
  const reduce = useReducedMotion();
  const orbit = useOrbitScale();
  const radius = 210 * orbit;
  const count = toolboxTools.length;
  const originY = 16 * orbit;
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.4 });

  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_55%,rgba(232,164,90,0.14),transparent_55%)]"
      />

      <Reveal>
        <p className="text-sm font-medium tracking-[0.16em] text-muted">
          {"{02}"} — TOOLS & SKILLS
        </p>
        <h2
          id="tools-heading"
          className="font-display mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
        >
          My Creative Toolbox
        </h2>
      </Reveal>

      <div
        ref={stageRef}
        className="relative mx-auto mt-10 aspect-square w-full max-w-[22rem] sm:mt-14 sm:max-w-[28rem]"
      >
        <ul
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 h-0 w-0"
          aria-label="Design tools"
        >
          {toolboxTools.map((tool, index) => {
            const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const open = reduce || inView;

            return (
              <li key={tool.name} className="absolute top-0 left-0">
                <motion.div
                  className="flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-2xl shadow-[0_14px_34px_-12px_rgba(28,28,28,0.35)] sm:h-14 sm:w-14 will-change-transform"
                  animate={
                    open
                      ? { x, y, opacity: 1, scale: 1, rotate: tool.rotate }
                      : {
                          x: 0,
                          y: originY,
                          opacity: 0,
                          scale: 0.2,
                          rotate: 0,
                        }
                  }
                  transition={
                    reduce
                      ? { duration: 0 }
                      : open
                        ? {
                            x: {
                              type: "spring",
                              stiffness: 70,
                              damping: 16,
                              mass: 0.85,
                              delay: 0.12 + index * 0.06,
                            },
                            y: {
                              type: "spring",
                              stiffness: 70,
                              damping: 16,
                              mass: 0.85,
                              delay: 0.12 + index * 0.06,
                            },
                            rotate: {
                              type: "spring",
                              stiffness: 60,
                              damping: 14,
                              delay: 0.12 + index * 0.06,
                            },
                            scale: {
                              type: "spring",
                              stiffness: 120,
                              damping: 14,
                              delay: 0.12 + index * 0.06,
                            },
                            opacity: {
                              duration: 0.35,
                              ease: "easeOut",
                              delay: 0.12 + index * 0.06,
                            },
                          }
                        : {
                            // Snap back into the toolbox quickly when leaving
                            duration: 0.35,
                            ease: [0.4, 0, 1, 1],
                            delay: index * 0.02,
                          }
                  }
                >
                  <span className="sr-only">{tool.name}</span>
                  <Image
                    src={tool.image}
                    alt=""
                    width={56}
                    height={56}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </li>
            );
          })}
        </ul>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Image
            src="/skills/toolbox.png?v=6"
            alt="Teal toolbox packed with creative tools"
            width={1024}
            height={831}
            unoptimized
            priority
            className="h-auto w-[58%] sm:w-[52%]"
          />
        </div>
      </div>
    </section>
  );
}
