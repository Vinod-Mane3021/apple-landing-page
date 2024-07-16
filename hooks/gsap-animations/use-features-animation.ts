import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MutableRefObject } from "react";

export const useFeatureAnimation = (onComplete: () => void) => {
  useGSAP(() => {
    animateWithGsap(
      "#exploreVideo",
      {
        onComplete: onComplete,
      },
      {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      }
    );

    animateWithGsap("#feature_title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
    });
  }, []);
};
