"use client";

import { useEffect } from "react";

/**
 * Prevents rubber-band / overscroll past the top and bottom of .app-scroll
 * so the footer never lifts away from the bottom edge.
 */
export function ScrollBoundsLock() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".app-scroll");
    if (!root) return;

    const atBottom = () =>
      root.scrollTop + root.clientHeight >= root.scrollHeight - 1;
    const atTop = () => root.scrollTop <= 0;

    const onWheel = (event: WheelEvent) => {
      if ((atBottom() && event.deltaY > 0) || (atTop() && event.deltaY < 0)) {
        event.preventDefault();
      }
    };

    let lastTouchY = 0;

    const onTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? 0;
      const deltaY = lastTouchY - currentY;
      lastTouchY = currentY;

      if ((atBottom() && deltaY > 0) || (atTop() && deltaY < 0)) {
        event.preventDefault();
      }
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    root.addEventListener("touchstart", onTouchStart, { passive: true });
    root.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      root.removeEventListener("wheel", onWheel);
      root.removeEventListener("touchstart", onTouchStart);
      root.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return null;
}
