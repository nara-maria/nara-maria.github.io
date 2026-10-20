import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { scrollToId } from "@/lib/scroll";
import { Logo } from "./Logo";
import { CtaLink } from "./CtaLink";

const storiesVisible =
  site.flags.showDraftPlaceholders || site.stories.slots.some((s) => s.videoUrl);

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = site.nav.filter((n) => n.id !== "stories" || storiesVisible);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <header data-testid="site-header" className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto max-w-site px-4 sm:px-6 lg:px-8 transition-[padding] duration-500 ${scrolled ? "pt-3" : "pt-5"}`}
      >
        <div
          className={`flex h-14 items-center justify-between gap-4 rounded-full px-3 pl-5 transition-colors duration-500 ${
            scrolled || open ? "glass-strong" : ""
          }`}
        >
          <a
            href="#top"
            onClick={go("top")}
            data-testid="header-brand-logo"
            className="flex items-center gap-2.5 text-snow"
            aria-label="Josh Jones — back to top"
          >
            <Logo />
            <span className="font-display font-semibold tracking-[-0.02em] text-[15px]">{site.brand.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 rounded-full glass p-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={go(n.id)}
                data-testid={`header-nav-${n.id}`}
                className="rounded-full px-4 py-1.5 text-[13px] font-medium text-fog hover:text-snow hover:bg-white/[0.06] transition-colors duration-200"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <CtaLink testId="header-cta-button" label={site.cta.primary} />
            </div>
            <button
              type="button"
              data-testid="header-menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass text-snow"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            data-testid="header-mobile-nav"
            aria-label="Mobile"
            className="lg:hidden mt-2 rounded-[24px] glass-strong p-3"
          >
            <div className="flex flex-col">
              {nav.map((n, i) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={go(n.id)}
                  data-testid={`header-mobile-nav-${n.id}`}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display font-medium tracking-[-0.02em] text-lg text-snow hover:bg-white/[0.06]"
                >
                  {n.label}
                  <span className="font-mono text-[10px] tracking-[0.2em] text-dim">0{i + 1}</span>
                </a>
              ))}
              <div className="px-2 pt-3 pb-1 sm:hidden">
                <CtaLink testId="header-mobile-cta-button" label={site.cta.primary} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
