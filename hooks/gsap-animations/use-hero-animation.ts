import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useHeroAnimation = () => {
  useGSAP(() => {
    animateWithGsap("#hero", {
      opacity: 1,
      delay: 1,
    });

    animateWithGsap("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.5,
    });
  }, []);
};
