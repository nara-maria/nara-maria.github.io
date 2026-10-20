import { site } from "@/config/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MonoImage } from "./MonoImage";

export const About = () => {
  const a = site.about;
  return (
    <Section id="about" eyebrow={a.eyebrow} title={a.title} align="left" glow>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <Reveal className="lg:col-span-7">
          <figure className="spotlight relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-coal shadow-glow">
            <MonoImage
              src={site.assets.documentary}
              alt="Josh Jones in conversation with a client, black and white documentary photograph"
              testId="about-documentary-image"
              label="Documentary"
              position="50% 40%"
            />
          </figure>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <div data-testid="about-story-text" className="space-y-6 text-base sm:text-lg leading-relaxed text-fog">
            {a.paragraphs.map((p, i) => (
              <p key={p.slice(0, 24)} className={i === 0 ? "text-snow/90" : ""}>
                {p}
              </p>
            ))}
          </div>
          <dl className="mt-10 flex flex-wrap gap-2.5">
            {a.facts.map((f) => (
              <div key={f.k} className="flex items-center gap-2 rounded-full glass px-3.5 py-2 text-xs">
                <dt className="text-dim">{f.k}</dt>
                <dd className="font-medium text-snow">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
};
