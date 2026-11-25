import { siteConfig } from "@/config/site";
import { contact } from "@/data/content";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { HandshakeIcon, MailIcon } from "@/components/icons/UiIcons";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="grain relative z-10 rounded-t-[48px] bg-surface-band md:rounded-t-[88px]"
    >
      <Spotlight size={600} color="rgba(255,255,255,0.9)" />

      <Container className="flex flex-col items-center pt-[72px] pb-16 text-center md:pt-[104px] md:pb-20">
        <Reveal className="flex flex-col items-center">
          <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full bg-surface-hero text-ink">
            <span aria-hidden className="pulse-ring absolute inset-0 rounded-full ring-1 ring-ink/20" />
            <span
              aria-hidden
              className="pulse-ring absolute inset-0 rounded-full ring-1 ring-ink/20"
              style={{ animationDelay: "1.4s" }}
            />
            <span className="shake inline-flex">
              <HandshakeIcon />
            </span>
          </div>

          <h2 className="mt-12 max-w-[280px] text-[26px] leading-[1.25] font-normal tracking-[-0.02em] text-ink md:max-w-[440px] md:text-[34px]">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12 w-full">
          <ContactForm />
        </Reveal>

        <Reveal delay={150} className="mt-10 flex flex-col items-center">
          <p className="mb-4 flex items-center gap-3 text-[12px] text-ink-soft">
            <span className="h-px w-10 bg-black/[0.12]" aria-hidden />
            {contact.directLabel}
            <span className="h-px w-10 bg-black/[0.12]" aria-hidden />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
          <Magnetic strength={0.25}>
            <ButtonLink href={`mailto:${siteConfig.email}`} size="sm" className="gap-2.5">
              <MailIcon />
              Email Me
            </ButtonLink>
          </Magnetic>
          <Magnetic strength={0.25}>
            <ButtonLink
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="light"
            >
              WhatsApp
            </ButtonLink>
          </Magnetic>
          </div>
        </Reveal>

        <footer className="mt-24 flex w-full flex-col items-center justify-between gap-3 border-t border-black/[0.07] pt-7 text-[11px] text-ink-soft sm:flex-row">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            {siteConfig.role} — {siteConfig.location}
          </p>
        </footer>
      </Container>
    </section>
  );
}
