"use client";

import type { CSSProperties, ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

type ButtonState = "default" | "hover" | "pressed" | "disabled";

type ButtonSpec = {
  label: string;
  state: ButtonState;
  className: string;
  style?: CSSProperties;
  disabled?: boolean;
  icon?: ReactNode;
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.19Z" />
    </svg>
  );
}

function ShowcaseButton({ spec }: { spec: ButtonSpec }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        disabled={spec.disabled}
        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors ${spec.className}`}
        style={spec.style}
        tabIndex={-1}
      >
        {spec.icon}
        {spec.label}
      </button>
      <p className="text-xs font-medium tracking-[0.04em] text-[#7C6FE8] capitalize">
        {spec.state}
      </p>
    </div>
  );
}

function primarySpecs(label: string): ButtonSpec[] {
  return [
    {
      label,
      state: "default",
      className:
        "h-11 rounded-3xl bg-[#D70A0A] px-8 text-base font-bold text-white",
    },
    {
      label,
      state: "hover",
      className:
        "h-11 rounded-3xl bg-[#B40000] px-8 text-base font-bold text-white",
    },
    {
      label,
      state: "pressed",
      className:
        "h-11 rounded-3xl bg-[#9A0000] px-8 text-base font-bold text-white",
    },
    {
      label,
      state: "disabled",
      className:
        "h-11 rounded-3xl bg-[#D70A0A] px-8 text-base font-bold text-white opacity-40",
      disabled: true,
    },
  ];
}

function outlinedSpecs(label: string): ButtonSpec[] {
  return [
    {
      label,
      state: "default",
      className:
        "h-11 rounded-3xl border border-[#D70A0A] bg-transparent px-8 text-base font-bold text-[#D70A0A]",
    },
    {
      label,
      state: "hover",
      className:
        "h-11 rounded-3xl border border-[#D70A0A] bg-[#F7CECE] px-8 text-base font-bold text-[#D70A0A]",
    },
    {
      label,
      state: "pressed",
      className:
        "h-11 rounded-3xl border border-[#B40000] bg-[#F0B4B4] px-8 text-base font-bold text-[#B40000]",
    },
    {
      label,
      state: "disabled",
      className:
        "h-11 rounded-3xl border border-[#D70A0A] bg-transparent px-8 text-base font-bold text-[#D70A0A] opacity-40",
      disabled: true,
    },
  ];
}

function secondarySpecs(label: string): ButtonSpec[] {
  return [
    {
      label,
      state: "default",
      className:
        "h-11 rounded-3xl bg-white px-8 text-base font-bold text-[#D70A0A] shadow-[0_2px_8px_rgba(0,0,0,0.12)]",
    },
    {
      label,
      state: "hover",
      className:
        "h-11 rounded-3xl bg-[#F7F7F7] px-8 text-base font-bold text-[#D70A0A] shadow-[0_2px_8px_rgba(0,0,0,0.12)]",
    },
    {
      label,
      state: "pressed",
      className:
        "h-11 rounded-3xl bg-[#EDEDED] px-8 text-base font-bold text-[#B40000] shadow-[0_1px_4px_rgba(0,0,0,0.08)]",
    },
    {
      label,
      state: "disabled",
      className:
        "h-11 rounded-3xl bg-white px-8 text-base font-bold text-[#D70A0A] opacity-40 shadow-none",
      disabled: true,
    },
  ];
}

function onDarkSpecs(label: string): ButtonSpec[] {
  return [
    {
      label,
      state: "default",
      className:
        "h-11 rounded-3xl border border-white bg-transparent px-8 text-base font-bold text-white",
    },
    {
      label,
      state: "hover",
      className:
        "h-11 rounded-3xl border border-white bg-white/10 px-8 text-base font-bold text-white",
    },
    {
      label,
      state: "pressed",
      className:
        "h-11 rounded-3xl border border-white bg-white/20 px-8 text-base font-bold text-white",
    },
    {
      label,
      state: "disabled",
      className:
        "h-11 rounded-3xl border border-white bg-transparent px-8 text-base font-bold text-white opacity-40",
      disabled: true,
    },
  ];
}

function withIconSpecs(label: string): ButtonSpec[] {
  const icon = <PhoneIcon className="h-5 w-5 shrink-0" />;

  return [
    {
      label,
      state: "default",
      icon,
      className:
        "h-11 rounded-3xl border border-white bg-transparent px-8 text-base font-bold text-white",
    },
    {
      label,
      state: "hover",
      icon,
      className:
        "h-11 rounded-3xl border border-white bg-white px-8 text-base font-bold text-[#D70A0A]",
    },
    {
      label,
      state: "pressed",
      icon,
      className:
        "h-11 rounded-3xl border border-white bg-[#F7F7F7] px-8 text-base font-bold text-[#B40000]",
    },
    {
      label,
      state: "disabled",
      icon,
      className:
        "h-11 rounded-3xl border border-white bg-transparent px-8 text-base font-bold text-white opacity-40",
      disabled: true,
    },
  ];
}

const defaultGroups = [
  { title: "Primary", specs: primarySpecs("Get started") },
  { title: "Outlined", specs: outlinedSpecs("View plans") },
  { title: "Secondary", specs: secondarySpecs("Join now") },
  {
    title: "On dark",
    specs: onDarkSpecs("Switch now"),
    darkBackground: true,
  },
  {
    title: "With icon",
    specs: withIconSpecs("Call Support"),
    darkBackground: true,
  },
];

export function ButtonsShowcase() {
  const groups = defaultGroups;

  return (
    <div
      className={`${poppins.className} overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#F7F7F7] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]`}
    >
      <div className="space-y-8 px-5 py-8 sm:px-7 sm:py-10 lg:px-8">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 text-xs font-medium tracking-[0.04em] text-[#d60a0a]">
              ◇ {group.title}
            </p>
            <div
              className={`rounded-2xl border border-dashed px-4 py-6 sm:px-6 sm:py-8 ${
                group.darkBackground
                  ? "border-white/15 bg-[#131313]"
                  : "border-[#ffa6a6] bg-white"
              }`}
            >
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.specs.map((spec) => (
                  <ShowcaseButton key={`${group.title}-${spec.state}`} spec={spec} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
