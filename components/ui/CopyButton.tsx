"use client";

import { useEffect, useState } from "react";

/** Copies `value` to the clipboard and briefly confirms. */
export function CopyButton({ value, className = "" }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={`inline-flex h-[36px] min-w-[86px] items-center justify-center rounded-full bg-white px-6 text-[11px] font-medium text-ink shadow-[0_2px_10px_-2px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-soft ${className}`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
