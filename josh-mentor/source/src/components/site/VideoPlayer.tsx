import { useState } from "react";

type Props = { src: string; poster: string; label: string; duration: string; portrait?: boolean };
export const VideoPlayer = ({ src, poster, label, duration, portrait = false }: Props) => {
  const [started, setStarted] = useState(false);
  return (
    <figure className={`josh-video-card ${portrait ? "josh-video-portrait" : ""}`}>
      <div className="josh-video-screen">
        {started ? (
          <video src={src} poster={poster} controls playsInline preload="none" autoPlay aria-label={label}
            onPlay={event => {
              document.querySelectorAll("video").forEach(video => {
                if (video !== event.currentTarget) video.pause();
              });
            }} />
        ) : (
          <button className="josh-video-launch" onClick={() => setStarted(true)} aria-label={`Play ${label}, ${duration}`}>
            <img src={poster} alt="" loading="lazy" />
            <span className="josh-play-icon" aria-hidden="true">▶</span>
            <span className="josh-video-prompt">Play video · {duration}</span>
          </button>
        )}
      </div>
      <figcaption><span>{label}</span><span>{duration}</span></figcaption>
    </figure>
  );
};
