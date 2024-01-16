// Video.js
import React, { useState, useRef } from 'react';
import './Video.css';
import VideoBcs from '../assets/WhatsApp Video 2024-01-13 at 20.50.00.mp4';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMuteUnmute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted={isMuted}>
        <source src={VideoBcs} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
        <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={toggleMuteUnmute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      </div>
    </div>
  );
}

export default Video;
