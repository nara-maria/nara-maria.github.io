import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Pill } from "./Pill";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  align?: "center" | "left";
  glow?: boolean;
};

export const Section = ({ id, eyebrow, title, children, align = "center", glow }: Props) => (
  <section id={id} data-testid={`section-${id}`} className="relative scroll-mt-24 overflow-hidden">
    {glow && (
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] max-w-[160vw] -translate-x-1/2 -translate-y-1/3 rounded-full bg-white/[0.05] blur-[140px]"
      />
    )}
    <div className="relative mx-auto max-w-site px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
      <Reveal>
        <div className={`mb-14 lg:mb-20 flex flex-col gap-6 ${align === "center" ? "items-center text-center" : "items-start"}`}>
          <Pill>{eyebrow}</Pill>
          <h2 className="text-sheen font-display font-medium tracking-[-0.03em] leading-[1.05] text-3xl sm:text-4xl lg:text-5xl max-w-[22ch] text-balance">
            {title}
          </h2>
        </div>
      </Reveal>
      {children}
    </div>
  </section>
);
