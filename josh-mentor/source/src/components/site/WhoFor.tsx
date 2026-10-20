import { Check, Minus } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const Column = ({
  title,
  items,
  positive,
  testId,
  delay,
}: {
  title: string;
  items: string[];
  positive: boolean;
  testId: string;
  delay: number;
}) => (
  <Reveal delay={delay}>
    <div
      data-testid={testId}
      className={`relative h-full rounded-[24px] p-7 sm:p-9 ${positive ? "glass spotlight" : "border border-white/[0.06]"}`}
    >
      <h3 className={`font-display font-medium tracking-[-0.02em] text-xl sm:text-2xl mb-8 ${positive ? "text-snow" : "text-fog"}`}>
        {title}
      </h3>
      <ul className="space-y-5">
        {items.map((it) => (
          <li key={it} className="flex gap-4 text-[15px] sm:text-base leading-relaxed text-fog">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                positive ? "bg-snow text-night" : "border border-white/15 text-dim"
              }`}
            >
              {positive ? <Check className="h-3 w-3" aria-hidden /> : <Minus className="h-3 w-3" aria-hidden />}
            </span>
            <span className={positive ? "text-snow/90" : ""}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
);

export const WhoFor = () => {
  const w = site.whoFor;
  return (
    <Section id="for-who" eyebrow={w.eyebrow} title={w.title} glow>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Column title={w.forTitle} items={w.forList} positive testId="who-for-ideal-column" delay={0} />
        <Column title={w.notTitle} items={w.notList} positive={false} testId="who-for-not-column" delay={0.1} />
      </div>
    </Section>
  );
};
