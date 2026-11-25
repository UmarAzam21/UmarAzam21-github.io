/**
 * Monochrome wordmarks for the logo strip.
 * Simple typographic marks, each styled differently to give the strip
 * the same visual variety as the reference design.
 */
export type BrandId =
  | "webtery"
  | "liztek"
  | "grootcore"
  | "mightyfive"
  | "compilevision"
  | "verdent";

function Webtery() {
  return (
    <span className="flex items-center gap-2">
      <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden>
        <path d="M0 3l7 -3v19l-7 3z M8 0l9 4v18l-9-4z M18 4l8-3v18l-8 3z" fill="currentColor" />
      </svg>
      <span className="text-[13px] leading-[1.05] font-semibold tracking-wide uppercase">
        Web
        <br />
        tery
      </span>
    </span>
  );
}

function Liztek() {
  return (
    <span className="flex items-start text-[25px] font-normal tracking-[-0.02em]">
      liztek
      <svg width="7" height="7" viewBox="0 0 7 7" className="mt-[13px] ml-[1px]" aria-hidden>
        <path d="M0 0h7L3.5 6z" fill="currentColor" />
      </svg>
    </span>
  );
}

function Grootcore() {
  return (
    <span className="font-serif text-[27px] italic tracking-[-0.04em]" style={{ fontWeight: 600 }}>
      Grootcore
    </span>
  );
}

function MightyFive() {
  return (
    <span className="flex items-center gap-2 text-[19px] font-extrabold tracking-[-0.03em] uppercase">
      <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-current">
        <span className="text-[14px] leading-none font-bold text-surface-band">5</span>
      </span>
      Mighty&nbsp;Five
    </span>
  );
}

function CompileVision() {
  return (
    <span className="flex items-center gap-2 text-[19px] tracking-[-0.02em]">
      <svg width="30" height="18" viewBox="0 0 30 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M1 9C5 3 10 1 15 1s10 2 14 8c-4 6-9 8-14 8S5 15 1 9z" />
        <path d="M12.5 6.5L10 9l2.5 2.5M17.5 6.5L20 9l-2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        <span className="font-semibold">compile</span>
        <span className="font-light">vision</span>
      </span>
    </span>
  );
}

function Verdent() {
  return (
    <span className="flex items-center gap-1.5 text-[24px] font-medium tracking-[-0.045em]">
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
        <path d="M1 2h6l3 9 3-9h6l-7 16H8z" fill="currentColor" />
      </svg>
      verdent
    </span>
  );
}

const marks: Record<BrandId, () => React.JSX.Element> = {
  webtery: Webtery,
  liztek: Liztek,
  grootcore: Grootcore,
  mightyfive: MightyFive,
  compilevision: CompileVision,
  verdent: Verdent,
};

export function BrandMark({ id }: { id: BrandId }) {
  const Mark = marks[id];
  return <Mark />;
}
