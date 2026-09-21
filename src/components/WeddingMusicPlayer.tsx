import { useEffect, useRef, useState } from "react";
import "../styles/music-player.css";

const AUDIO_SRC =
  import.meta.env.BASE_URL +
  "assets/matrimonios/antonio-nicole/mi-bendicion.mp3";

export default function WeddingMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.38;

    const syncPlay = () => setPlaying(true);
    const syncPause = () => setPlaying(false);
    const unavailable = () => setAvailable(false);

    audio.addEventListener("play", syncPlay);
    audio.addEventListener("pause", syncPause);
    audio.addEventListener("error", unavailable);

    const tryStart = async () => {
      if (!audio.paused || audio.error) return;

      try {
        await audio.play();
        setShowHint(false);
        document.removeEventListener("pointerdown", tryStart);
        document.removeEventListener("keydown", tryStart);
      } catch {
        // Browsers can still refuse autoplay. The visible player remains available.
      }
    };

    // Browsers block sound before a user interaction. The first tap/click/key
    // on the invitation is used to start the couple's song when allowed.
    document.addEventListener("pointerdown", tryStart, { once: true });
    document.addEventListener("keydown", tryStart, { once: true });

    return () => {
      audio.removeEventListener("play", syncPlay);
      audio.removeEventListener("pause", syncPause);
      audio.removeEventListener("error", unavailable);
      document.removeEventListener("pointerdown", tryStart);
      document.removeEventListener("keydown", tryStart);
    };
  }, []);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    setShowHint(false);

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setPlaying(false);
      }
      return;
    }

    audio.pause();
  }

  if (!available) return null;

  return (
    <aside
      className={"music-player" + (playing ? " music-player--playing" : "")}
      aria-label="Música de la invitación"
    >
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="metadata"
        loop
        playsInline
      />

      <button
        className="music-player__button"
        type="button"
        onClick={toggleMusic}
        aria-label={playing ? "Pausar Mi Bendición" : "Reproducir Mi Bendición"}
        title={playing ? "Pausar música" : "Reproducir música"}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="7" y="6" width="3.5" height="12" rx="1" />
            <rect x="13.5" y="6" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 7.2v9.6a1 1 0 0 0 1.55.83l7.2-4.8a1 1 0 0 0 0-1.66l-7.2-4.8A1 1 0 0 0 9 7.2Z" />
          </svg>
        )}

        <span className="music-player__pulse" aria-hidden="true" />
      </button>

      <div className="music-player__copy">
        <span>{showHint && !playing ? "Toca para escuchar" : "Nuestra canción"}</span>
        <strong>Mi Bendición</strong>
        <small>Juan Luis Guerra</small>
      </div>
    </aside>
  );
}
