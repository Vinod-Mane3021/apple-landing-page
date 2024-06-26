import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useHighlightsAnimation = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25
    });
  }, []);
};
