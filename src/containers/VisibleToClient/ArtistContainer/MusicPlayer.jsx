import React, { useState, useRef, useEffect } from "react";
import audio from "../../assets/audio_gloster.mp3";

const MusicPlayer = ({ audioRef, setIsPlaying, isPlaying }) => {
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    togglePlay();
  }, []);

  useEffect(() => {
    console.log(isPlaying);
  }, [isPlaying]);

  return (
    <div>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
      <audio ref={audioRef} src={audio}></audio>
    </div>
  );
};

export default MusicPlayer;
