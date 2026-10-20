import { site } from "@/config/site";
import { VideoPlayer } from "./VideoPlayer";

export const HeroCard = () => (
  <div className="josh-hero-video">
    <VideoPlayer src={site.assets.offerVideoUrl} poster="./media/josh-video-3.jpg" label="A message from Josh" duration="1:45" />
  </div>
);
