import { Section } from "./Section";
import { VideoPlayer } from "./VideoPlayer";

export const FromJosh = () => (
  <Section id="from-josh" eyebrow="From Josh" title="In his own words.">
    <div className="josh-supporting-videos">
      <VideoPlayer src="./media/josh-video-1.mp4" poster="./media/josh-video-1.jpg" label="Watch Josh · 01" duration="1:20" portrait />
      <VideoPlayer src="./media/josh-video-2.mp4" poster="./media/josh-video-2.jpg" label="Watch Josh · 02" duration="0:23" portrait />
    </div>
  </Section>
);
