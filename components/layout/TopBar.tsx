import { siteConfig } from "@/config/site";
import { CopyButton } from "@/components/ui/CopyButton";

export function TopBar() {
  return (
    <header className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-2.5">
        <a
          href={`mailto:${siteConfig.email}`}
          className="mr-1 text-[11px] text-ink-soft transition-colors hover:text-ink"
        >
          {siteConfig.email}
        </a>
        <CopyButton value={siteConfig.email} />
        <a
          href={siteConfig.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[36px] min-w-[86px] items-center justify-center rounded-full bg-white px-6 text-[11px] font-medium text-ink shadow-[0_2px_10px_-2px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-soft"
        >
          CV
        </a>
      </div>

      <nav aria-label="Social links">
        <ul className="flex items-center gap-3 text-[11px] text-ink-soft">
          {siteConfig.socials.map((s, i) => (
            <li key={s.label} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden>/</span>}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
