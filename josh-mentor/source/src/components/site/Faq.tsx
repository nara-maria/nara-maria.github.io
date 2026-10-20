import * as A from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export const Faq = () => {
  const f = site.faq;
  return (
    <Section id="faq" eyebrow={f.eyebrow} title={f.title}>
      <Reveal>
        <A.Root
          type="single"
          collapsible
          className="mx-auto max-w-3xl overflow-hidden rounded-[24px] glass divide-y divide-white/[0.06]"
          data-testid="faq-accordion"
        >
          {f.items.map((it, i) => (
            <A.Item key={it.q} value={`item-${i + 1}`} data-testid={`faq-accordion-item-${i + 1}`} className="group/item">
              <A.Header className="flex">
                <A.Trigger
                  data-testid={`faq-accordion-trigger-${i + 1}`}
                  className="group flex flex-1 items-center justify-between gap-6 px-6 sm:px-8 py-5 sm:py-6 text-left font-display font-medium tracking-[-0.02em] text-base sm:text-lg text-snow transition-colors hover:bg-white/[0.03] data-[state=open]:bg-white/[0.03]"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-dim shrink-0">0{i + 1}</span>
                    <span>{it.q}</span>
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-fog transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-snow group-data-[state=open]:text-night">
                    <Plus aria-hidden className="h-4 w-4" />
                  </span>
                </A.Trigger>
              </A.Header>
              <A.Content
                data-testid={`faq-accordion-content-${i + 1}`}
                className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
              >
                <p className="px-6 sm:px-8 pb-7 pl-[calc(1.5rem+2.5rem)] sm:pl-[calc(2rem+2.5rem)] text-[15px] sm:text-base leading-relaxed text-fog max-w-[60ch]">
                  {it.a}
                </p>
              </A.Content>
            </A.Item>
          ))}
        </A.Root>
      </Reveal>
    </Section>
  );
};
