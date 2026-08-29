"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function Icon({ glyph, className }: { glyph: string; className?: string }) {
  return (
    <span aria-hidden className={`material-icons leading-none ${className ?? ""}`}>
      {glyph}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-black/[0.06] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function FlipComponentCollage() {
  return (
    <div
      className={`${poppins.className} relative h-full w-full overflow-hidden bg-[#F3F3F3] p-3 sm:p-5 lg:p-6`}
    >
      <div className="grid h-full grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <Card className="flex items-center justify-between px-2 py-1.5 sm:px-3 sm:py-2">
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-md border border-[#D2D2D2] text-[#323232] sm:h-7 sm:w-7"
            >
              <Icon glyph="remove" className="text-sm sm:text-base" />
            </button>
            <span className="text-xs font-semibold text-[#131313] sm:text-sm">1</span>
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-md border border-[#D2D2D2] text-[#323232] sm:h-7 sm:w-7"
            >
              <Icon glyph="add" className="text-sm sm:text-base" />
            </button>
          </Card>

          <div className="relative">
            <div className="mb-1 flex items-center justify-between text-[9px] sm:text-[10px]">
              <span className="font-medium text-[#323232]">Download speed</span>
              <span className="font-semibold text-[#D70A0A]">50 Mbps</span>
            </div>
            <div className="relative h-1.5 rounded-full bg-[#D2D2D2] sm:h-2">
              <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[#D70A0A]" />
              <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#D70A0A] shadow-sm sm:h-3.5 sm:w-3.5" />
            </div>
            <div className="absolute -top-8 left-1/4 hidden rounded-md bg-[#131313] px-2 py-1 text-[8px] text-white shadow-lg sm:block">
              Drag to adjust your plan speed
              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#131313]" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <button
              type="button"
              className="rounded-full bg-[#D70A0A] px-2.5 py-1 text-[9px] font-bold text-white sm:px-3 sm:py-1.5 sm:text-[10px]"
            >
              Get started
            </button>
            <button
              type="button"
              className="rounded-full border border-[#D70A0A] px-2.5 py-1 text-[9px] font-bold text-[#D70A0A] sm:px-3 sm:py-1.5 sm:text-[10px]"
            >
              View plans
            </button>
          </div>

          <Card className="flex p-0.5 sm:p-1">
            {["NBN 50", "NBN 100", "NBN 500"].map((plan, i) => (
              <span
                key={plan}
                className={`flex-1 rounded-lg px-1 py-1 text-center text-[7px] font-medium sm:px-1.5 sm:text-[9px] ${
                  i === 0
                    ? "bg-[#F7CECE] font-semibold text-[#131313]"
                    : "text-[#888888]"
                }`}
              >
                {plan}
              </span>
            ))}
          </Card>

          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              {["#D70A0A", "#B40000", "#323232"].map((color) => (
                <div
                  key={color}
                  className="h-5 w-5 rounded-full border-2 border-white sm:h-6 sm:w-6"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  glyph="star"
                  className="text-[10px] text-amber-400 sm:text-xs"
                />
              ))}
            </div>
            <span className="text-[8px] font-medium text-[#D70A0A] sm:text-[9px]">
              4.8 reviews
            </span>
          </div>

          <Card className="p-2 sm:p-3">
            <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#F7CECE] sm:h-8 sm:w-8">
              <Icon glyph="delete" className="text-sm text-[#D70A0A] sm:text-base" />
            </div>
            <p className="mt-1.5 text-center text-[9px] font-bold text-[#131313] sm:text-[10px]">
              Cancel plan?
            </p>
            <p className="mt-0.5 text-center text-[7px] leading-snug text-[#888888] sm:text-[8px]">
              Are you sure? This action cannot be undone.
            </p>
            <div className="mt-2 flex gap-1.5">
              <button
                type="button"
                className="flex-1 rounded-lg bg-[#D70A0A] py-1 text-[7px] font-bold text-white sm:text-[8px]"
              >
                Cancel plan
              </button>
              <button
                type="button"
                className="flex-1 rounded-lg border border-[#D2D2D2] py-1 text-[7px] font-medium text-[#323232] sm:text-[8px]"
              >
                Keep plan
              </button>
            </div>
          </Card>
        </div>

        {/* Middle column */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <label className="flex items-center gap-1.5 text-[9px] text-[#323232] sm:text-[10px]">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#D2D2D2] sm:h-4 sm:w-4" />
            NBN plan
          </label>

          <label className="flex items-center gap-1.5 text-[9px] text-[#323232] sm:text-[10px]">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-[#D70A0A] sm:h-4 sm:w-4">
              <Icon glyph="check" className="text-[10px] text-white sm:text-xs" />
            </span>
            Mobile add-on
          </label>

          <div className="flex flex-wrap gap-1">
            <span className="inline-flex items-center gap-0.5 rounded-full bg-[#EDEDED] px-1.5 py-0.5 text-[7px] text-[#323232] sm:text-[8px]">
              Internet
              <Icon glyph="close" className="text-[10px]" />
            </span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-[#D70A0A] px-1.5 py-0.5 text-[7px] font-medium text-white sm:text-[8px]">
              <Icon glyph="check" className="text-[10px]" />
              Mobile
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:gap-1.5">
            <span className="inline-flex w-fit items-center gap-0.5 rounded-full border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[7px] font-medium text-emerald-700 sm:text-[8px]">
              <Icon glyph="check_circle" className="text-[10px]" />
              Active
            </span>
            <span className="inline-flex w-fit items-center gap-0.5 rounded-full border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[7px] font-medium text-amber-700 sm:text-[8px]">
              <Icon glyph="schedule" className="text-[10px]" />
              Pending
            </span>
            <span className="inline-flex w-fit items-center gap-0.5 rounded-full border border-red-300 bg-red-50 px-1.5 py-0.5 text-[7px] font-medium text-red-600 sm:text-[8px]">
              <Icon glyph="cancel" className="text-[10px]" />
              Offline
            </span>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-[#888888] sm:text-[9px]">Notifications</span>
              <div className="relative h-4 w-7 rounded-full bg-[#D2D2D2] sm:h-5 sm:w-9">
                <div className="absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white shadow sm:h-4 sm:w-4" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-[#888888] sm:text-[9px]">Auto-renew</span>
              <div className="relative h-4 w-7 rounded-full bg-[#D70A0A] sm:h-5 sm:w-9">
                <div className="absolute top-0.5 right-0.5 h-3 w-3 rounded-full bg-white shadow sm:h-4 sm:w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <Card className="border-l-4 border-l-emerald-500 p-2 sm:p-2.5">
            <div className="flex items-start gap-1.5">
              <Icon glyph="check_circle" className="mt-0.5 text-sm text-emerald-500 sm:text-base" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-1">
                  <p className="text-[9px] font-bold text-[#131313] sm:text-[10px]">
                    Connection active
                  </p>
                  <Icon glyph="close" className="text-xs text-[#888888]" />
                </div>
                <p className="mt-0.5 text-[7px] leading-snug text-[#888888] sm:text-[8px]">
                  Your NBN service is live. Enjoy your connection.
                </p>
              </div>
            </div>
          </Card>

          <Card className="flex-1 p-2 sm:p-3">
            <label className="text-[8px] font-medium text-[#323232] sm:text-[9px]">
              Installation date{" "}
              <span className="text-[#D70A0A]">*</span>
              <span className="text-[#888888]"> (dd/mm/yyyy)</span>
            </label>
            <div className="mt-1 flex items-center justify-between rounded-lg border border-[#D2D2D2] px-2 py-1">
              <span className="text-[8px] text-[#131313] sm:text-[9px]">23/05/2026</span>
              <Icon glyph="calendar_today" className="text-xs text-[#888888]" />
            </div>

            <div className="mt-2 rounded-lg border border-[#EDEDED] p-1.5 sm:p-2">
              <div className="flex items-center justify-between">
                <button type="button" aria-label="Previous month">
                  <Icon glyph="chevron_left" className="text-sm text-[#323232]" />
                </button>
                <span className="text-[8px] font-semibold text-[#131313] sm:text-[9px]">
                  May 2026
                </span>
                <button type="button" aria-label="Next month">
                  <Icon glyph="chevron_right" className="text-sm text-[#323232]" />
                </button>
              </div>
              <div className="mt-1.5 grid grid-cols-7 gap-0.5 text-center text-[6px] text-[#888888] sm:text-[7px]">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="mt-0.5 grid grid-cols-7 gap-0.5 text-center text-[7px] sm:text-[8px]">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <span
                    key={day}
                    className={`flex h-4 w-4 items-center justify-center rounded-full sm:h-5 sm:w-5 ${
                      day === 23
                        ? "bg-[#D70A0A] font-semibold text-white"
                        : day === 15
                          ? "font-medium text-[#D70A0A]"
                          : "text-[#323232]"
                    }`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
