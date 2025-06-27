"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.6;
    audio.play().catch((e) => {
      console.log("Autoplay bloqueado:", e);
      setIsPlaying(false);
    });
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const buttonStyle = {
    width: "50px",
    height: "50px",
    margin: "0 auto",
    backgroundColor: "var(--dark-wine)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <audio ref={audioRef} src="/assets/music.mp3" loop />
      <button style={buttonStyle} onClick={toggleAudio}>
        {isPlaying ? (
          <Pause color="white" size={24} />
        ) : (
          <Play color="white" size={24} />
        )}
      </button>
    </div>
  );
}
