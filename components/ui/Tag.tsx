import type { ReactNode } from "react";

/** Small white, slightly tilted label — used for the name badge and section tags. */
export function Tag({
  children,
  rotate = -8,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1 rounded-full bg-white px-5 py-[7px] text-[10px] font-medium whitespace-nowrap text-ink shadow-[0_4px_14px_-4px_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </span>
  );
}
