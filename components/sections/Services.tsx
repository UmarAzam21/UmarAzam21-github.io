import { services, servicesHeading } from "@/data/content";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  return (
    <section id="services" className="relative z-10 py-20 md:pt-[104px] md:pb-[128px]">
      <Container>
        <div className="mx-auto max-w-[1040px]">
          <Reveal>
            <SectionHeader heading={servicesHeading} label="Services" />
          </Reveal>

          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-[60px] md:grid-cols-4 md:gap-x-10">
            {services.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 110} className="group">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/50 text-ink ring-1 ring-black/[0.05] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:bg-ink group-hover:text-white">
                    <ServiceIcon id={s.icon} width={30} height={30} />
                  </span>
                  <h3 className="mt-5 text-[17px] font-normal text-ink md:text-[20px]">{s.title}</h3>
                  <p className="mt-3 max-w-[270px] text-[14px] leading-[1.6] text-ink-soft md:text-[15.5px]">
                    {s.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
