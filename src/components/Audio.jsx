import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import audioFile from "../assets/audio1.mp3";

const Audio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Tracks whether audio is playing

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true; // Start the audio muted for autoplay
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented. Will require user interaction.");
      });
    }
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio
      } else {
        audioRef.current.muted = false; // Unmute and play the audio
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={audioFile} loop />

      <div
        className="fixed bottom-8 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 p-3 sm:p-4 lg:p-3 rounded-full shadow-lg flex justify-center items-center"
        style={{
          background:
            "linear-gradient(145deg, #2c2b2b, #C0C0C0, #3f3f3f, #050505)", // Shiny silver gradient
          boxShadow:
            "0px 4px 6px rgba(0, 0, 0, 0.3), inset 0px 1px 3px rgba(255, 255, 255, 0.6)", // Adds a metallic look
        }}
      >
        <button
          onClick={handlePlayPause}
          className="text-black text-2xl sm:text-3xl lg:text-2xl"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default Audio;
