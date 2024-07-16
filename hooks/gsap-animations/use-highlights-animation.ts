import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useHighlightsAnimation = () => {
  useGSAP(() => {
    animateWithGsap("#title", {
      opacity: 1,
      y: 0,
    });

    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
};
