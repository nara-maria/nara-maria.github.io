import { ArrowUp } from "lucide-react";
import { site } from "@/config/site";
import { scrollToId } from "@/lib/scroll";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer data-testid="site-footer" className="relative border-t border-white/[0.06]">
    <div className="mx-auto max-w-site px-6 sm:px-8 lg:px-12 pt-14 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6 text-snow" />
          <div>
            <p className="font-display font-semibold tracking-[-0.02em] text-[15px] text-snow">{site.brand.name}</p>
            <p className="text-xs text-dim">{site.footer.note}</p>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-fog">
          {site.nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              data-testid={`footer-nav-${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(n.id);
              }}
              className="hover:text-snow transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            data-testid="footer-instagram-link"
            href={site.links.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-snow hover:text-fog transition-colors"
          >
            Instagram ↗
          </a>
        </nav>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-white/[0.06] pt-6 text-xs text-dim">
        <span data-testid="footer-copyright">
          © {new Date().getFullYear()} {site.brand.name} · {site.brand.location} · {site.brand.timezone}
        </span>
        <button
          type="button"
          data-testid="footer-back-to-top"
          onClick={() => scrollToId("top")}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-2 text-fog hover:text-snow hover:bg-white/[0.08] transition-colors"
        >
          Top <ArrowUp className="h-3 w-3" aria-hidden />
        </button>
      </div>
    </div>
  </footer>
);
