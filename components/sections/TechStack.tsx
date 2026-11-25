import { stackHeading, techStack } from "@/data/content";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { TechIcon } from "@/components/icons/TechIcons";

const spanClass = {
  1: "",
  2: "md:col-span-2",
  3: "md:col-span-2 lg:col-span-3",
} as const;

export function TechStack() {
  return (
    <section id="stack" className="relative z-10 pb-20 md:pb-[128px]">
      <Container>
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <SectionHeader heading={stackHeading} label="Tech Stack" rotate={7} />
          </Reveal>

          <ul className="mt-14 grid gap-4 md:mt-[68px] md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {techStack.map((g, i) => {
              const dark = !!g.featured;
              return (
                <li key={g.group} className={spanClass[g.span]}>
                  <Reveal delay={(i % 3) * 110} className="h-full">
                    <article
                      className={`group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] p-7 ring-1 transition-all duration-500 md:rounded-[32px] md:p-8 ${
                        dark
                          ? "bg-ink text-white ring-ink"
                          : "bg-white/55 text-ink ring-black/[0.05] hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)]"
                      }`}
                    >
                      {dark && (
                        <>
                          {/* Dot grid + cursor light for the featured card */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
                            style={{
                              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.2px)",
                              backgroundSize: "18px 18px",
                            }}
                          />
                          <Spotlight size={420} color="rgba(255,255,255,0.08)" className="-z-10" />
                          <ServiceIcon
                            id={g.icon}
                            width={220}
                            height={220}
                            strokeWidth={0.5}
                            className="pointer-events-none absolute -right-10 -bottom-12 -z-10 text-white/[0.06] transition-transform duration-700 group-hover:-rotate-6"
                          />
                        </>
                      )}

                      <header className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${
                              dark
                                ? "bg-white/10 text-white"
                                : "bg-surface-base text-ink group-hover:-rotate-6 group-hover:bg-ink group-hover:text-white"
                            }`}
                          >
                            <ServiceIcon id={g.icon} width={24} height={24} />
                          </span>
                          <h3 className="text-[18px] leading-tight font-normal tracking-[-0.01em] md:text-[20px]">
                            {g.group}
                          </h3>
                        </div>
                        <span
                          className={`shrink-0 rounded-full px-3 py-1 text-[11px] tabular-nums ring-1 ${
                            dark ? "text-white/70 ring-white/15" : "text-ink-soft ring-black/[0.08]"
                          }`}
                        >
                          {String(g.items.length).padStart(2, "0")} skills
                        </span>
                      </header>

                      {g.summary && (
                        <p className="mt-5 max-w-[460px] text-[14px] leading-[1.6] text-white/60 md:text-[15px]">
                          {g.summary}
                        </p>
                      )}

                      <ul className={`flex flex-wrap gap-2 ${g.summary ? "mt-7" : "mt-6"}`}>
                        {g.items.map((item) => (
                          <li
                            key={item}
                            className={`inline-flex cursor-default items-center gap-2 rounded-full px-3.5 py-2 text-[12.5px] ring-1 transition-all duration-300 hover:-translate-y-0.5 md:text-[13px] ${
                              dark
                                ? "bg-white/[0.06] text-white/90 ring-white/[0.12] hover:bg-white hover:text-ink"
                                : "bg-white/80 text-ink ring-black/[0.07] hover:bg-ink hover:text-white hover:ring-ink"
                            }`}
                          >
                            <TechIcon name={item} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
