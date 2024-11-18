import React, { useState, useRef, useEffect } from "react";
import songs from "../songs";
import Controls from "./Controls";
import { GiMusicSpell } from "react-icons/gi";
import casette from "../assets/casette.png";

function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songs[currentSongIndex].audio));

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(songs[currentSongIndex].audio);
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  return (
    <div className="music-player">
      <div className="gyT">
        <div className="gyTL">
          <h2>{songs[currentSongIndex].title}</h2>
          <h5>{songs[currentSongIndex].artist}</h5>
        </div>
        <div className="gyTR">
          <GiMusicSpell />
        </div>
      </div>

      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        nextSong={nextSong}
        prevSong={prevSong}
      />
      <div className="gyT hyT jyT">
        <img className="caS" src={casette} alt="casette" />
      </div>
    </div>
  );
}

export default MusicPlayer;
