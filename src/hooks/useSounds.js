import { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [audio] = useState(new Audio(url));

  useEffect(() => {
    audio.volume = options.volume || 1;
  }, [audio, options.volume]);

  const play = () => {
    // Reset the track to the start so it can play for every move
    audio.currentTime = 0;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Playback prevented:", error);
      });
    }
  };

  return play;
};

export default useSound;
