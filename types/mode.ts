import { MutableRefObject } from "react";
import * as THREE from "three";

export interface ModelProps {
    id: number;
    title: string;
    color: string[];
    img: string;
}

export interface ModelViewProps {
    index: number
    groupRef: MutableRefObject<any>
    gsapType: "view1" | "view2";
    controlRef: MutableRefObject<any>
    setRotationState: (rotation: number) => void;
    item: ModelProps;
    size: "small" | "large"
}

export interface ModelSizesProps {
    label: string;
    value: "small" | "large"
}