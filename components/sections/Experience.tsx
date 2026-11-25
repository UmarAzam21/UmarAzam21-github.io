import { credentials, experience, experienceHeading } from "@/data/content";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 py-20 md:pt-[112px] md:pb-[128px]">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <SectionHeader heading={experienceHeading} label="Experience" rotate={-6} />
          </Reveal>

          <ol className="mt-12 md:mt-14">
            {experience.map((job, i) => (
              <li key={job.company} className="group relative border-b border-black/[0.08]">
                {/* Hover underline that draws across the row */}
                <span
                  aria-hidden
                  className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
                <Reveal
                  delay={i * 110}
                  className="grid gap-3 py-8 md:grid-cols-[170px_1fr_auto] md:gap-8 md:py-10"
                >
                  <div className="flex items-center gap-2 text-[12px] text-ink-soft md:items-start md:pt-[7px]">
                    {job.current && (
                      <span className="relative flex h-1.5 w-1.5" aria-hidden>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                      </span>
                    )}
                    {job.period}
                  </div>

                  <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-x-2">
                    <h3 className="text-[20px] leading-snug font-normal tracking-[-0.015em] text-ink md:text-[22px]">
                      {job.company}
                      <span className="text-ink-muted"> — {job.role}</span>
                    </h3>
                    <p className="mt-3 max-w-[520px] text-[13px] leading-[1.6] text-ink-soft md:text-[14px]">
                      {job.summary}
                    </p>
                  </div>

                  <p className="text-[12px] text-ink-soft md:pt-[7px] md:text-right">{job.location}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-14">
            {credentials.map((c, i) => (
              <li key={c.label}>
                <Reveal
                  delay={i * 120}
                  className="h-full rounded-[24px] bg-surface-band/70 px-7 py-6 ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:bg-surface-band hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.3)]"
                >
                  <p className="text-[10.5px] tracking-[0.08em] text-ink-soft uppercase">{c.label}</p>
                  <p className="mt-2.5 text-[15px] text-ink">{c.title}</p>
                  <p className="mt-1 text-[12px] text-ink-soft">{c.detail}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
