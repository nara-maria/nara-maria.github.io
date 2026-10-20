import { site } from "@/config/site";
import { Section } from "./Section";
import { VideoPlayer } from "./VideoPlayer";

export const Stories = () => {
  const st = site.stories;
  const stories = st.slots.filter(story => story.videoUrl);
  if (!stories.length) return null;
  return (
    <Section id="stories" eyebrow={st.eyebrow} title={st.title}>
      <div className="josh-testimonials">
        {stories.map((story, index) => (
          <article key={story.id} data-testid={`stories-video-slot-${index + 1}`}>
            <VideoPlayer src={story.videoUrl} poster={story.poster || ""} label={story.name || story.role}
              duration={story.duration || ""} portrait />
            {story.summary && <p className="josh-testimonial-summary">{story.summary}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
};
