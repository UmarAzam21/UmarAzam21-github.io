import Image from "next/image";
import { testimonials, testimonialsHeading } from "@/data/content";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Shows real testimonials only. Placeholder entries (see data/content.ts)
 * are previewed in development and never rendered in production.
 */
export function Testimonials() {
  const isDev = process.env.NODE_ENV === "development";
  const items = testimonials.filter((t) => !t.placeholder || isDev);
  if (items.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="grain relative z-10 mb-16 rounded-[48px] bg-surface-hero md:mb-24 md:rounded-[88px]"
    >
      <Container className="py-20 md:py-[112px]">
        <div className="mx-auto max-w-[1040px]">
          <Reveal>
            <SectionHeader heading={testimonialsHeading} label="Testimonials" rotate={-7} />
          </Reveal>

          <ul className="mt-14 grid gap-4 md:mt-[68px] md:grid-cols-3 md:gap-5">
            {items.map((t, i) => (
              <li key={`${t.name}-${i}`}>
                <Reveal delay={i * 120} className="h-full">
                  <figure className="relative flex h-full flex-col rounded-[28px] bg-white/70 p-7 ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] md:rounded-[32px] md:p-8">
                    {t.placeholder && (
                      <span className="absolute top-5 right-5 rounded-full bg-ink px-2.5 py-1 text-[9.5px] tracking-[0.08em] text-white uppercase">
                        Placeholder · dev only
                      </span>
                    )}
                    <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden className="text-ink/80">
                      <path
                        d="M0 22V13C0 5.8 3.8 1.5 11 0l1.3 3C8.4 4.3 6.4 6.8 6.2 10.5H11V22H0zm16 0V13c0-7.2 3.8-11.5 11-13l1 3c-3.9 1.3-5.9 3.8-6.1 7.5H27V22H16z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote className="mt-6 flex-1 text-[14.5px] leading-[1.65] text-ink md:text-[15.5px]">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3 border-t border-black/[0.07] pt-6">
                      {t.photo ? (
                        <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full bg-surface-base ring-2 ring-white">
                          <Image
                            src={t.photo}
                            alt={`Photo of ${t.name}`}
                            fill
                            sizes="44px"
                            className="object-cover grayscale contrast-[1.05]"
                          />
                        </span>
                      ) : (
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-medium text-white">
                          {initials(t.name)}
                        </span>
                      )}
                      <span>
                        <span className="block text-[14px] text-ink">{t.name}</span>
                        <span className="block text-[12px] text-ink-soft">
                          {t.role}, {t.company}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
