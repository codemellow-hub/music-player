import React from "react";
import { IoPlay as Play } from "react-icons/io5";
import { FaPause as Pause } from "react-icons/fa";
import { FaStop as Stop } from "react-icons/fa";
import { IoPlaySkipBackSharp as Prev } from "react-icons/io5";
import { IoPlaySkipForward as Next } from "react-icons/io5";

function Controls({ isPlaying, setIsPlaying, nextSong, prevSong }) {
  return (
    <div className="gyT hyT">
      <div className="gyO">
        <Play onClick={() => setIsPlaying(true)} className="gyOI" />
      </div>
      <div className="gyO">
        <Pause onClick={() => setIsPlaying(false)} className="gyOI" />
      </div>
      <div className="gyO">
        <Stop className="gyOI" />
      </div>
      <div className="gyO">
        <Prev onClick={prevSong} className="gyOI" />
      </div>
      <div className="gyO">
        <Next onClick={nextSong} className="gyOI" />
      </div>
    </div>
  );
}

export default Controls;
