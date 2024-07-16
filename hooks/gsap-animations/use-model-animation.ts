import { animateWithGsap, animateWithGsapTimeline } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MutableRefObject, useEffect } from "react";
import * as THREE from "three";

export const useModelAnimation = (size: "small" | "large") => {
  useGSAP(() => {
    animateWithGsap(
      "#heading",
      {
        y: 0,
        opacity: 1,
      }
    )
  }, []);
};

export const useModelTimelineAnimation = (
  size: "small" | "large",
  smallGroupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  largeGroupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  smallRotation: number,
  largeRotation: number
) => {
  const timeline = gsap.timeline();
  useEffect(() => {
    if (size == "large") {
      animateWithGsapTimeline(
        timeline,
        smallGroupRef,
        smallRotation,
        "#view1",
        "#view2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        }
      );
    }
    if (size == "small") {
      animateWithGsapTimeline(
        timeline,
        largeGroupRef,
        largeRotation,
        "#view2",
        "#view1",
        {
          transform: "translateX(0%)",
          duration: 2,
        }
      );
    }
  }, [size]);
};
