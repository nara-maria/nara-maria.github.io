import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; testId?: string };

export const Pill = ({ children, className = "", testId }: Props) => (
  <span
    data-testid={testId}
    className={`inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-fog ${className}`}
  >
    <span className="h-1 w-1 rounded-full bg-snow/70" aria-hidden />
    {children}
  </span>
);
