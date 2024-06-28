"use client";

import { highlightsSlides } from "@/constants";
import { highlightFirstVideo } from "@/utils";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";

const TestComp = () => {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

  const handleLoadedMetadata = (event: SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleLoadedMetadata called");
    const video = event.currentTarget;
    console.log("Video Duration:", video.duration);
    // Perform other actions with metadata here
  };

  useEffect(() => {
    // Log videoRef.current to ensure the ref is correctly initialized
    console.log("Video Ref:", videoRef.current);
  }, []);

  return (
    <div>
      {highlightsSlides.map((list, i) => (
        <video
          key={i}
          ref={(el) => {
            videoRef.current[i] = el;
          }}
          id="video"
          playsInline={true}
          preload="auto"
          muted
          autoPlay
          width="600"
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src={list.video} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default TestComp;
