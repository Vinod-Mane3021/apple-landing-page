import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useModelAnimation = () => {
    useGSAP(() => {
        gsap.to("#heading", {
            y: 0, 
            opacity: 1
        })
    }, [])
}