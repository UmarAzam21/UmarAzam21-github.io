import { brands } from "@/data/content";
import { BrandMark } from "@/components/icons/BrandMarks";

export function Brands() {
  // Rendered twice so the marquee can loop seamlessly (track slides by -50%).
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Companies I have worked with"
      className="grain relative z-20 -mt-[48px] rounded-b-[48px] bg-surface-band pt-[48px] md:-mt-[88px] md:rounded-b-[88px] md:pt-[88px]"
    >
      <div className="py-14 md:py-[72px]">
        <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="marquee-track flex w-max items-center text-ink">
            {loop.map((b, i) => (
              <li
                key={`${b.id}-${i}`}
                title={b.name}
                aria-hidden={i >= brands.length || undefined}
                className="flex shrink-0 justify-center pr-16 opacity-80 grayscale transition-opacity duration-300 hover:opacity-100 md:pr-28"
              >
                <span className="sr-only">{b.name}</span>
                <span aria-hidden>
                  <BrandMark id={b.id} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
