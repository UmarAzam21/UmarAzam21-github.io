"use client";

import { useEffect, useRef } from "react";

/**
 * Counts from 0 up to `value` once it scrolls into view.
 * Server-renders the final number, so it reads correctly without JS
 * or with reduced motion.
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1400,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer = 0;
    el.textContent = `0${suffix}`;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(eased * value)}${suffix}`;
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        io.disconnect();
        timer = window.setTimeout(run, delay);
      }
    });
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      el.textContent = `${value}${suffix}`;
    };
  }, [value, suffix, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
