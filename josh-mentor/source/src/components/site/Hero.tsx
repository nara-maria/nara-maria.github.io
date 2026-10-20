import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { scrollToId } from "@/lib/scroll";
import { CtaLink } from "./CtaLink";
import { Pill } from "./Pill";
import { Beams } from "./Beams";
import { HeroCard } from "./HeroCard";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const reduce = useReducedMotion();
  const { hero, cta } = site;

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section id="top" data-testid="hero-section" className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-10">
      <Beams />
      <div className="relative mx-auto max-w-site px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        <motion.div {...fade(0.1)}>
          <Pill testId="hero-eyebrow">{hero.eyebrow}</Pill>
        </motion.div>

        <h1
          data-testid="hero-headline"
          className="mt-8 font-display font-medium tracking-[-0.04em] leading-[1.0] text-4xl sm:text-5xl lg:text-6xl xl:text-[5.25rem]"
        >
          {hero.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <motion.span
                className={`block ${i === 0 ? "text-sheen" : "text-dim-sheen"}`}
                initial={reduce ? false : { y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.14, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          {...fade(0.6)}
          data-testid="hero-subtext"
          className="mt-8 max-w-[52ch] text-base sm:text-lg leading-relaxed text-fog text-balance"
        >
          {hero.proposition}
        </motion.p>

        <motion.div {...fade(0.75)} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <CtaLink testId="hero-cta-button" label={cta.primary} size="lg" />
          <a
            href="#sprint"
            data-testid="hero-secondary-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("sprint");
            }}
            className="rounded-full px-5 py-3 text-sm font-medium text-fog hover:text-snow transition-colors"
          >
            {cta.secondary}
          </a>
        </motion.div>

        <motion.ul
          {...fade(0.9)}
          data-testid="hero-tags"
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim"
        >
          {hero.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </motion.ul>

        <HeroCard />
      </div>
    </section>
  );
};
