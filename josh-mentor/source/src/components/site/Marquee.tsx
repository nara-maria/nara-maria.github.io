import { site } from "@/config/site";

export const Marquee = () => {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div data-testid="editorial-marquee" aria-hidden className="relative py-10 sm:py-14">
      <p className="mb-6 text-center text-xs font-medium text-dim">What the work is about</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-8 pr-8 font-display font-medium tracking-[-0.02em] text-xl sm:text-2xl text-snow/40"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-snow/30" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
