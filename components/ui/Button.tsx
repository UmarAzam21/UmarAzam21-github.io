import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "dark" | "light";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.45)] hover:bg-black",
  light:
    "bg-white text-ink shadow-[0_2px_10px_-2px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(0,0,0,0.04)] hover:bg-surface-soft",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: "sm" | "md";
  children: ReactNode;
};

/** Pill-shaped link button used across the page. */
export function ButtonLink({
  variant = "dark",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const sizing =
    size === "md"
      ? "h-[52px] px-8 text-[12px] gap-3"
      : "h-[38px] px-6 text-[11px] gap-2";

  return (
    <a
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${sizing} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
