"use client";

import React, { HTMLAttributes } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps extends HTMLAttributes<HTMLDivElement> {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, ...props }) => {
  const playAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div {...props}>
      {audioUrl ? (
        <button
          onClick={playAudio}
          className="bg-blue-500 grid place-items-center rounded-full w-8 h-8 focus:outline-none"
        >
          <Volume2 className="w-6 h-6 text-black" />
        </button>
      ) : (
        <abbr title="Audio Not Available">
          <div className="bg-blue-500 grid place-items-center rounded-full w-8 h-8">
            <VolumeX className="w-6 h-6 text-black" />
          </div>
        </abbr>
      )}
    </div>
  );
};

export default AudioPlayer;
