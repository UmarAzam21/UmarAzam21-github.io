import Image from "next/image";
import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { hero } from "@/data/content";
import { Container } from "@/components/layout/Container";
import { TopBar } from "@/components/layout/TopBar";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ArrowUpRight } from "@/components/icons/UiIcons";
import { Magnetic } from "@/components/motion/Magnetic";
import { Spotlight } from "@/components/motion/Spotlight";
import { CountUp } from "@/components/motion/CountUp";

/** Flattens the headline into words with a running index for the stagger. */
function headlineWords() {
  let i = 0;
  return hero.headline.map((line) =>
    line.flatMap((seg) =>
      seg.text.split(" ").map((word) => ({ word, muted: seg.muted, index: i++ })),
    ),
  );
}

/** Large stat that flanks the headline on desktop. */
function HeroStat({
  stat,
  align,
  delay,
}: {
  stat: (typeof hero.stats)[number];
  align: "left" | "right";
  delay: number;
}) {
  const isLeft = align === "left";
  const rule = <span aria-hidden className="h-px w-10 bg-ink/30" />;
  return (
    <dl
      className={`reveal hidden lg:flex lg:flex-col ${
        isLeft ? "lg:items-start lg:justify-self-start lg:text-left" : "lg:items-end lg:justify-self-end lg:text-right"
      }`}
      style={{ animationDelay: `${delay - 200}ms` }}
    >
      <dt className="sr-only">{stat.label}</dt>
      <dd className="text-[88px] leading-[0.9] font-medium tracking-[-0.055em] text-ink xl:text-[104px]">
        <CountUp value={stat.value} suffix={stat.suffix} delay={delay} />
      </dd>
      <dd aria-hidden className="mt-5 flex items-center gap-3 text-[12px] tracking-[0.14em] text-ink-soft uppercase">
        {isLeft && rule}
        {stat.label}
        {!isLeft && rule}
      </dd>
    </dl>
  );
}

export function Hero() {
  const lines = headlineWords();

  return (
    <section className="grain relative z-30 rounded-b-[48px] bg-surface-hero md:rounded-b-[88px]">
      {/* Ambient background: slow drifting light and shade */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="blob blob-a absolute -top-[20%] left-[8%] h-[520px] w-[520px] rounded-full bg-white/70 blur-[90px]" />
        <div className="blob blob-b absolute top-[25%] right-[2%] h-[440px] w-[440px] rounded-full bg-[#d3d3d0]/70 blur-[100px]" />
        <div className="blob blob-c absolute -bottom-[25%] left-[35%] h-[380px] w-[380px] rounded-full bg-white/60 blur-[90px]" />
      </div>
      <Spotlight />

      <Container className="pt-7 pb-20 md:pt-11 md:pb-[104px]">
        <div className="reveal" style={{ animationDelay: "0ms" }}>
          <TopBar />
        </div>

        <div className="pt-16 md:pt-[88px] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
          {/* Left stat (desktop) */}
          <HeroStat stat={hero.stats[0]} align="left" delay={900} />

        <div className="flex flex-col items-center text-center">
          {/* Avatar + rotating ring + floating name badge */}
          <div className="reveal group relative" style={{ animationDelay: "80ms" }}>
            <svg
              aria-hidden
              viewBox="0 0 132 132"
              className="spin-slow pointer-events-none absolute -inset-3 h-[132px] w-[132px] text-ink/25"
            >
              <circle cx="66" cy="66" r="64" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" strokeLinecap="round" />
            </svg>
            <div className="relative h-[108px] w-[108px] overflow-hidden rounded-full bg-surface-band shadow-[0_8px_24px_-10px_rgba(0,0,0,0.35)]">
              <Image
                src={siteConfig.avatar.src}
                alt={`Portrait of ${siteConfig.name}`}
                width={siteConfig.avatar.width}
                height={siteConfig.avatar.height}
                sizes="108px"
                preload
                className="h-full w-full object-cover object-[50%_28%] grayscale contrast-[1.08] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
            </div>
            <div className="float absolute top-[22px] left-[78px]">
              <Tag rotate={-12} className="px-4 py-[6px]">
                {siteConfig.name} <span aria-hidden className="wave inline-block">👋</span>
              </Tag>
            </div>
          </div>

          <h1 className="mt-9 text-[34px] leading-[1.14] font-medium tracking-[-0.03em] text-ink sm:text-[44px] md:text-[52px]">
            {lines.map((words, i) => (
              <span key={i} className="block">
                {words.map(({ word, muted, index }) => (
                  <span key={index}>
                    <span
                      className={`word ${muted ? "text-ink-muted" : ""}`}
                      style={{ "--i": index } as CSSProperties}
                    >
                      {word}
                    </span>{" "}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="reveal mt-11" style={{ animationDelay: "650ms" }}>
            <Magnetic>
              <ButtonLink href={hero.ctaHref} className="group/cta">
                {hero.cta}
                <ArrowUpRight className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </ButtonLink>
            </Magnetic>
          </div>

          {/* Quick stats (mobile / tablet) */}
          <dl className="reveal mt-12 flex items-stretch justify-center md:mt-14 lg:hidden" style={{ animationDelay: "800ms" }}>
            {hero.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center px-7 md:px-10 ${i > 0 ? "border-l border-black/[0.1]" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[30px] leading-none font-medium tracking-[-0.03em] text-ink md:text-[38px]">
                  <CountUp value={s.value} suffix={s.suffix} delay={900 + i * 150} />
                </dd>
                <dd aria-hidden className="mt-2 text-[11px] tracking-[0.06em] text-ink-soft uppercase md:text-[12px]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

          {/* Right stat (desktop) */}
          <HeroStat stat={hero.stats[1]} align="right" delay={1050} />
        </div>
      </Container>
    </section>
  );
}
