import { ArrowRight } from "lucide-react";
import { ctaHref, ctaMode } from "@/lib/cta";

type Props = {
  testId: string;
  label: string;
  variant?: "solid" | "ghost";
  size?: "md" | "lg";
};

export const CtaLink = ({ testId, label, variant = "solid", size = "md" }: Props) => {
  const tone =
    variant === "solid"
      ? "bg-snow text-night hover:bg-white shadow-pill"
      : "glass text-snow hover:bg-white/[0.08]";
  const dims = size === "lg" ? "pl-7 pr-2 py-2 text-[15px]" : "pl-5 pr-1.5 py-1.5 text-sm";
  const box =
    variant === "solid" ? "bg-night/10 text-night" : "bg-white/10 text-snow";
  return (
    <a
      data-testid={testId}
      data-cta-mode={ctaMode()}
      href={ctaHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-4 rounded-full font-medium tracking-[-0.01em] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 ${tone} ${dims}`}
    >
      {label}
      <span
        className={`inline-flex items-center justify-center rounded-full ${box} ${size === "lg" ? "h-10 w-10" : "h-8 w-8"}`}
      >
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </a>
  );
};
