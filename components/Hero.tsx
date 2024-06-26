"use client";

import { useHeroAnimation } from "@/hooks/gsap-animations/use-hero-animation";
import { useResizeEventListener } from "@/hooks/use-resize-event-listener";
import { heroVideo, smallHeroVideo } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const src = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
      setVideoSrc(src);
    }
  }, []);

  const handleVideoSrcSet = () => {
    console.log("handleVideoSrcSet ");
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useResizeEventListener(handleVideoSrcSet)

  useHeroAnimation()

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-col flex-center">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 ">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <Link href="#highlights" className="btn">
          Buy
        </Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
