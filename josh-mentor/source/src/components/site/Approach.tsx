import { site } from "@/config/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export const Approach = () => {
  const a = site.approach;
  return (
    <Section id="approach" eyebrow={a.eyebrow} title={a.title}>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]"
        />
        {a.pillars.map((p, i) => (
          <Reveal key={p.num} delay={i * 0.12}>
            <article
              data-testid={`approach-pillar-${p.name.split(" ")[1]}`}
              className="group spotlight relative h-full overflow-hidden rounded-[28px] glass p-7 sm:p-9 lg:p-10 transition-colors duration-500 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between mb-14 lg:mb-20">
                <span className="font-display text-dim-sheen font-medium text-5xl sm:text-6xl tracking-[-0.05em] leading-none">
                  {p.num}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-fog">{p.tag}</span>
              </div>
              <h3 className="font-display font-medium tracking-[-0.03em] text-2xl sm:text-3xl mb-3 text-snow">{p.name}</h3>
              <p className="text-[15px] sm:text-base leading-relaxed text-fog mb-8 max-w-[40ch]">{p.lead}</p>
              <ul className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 py-3.5 text-sm sm:text-[15px] leading-relaxed text-snow/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-snow/60" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
