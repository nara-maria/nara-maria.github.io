import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { site } from "@/config/site";
import { MonoImage } from "./MonoImage";

export const HeroCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -60]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: reduce ? 0 : y }}
      className="relative mx-auto mt-16 sm:mt-20 w-full max-w-3xl [perspective:1400px]"
      initial={reduce ? false : { opacity: 0, y: 80, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.3, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="absolute -inset-x-10 bottom-[-20%] h-[55%] rounded-[50%] bg-white/[0.12] blur-[90px]"
      />
      <motion.figure
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformStyle: "preserve-3d" }}
        className="spotlight relative aspect-[4/5] sm:aspect-[16/9] overflow-hidden rounded-[22px] sm:rounded-[28px] border border-white/15 bg-coal shadow-glow"
      >
        <MonoImage
          src={site.assets.portrait}
          alt="Josh Jones, side profile, black and white portrait"
          testId="hero-portrait-image"
          label="Portrait"
          position="50% 22%"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10"
        />
        <figcaption className="absolute right-4 top-4 sm:top-auto sm:right-6 sm:bottom-6 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
          <span className="h-1.5 w-1.5 rounded-full bg-snow" aria-hidden />
          {site.brand.name} · {site.brand.location}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
};
