"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroProjects } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

const FLICK = { type: "spring" as const, duration: 0.55, bounce: 0 };
const STICK_BACK = { type: "spring" as const, duration: 0.4, bounce: 0.12 };

type Project = (typeof heroProjects)[number];

function HorizontalJoyCon({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  return (
    <div
      className="relative h-[6.11rem] w-[15.35rem] origin-center overflow-visible sm:h-[6.73rem] sm:w-[16.9rem]"
      style={{ transform: "rotate(2deg)" }}
      aria-hidden
    >
      <Image
        src={withBasePath("/hero/joycon-left-v13.png")}
        alt=""
        width={570}
        height={227}
        unoptimized
        priority
        className="h-full w-full object-contain drop-shadow-[0_14px_22px_rgba(18,24,22,0.28)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute z-0 rounded-full bg-transparent shadow-none"
        style={{
          left: "25.9%",
          top: "64.76%",
          width: "16.8%",
          aspectRatio: "1 / 1",
          marginLeft: "-8.4%",
          marginTop: "-8.4%",
          border: "2px solid #6cc0e4",
          boxSizing: "border-box",
          boxShadow: "none",
          filter: "none",
        }}
      />
      <motion.img
        src={withBasePath("/hero/joycon-stick-v13.png")}
        alt=""
        className="pointer-events-none absolute z-10"
        style={{
          left: "18.60%",
          top: "41.85%",
          width: "15.44%",
          height: "45.81%",
          x,
          y,
        }}
      />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith("http");

  return (
    <a
      href={withBasePath(project.href)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={project.title}
      className="relative block h-full w-full overflow-hidden rounded-[1.35rem]"
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        unoptimized
        sizes="320px"
        className="object-cover"
        priority
      />
    </a>
  );
}

export function HeroJoyConScroller() {
  const reduce = useReducedMotion();
  const count = heroProjects.length;
  const indexRef = useRef(0);
  const inView = useRef(true);
  const moving = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const page = useMotionValue(0);
  const stick = useMotionValue(0);
  const stickX = useTransform(stick, [0, 1], [0, 14]);
  const stickY = useTransform(stick, [0, 1], [0, 2]);
  const trackX = useTransform(page, [0, count], [0, -count * width]);
  const slides = count > 0 ? [...heroProjects, heroProjects[0]] : [];

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    const measure = () => setWidth(node.offsetWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    heroProjects.forEach((item) => {
      const img = new window.Image();
      img.src = withBasePath(item.image);
    });
  }, []);

  useEffect(() => {
    if (reduce || count < 2) return;

    let release: number | undefined;

    const tick = () => {
      if (!inView.current || moving.current) return;
      moving.current = true;
      const next = indexRef.current + 1;
      stick.set(0);
      animate(stick, 1, FLICK);
      animate(page, next, {
        ...FLICK,
        onComplete: () => {
          if (next >= count) {
            page.set(0);
            indexRef.current = 0;
          } else {
            indexRef.current = next;
          }
          moving.current = false;
        },
      });
      release = window.setTimeout(() => {
        animate(stick, 0, STICK_BACK);
      }, 520);
    };

    const interval = window.setInterval(tick, 2800);
    return () => {
      window.clearInterval(interval);
      if (release !== undefined) window.clearTimeout(release);
    };
  }, [count, reduce, page, stick]);

  if (slides.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className="flex h-full flex-col items-center justify-center gap-6"
    >
      <div
        ref={viewportRef}
        className="relative h-[17.5rem] w-full max-w-[20rem] overflow-hidden sm:h-[20.5rem] sm:max-w-[22rem]"
      >
        <motion.div className="flex h-full" style={{ x: trackX }}>
          {slides.map((project, slideIndex) => (
            <div
              key={`${project.href}-${slideIndex}`}
              className="h-full shrink-0 px-4"
              style={{ width: width || "100%" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      <HorizontalJoyCon x={stickX} y={stickY} />
    </div>
  );
}
