import { Check } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";

export const Sprint = () => {
  const s = site.sprint;
  const { showPrice } = site.flags;
  return (
    <Section id="sprint" eyebrow={s.eyebrow} title={s.title} glow>
      <Reveal>
        <p className="mx-auto -mt-8 mb-16 lg:mb-20 max-w-[58ch] text-center text-base sm:text-lg leading-relaxed text-fog text-balance">
          {s.intro}
        </p>
      </Reveal>

      <div className="relative">
        <div aria-hidden className="absolute left-[8%] right-[8%] top-[18px] hidden md:block h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {s.phases.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.12}>
              <li data-testid={`sprint-phase-${i + 1}`} className="relative h-full">
                <div className="mb-6 flex items-center md:justify-center">
                  <span className="relative inline-flex h-9 items-center gap-2 rounded-full glass-strong px-3.5 text-[11px] font-mono uppercase tracking-[0.18em] text-snow">
                    <span className="h-1.5 w-1.5 rounded-full bg-snow shadow-[0_0_12px_rgba(255,255,255,0.9)]" aria-hidden />
                    {p.days}
                  </span>
                </div>
                <div className="spotlight relative h-full rounded-[24px] glass p-7 sm:p-8">
                  <span className="font-display text-dim-sheen text-4xl font-medium tracking-[-0.05em] leading-none">{p.num}</span>
                  <h3 className="mt-8 font-display font-medium tracking-[-0.02em] text-xl sm:text-2xl text-snow">{p.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fog">{p.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal>
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 rounded-[28px] glass spotlight relative p-7 sm:p-9 lg:p-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-dim mb-6">What's included</p>
            <ul data-testid="sprint-includes" className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {s.includes.map((it) => (
                <li key={it} className="flex items-start gap-3 text-[15px] sm:text-base text-snow/90">
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-snow text-night">
                    <Check className="h-2.5 w-2.5" aria-hidden />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-white/[0.08] lg:pl-10 flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-medium text-dim mb-3">Investment</p>
              {showPrice ? (
                <p data-testid="sprint-price" className="text-sheen font-display font-medium text-4xl sm:text-5xl tracking-[-0.04em]">
                  {s.price}
                </p>
              ) : (
                <p data-testid="sprint-price-note" className="text-base sm:text-lg leading-relaxed text-fog max-w-[32ch]">
                  {s.priceNote}
                </p>
              )}
            </div>
            <div>
              <CtaLink testId="sprint-cta-button" label={site.cta.primary} />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};
