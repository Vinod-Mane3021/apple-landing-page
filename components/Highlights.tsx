"use client";

import { useHighlightsAnimation } from "@/hooks/gsap-animations/use-highlights-animation";
import { rightImg, watchImg } from "@/utils";
import Image from "next/image";
import React from "react";
import VideoCarousel from "./VideoCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Highlights = () => {
  useHighlightsAnimation();

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film{" "}
              <Image
                src={watchImg}
                width={18}
                height={18}
                alt="watch image"
                className="ml-2"
              />
            </p>
            <p className="link">
              Watch the events{" "}
              <Image
                src={rightImg}
                width={8}
                height={8}
                alt="watch image"
                className="ml-2"
              />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
