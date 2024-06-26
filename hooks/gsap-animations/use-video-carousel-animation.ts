import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useVideoCarouselAnimation = (videoId: number, isEnd: boolean, callBack: gsap.Callback | undefined) => {
    useGSAP(() => {
        // slider animation to move the video out of the screen and bring the next video in
        gsap.to("#slider", {
          transform: `translateX(${-100 * videoId}%)`,
          duration: 2,
          ease: "power2.inOut",
        });
    
        // video animation to play the video when it is in the view
        gsap.to("#video", {
          scrollTrigger: {
            trigger: "#video",
            toggleActions: "restart none none none",
          },
          onComplete: callBack
        });
      }, [isEnd, videoId]);
}