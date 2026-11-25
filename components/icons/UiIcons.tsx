import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRight(props: IconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden {...props}>
      <path d="M2.5 9.5l7-7M3.5 2.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden {...props}>
      <rect x="1.5" y="3" width="11" height="8" rx="1" />
      <path d="M2 3.6l5 3.9 5-3.9" strokeLinejoin="round" />
    </svg>
  );
}

/** Line-art handshake used in the contact section. */
export function HandshakeIcon(props: IconProps) {
  return (
    <svg width="72" height="44" viewBox="0 0 72 44" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {/* left sleeve */}
      <path d="M2 10h12l3 3" />
      <path d="M2 22h11" />
      {/* right sleeve (filled cuff) */}
      <path d="M70 8H56l-4 4v12l4 2h14z" fill="currentColor" />
      {/* hands */}
      <path d="M17 13l9-4h10l16 3" />
      <path d="M52 24l-6 4" />
      <path d="M13 22l7 7c1.5 1.5 3.5 1.5 4.5 0" />
      <path d="M19 26l7 6.5c1.5 1.4 3.5 1.2 4.4-.3" />
      <path d="M24.5 31l6 5c1.4 1.2 3.4 1 4.2-.5" />
      <path d="M30.5 35.5l3.5 2.8c1.4 1.1 3.2.8 4-.6l8-9.7" />
      <path d="M36 9l-9 7.5c-1.4 1.2-1 3.3.8 3.8 2.2.7 4.6.2 6.4-1.3l3.8-3" />
      <path d="M38 16l11 9" />
    </svg>
  );
}
