"use client";

import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroProjects } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

function useOrbitRadius() {
  const [radius, setRadius] = useState(210);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(118);
      else if (width < 1024) setRadius(186);
      else setRadius(218);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return radius;
}

function OrbitCard({
  project,
  index,
  count,
  rotation,
  radius,
}: {
  project: (typeof heroProjects)[number];
  index: number;
  count: number;
  rotation: MotionValue<number>;
  radius: number;
}) {
  const angle = useTransform(rotation, (value) => (index * 360) / count - value);
  const transform = useTransform(
    angle,
    (value) =>
      `translate(-50%, -50%) rotateY(${value}deg) translateZ(${radius}px) rotateY(${-value}deg)`,
  );
  const opacity = useTransform(angle, (value) => {
    const wrapped = ((value % 360) + 360) % 360;
    const distance = Math.min(wrapped, 360 - wrapped);
    return 0.22 + 0.78 * (1 - Math.min(distance / 150, 1));
  });
  const zIndex = useTransform(angle, (value) => {
    const wrapped = ((value % 360) + 360) % 360;
    const distance = Math.min(wrapped, 360 - wrapped);
    return Math.round(120 - distance);
  });
  const pointerEvents = useTransform(angle, (value) => {
    const wrapped = ((value % 360) + 360) % 360;
    const distance = Math.min(wrapped, 360 - wrapped);
    return distance < 55 ? "auto" : "none";
  });

  const isExternal = project.href.startsWith("http");

  return (
    <motion.a
      href={withBasePath(project.href)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={project.title}
      className="absolute top-1/2 left-1/2 block h-[13.5rem] w-[10.25rem] overflow-hidden rounded-[1.35rem] border border-white/70 bg-white shadow-[0_18px_40px_-18px_rgba(18,24,22,0.55)] sm:h-[16.5rem] sm:w-[12.5rem]"
      style={{
        transform,
        opacity,
        zIndex,
        pointerEvents,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        unoptimized
        sizes="(max-width: 640px) 164px, 200px"
        className="object-cover"
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pt-10 pb-3 text-[0.8rem] font-medium tracking-[-0.01em] text-white">
        {project.title}
      </span>
    </motion.a>
  );
}

export function HeroProjectOrbit() {
  const reduce = useReducedMotion();
  const radius = useOrbitRadius();
  const rotation = useMotionValue(0);
  const paused = useRef(false);
  const inView = useRef(true);
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(8);
  const tiltY = useMotionValue(0);
  const [activeTitle, setActiveTitle] = useState(heroProjects[0]?.title ?? "");
  const activeTitleRef = useRef(activeTitle);
  const count = heroProjects.length;

  useEffect(() => {
    const node = stageRef.current;
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
    const setDefaultTilt = () => {
      tiltX.set(8);
      tiltY.set(window.innerWidth >= 1024 ? -16 : 0);
    };

    setDefaultTilt();
    window.addEventListener("resize", setDefaultTilt);
    return () => window.removeEventListener("resize", setDefaultTilt);
  }, [tiltX, tiltY]);

  useAnimationFrame((_, delta) => {
    if (reduce || paused.current || !inView.current || !count) return;
    rotation.set(rotation.get() + (delta / 1000) * 22);
  });

  useMotionValueEvent(rotation, "change", (value) => {
    if (!count) return;
    const step = 360 / count;
    const next = ((Math.round(value / step) % count) + count) % count;
    const title = heroProjects[next]?.title;
    if (title && title !== activeTitleRef.current) {
      activeTitleRef.current = title;
      setActiveTitle(title);
    }
  });

  const stageTransform = useTransform(
    [tiltX, tiltY],
    ([x, y]) => `rotateX(${x}deg) rotateY(${y}deg)`,
  );

  if (!count) return null;

  if (reduce) {
    return (
      <div className="relative mx-auto h-[22rem] w-full max-w-[22rem] sm:h-[26rem]">
        {heroProjects.slice(0, 3).map((project, index) => (
          <a
            key={project.href}
            href={withBasePath(project.href)}
            className="absolute overflow-hidden rounded-[1.35rem] border border-white/80 bg-white shadow-lg"
            style={{
              width: "11.5rem",
              height: "15rem",
              left: `${18 + index * 18}%`,
              top: `${12 + index * 10}%`,
              zIndex: index + 1,
            }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              unoptimized
              sizes="184px"
              className="object-cover"
            />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={stageRef}
      className="relative mx-auto h-[20rem] w-full max-w-[22rem] overflow-hidden sm:h-[28rem] sm:max-w-[28rem] sm:overflow-visible lg:max-w-none lg:h-[32rem]"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
        tiltX.set(8);
        tiltY.set(window.innerWidth >= 1024 ? -16 : 0);
      }}
      onMouseMove={(event) => {
        if (window.innerWidth < 1024) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width - 0.5;
        const py = (event.clientY - bounds.top) / bounds.height - 0.5;
        tiltX.set(8 - py * 10);
        tiltY.set(-16 + px * 14);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.28),transparent_68%)] blur-2xl"
      />

      <div className="absolute inset-0 [perspective:1200px]">
        <motion.div
          className="relative h-full w-full"
          style={{ transform: stageTransform, transformStyle: "preserve-3d" }}
        >
          {heroProjects.map((project, index) => (
            <OrbitCard
              key={project.href}
              project={project}
              index={index}
              count={count}
              rotation={rotation}
              radius={radius}
            />
          ))}
        </motion.div>
      </div>

      <p className="pointer-events-none absolute inset-x-0 bottom-1 text-center text-xs font-medium tracking-[0.14em] text-muted uppercase sm:bottom-2">
        {activeTitle}
      </p>
    </div>
  );
}
