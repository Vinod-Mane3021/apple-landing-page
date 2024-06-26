import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useHeroAnimation = () => {
  useGSAP(() => {

    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.5,
    })

    
  }, []);
};
