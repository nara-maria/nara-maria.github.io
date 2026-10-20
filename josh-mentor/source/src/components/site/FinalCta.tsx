import { site } from "@/config/site";
import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";
import { Pill } from "./Pill";

export const FinalCta = () => {
  const f = site.finalCta;
  return (
    <section id="start" data-testid="final-cta-section" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-[600px] w-[1200px] max-w-[200vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-white/[0.10] blur-[160px]" />
        <div className="absolute left-1/2 top-0 h-[38%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-site px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44 flex flex-col items-center text-center">
        <Reveal>
          <Pill>{f.eyebrow}</Pill>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            data-testid="final-cta-headline"
            className="mt-8 font-display font-medium tracking-[-0.04em] leading-[1.0] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {f.title.map((l, i) => (
              <span key={l} className={`block ${i === f.title.length - 1 ? "text-dim-sheen" : "text-sheen"}`}>
                {l}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[40ch] text-base sm:text-lg leading-relaxed text-fog text-balance">{f.text}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <CtaLink testId="final-cta-button" label={site.cta.primary} size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
