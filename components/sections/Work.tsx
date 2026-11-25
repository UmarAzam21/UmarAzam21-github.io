import { projects, workHeading } from "@/data/content";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { ArrowUpRight } from "@/components/icons/UiIcons";
import { Reveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";

export function Work() {
  return (
    <section
      id="work"
      className="grain relative z-10 scroll-mt-6 rounded-[48px] bg-surface-band md:rounded-[88px]"
    >
      <Container className="py-20 md:py-[112px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <SectionHeader heading={workHeading} label="Projects" rotate={6} />
          </Reveal>

          <ul className="mt-14 grid gap-4 md:mt-[68px] md:grid-cols-2 md:gap-5">
            {projects.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={(i % 2) * 140} className="h-full">
                <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] bg-white/70 p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-18px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] md:rounded-[36px] md:p-9">
                  <Spotlight size={380} color="rgba(0,0,0,0.05)" className="-z-10" />
                  <div className="relative flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-base text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-white">
                      <ServiceIcon id={p.icon} width={20} height={20} />
                    </span>
                    <span className="text-[11px] tabular-nums text-ink-soft">
                      {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-12 text-[12px] text-ink-soft md:mt-16">{p.category}</p>
                  <h3 className="mt-1.5 text-[24px] leading-tight font-normal tracking-[-0.02em] text-ink md:text-[28px]">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-[460px] text-[13px] leading-[1.65] text-ink-soft md:text-[14px]">
                    {p.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-7">
                    <ul className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full px-3.5 py-[6px] text-[11.5px] text-ink ring-1 ring-black/[0.09]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${p.title} on GitHub`}
                        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink underline-offset-4 hover:underline"
                      >
                        GitHub <ArrowUpRight width={10} height={10} />
                      </a>
                    )}
                  </div>
                </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
