import type { SplitHeading } from "@/data/content";
import { Tag } from "@/components/ui/Tag";

/**
 * Centered two-tone heading followed by a hairline divider
 * with a tilted label sitting on it — the page's section signature.
 */
export function SectionHeader({
  heading,
  label,
  rotate = -8,
}: {
  heading: SplitHeading;
  label: string;
  rotate?: number;
}) {
  return (
    <>
      <h2 className="mx-auto max-w-[540px] text-center text-[22px] leading-[1.45] font-normal tracking-[-0.015em] text-ink md:text-[28px]">
        {heading.strong} <span className="text-ink-muted">{heading.muted}</span>
        {heading.rest && <> {heading.rest}</>}
      </h2>

      <div className="relative mt-10 h-px bg-black/[0.08] md:mt-12">
        <Tag
          rotate={rotate}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {label}
        </Tag>
      </div>
    </>
  );
}
