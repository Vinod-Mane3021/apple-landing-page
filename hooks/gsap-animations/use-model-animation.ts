import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MutableRefObject, useEffect } from "react";
import * as THREE from "three";

export const useModelAnimation = (size: "small" | "large") => {
    useGSAP(() => {
        gsap.to("#heading", {
            y: 0,
            opacity: 1,
        });
    }, []);
};

export const useModelTimelineAnimation = (
    size: "small" | "large",
    smallGroupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
    largeGroupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
    smallRotation: number,
    largeRotation: number,
) => {
    const timeline = gsap.timeline();
    useEffect(() => {
        if (size == "large") {
            animateWithGsapTimeline(timeline, smallGroupRef, smallRotation, "#view1", "#view2", {
                transform: "translateX(-100%)",
                duration: 2
            });
        }
        if (size == "small") {
            animateWithGsapTimeline(timeline, largeGroupRef, largeRotation, "#view2", "#view1", {
                transform: "translateX(0%)",
                duration: 2
            });
        }
    }, [size]);

};

const animateWithGsapTimeline = (
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
        ease: "power2.inOut"
    })

    timeline.to(
        firstTarget, 
        {
            ...animationProps,
            ease: "power2.inOut"
        },
        "<"
    )

    timeline.to(
        secondTarget, 
        {
            ...animationProps,
            ease: "power2.inOut"
        },
        "<"
    )
 };
