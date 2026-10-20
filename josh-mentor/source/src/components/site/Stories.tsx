import { Play } from "lucide-react";
import { site, type Story } from "@/config/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const Slot = ({ story, index }: { story: Story; index: number }) => {
  const filled = Boolean(story.videoUrl);
  return (
    <Reveal delay={index * 0.1}>
      <article
        data-testid={`stories-video-slot-${index + 1}`}
        className="group h-full overflow-hidden rounded-[24px] glass transition-colors duration-500 hover:bg-white/[0.06]"
      >
        <div className="spotlight relative aspect-video bg-coal">
          {filled ? (
            <iframe
              data-testid={`stories-video-embed-${index + 1}`}
              src={story.videoUrl}
              title={`${story.name || story.role} — client story`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-fog">
              <span className="flex h-14 w-14 items-center justify-center rounded-full glass-strong text-snow transition-transform duration-500 group-hover:scale-110">
                <Play className="ml-0.5 h-4 w-4" aria-hidden fill="currentColor" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{site.stories.emptyTitle}</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <p className="text-xs font-medium text-dim mb-2">
            0{index + 1} · {story.role}
          </p>
          <p className="text-[15px] leading-relaxed text-fog">
            {filled && story.summary ? story.summary : site.stories.emptyText}
          </p>
        </div>
      </article>
    </Reveal>
  );
};

export const Stories = () => {
  const st = site.stories;
  const anyVideo = st.slots.some((s) => s.videoUrl);
  if (!anyVideo && !site.flags.showDraftPlaceholders) return null;
  return (
    <Section id="stories" eyebrow={st.eyebrow} title={st.title}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {st.slots.map((s, i) => (
          <Slot key={s.id} story={s} index={i} />
        ))}
      </div>
    </Section>
  );
};
