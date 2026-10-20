export const Beams = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[64%] w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
    <div className="absolute left-1/2 top-0 h-[64%] w-[140px] -translate-x-1/2 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent blur-2xl" />
    <svg
      className="absolute left-1/2 top-[-6%] h-[115%] w-[170vw] max-w-none -translate-x-1/2 sm:w-[130vw] lg:w-[1800px]"
      viewBox="0 0 1800 1100"
      fill="none"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <linearGradient id="arc" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="floor" cx="0.5" cy="1" r="0.6">
          <stop offset="0" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="900" cy="420" rx="880" ry="520" stroke="url(#arc)" strokeWidth="1" />
      <ellipse cx="900" cy="440" rx="660" ry="400" stroke="url(#arc)" strokeWidth="1" opacity=".7" />
      <ellipse cx="900" cy="470" rx="440" ry="280" stroke="url(#arc)" strokeWidth="1" opacity=".5" />
      <path d="M0 980 Q900 620 1800 980" stroke="url(#arc)" strokeWidth="1.2" />
      <path d="M-100 1060 Q900 700 1900 1060" stroke="url(#arc)" strokeWidth="1" opacity=".6" />
      <rect x="0" y="600" width="1800" height="500" fill="url(#floor)" />
    </svg>
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
  </div>
);
