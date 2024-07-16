import gsap from "gsap";
import { MutableRefObject } from "react";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
    target: string,
    animationProps: gsap.TweenVars,
    scrollTriggerProps?: ScrollTrigger.Vars,
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: scrollTriggerProps?.toggleActions || "restart reverse restart reverse",
      start: scrollTriggerProps?.start || "top 85%",
      ...scrollTriggerProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  rotation: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: object
) => {
  timeline.to(groupRef.current.rotation, {
    y: rotation,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
