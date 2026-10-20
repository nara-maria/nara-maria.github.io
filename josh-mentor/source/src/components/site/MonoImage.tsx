import { site } from "@/config/site";

type Props = {
  src: string;
  alt: string;
  testId: string;
  label: string;
  className?: string;
  position?: string;
};

export const MonoImage = ({ src, alt, testId, label, className = "", position = "50% 30%" }: Props) => {
  const { useColorImages, showDraftPlaceholders } = site.flags;
  if (!src) {
    return (
      <div
        data-testid={`${testId}-placeholder`}
        className={`hatch relative h-full w-full ${className}`}
        role="img"
        aria-label={`${label} — image pending`}
      >
        <span className="absolute bottom-4 left-4 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
          {label} — pending
        </span>
      </div>
    );
  }
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <img
        data-testid={testId}
        src={src}
        alt={alt}
        loading="lazy"
        style={{ objectPosition: position }}
        className={`h-full w-full object-cover ${useColorImages ? "" : "mono-img"}`}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
      {showDraftPlaceholders && !src.startsWith("./media/") && (
        <span
          data-testid={`${testId}-draft-tag`}
          className="absolute bottom-4 left-4 rounded-full glass-strong px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog"
        >
          Draft stand-in
        </span>
      )}
    </div>
  );
};
