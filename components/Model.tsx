"use client";

import { useModelAnimation } from "@/hooks/gsap-animations/use-model-animation";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "@/utils";
import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import { View } from "@react-three/drei";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "Iphone 15 pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    image: yellowImg,
  });

  // setup camera control for model view
  const smallCameraControlRef = useRef();
  const largeCameraControlRef = useRef();

  // model
  const smallGroupRef = useRef(new THREE.Group());
  const largeGroupRef = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useModelAnimation();

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">Take a closer look.</h1>
        {/* Model */}
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[70vh] overflow-hidden relative">
            <ModelView 
                index={1},
                groupRef={smallGroupRef}
                gsapType="view1"
                controlRef={smallCameraControlRef}
                setRotationState={setSmallRotation}
                item={model}
                size={size}
            />

            <ModelView 
                index={2},
                groupRef={largeGroupRef}
                gsapType="view2"
                controlRef={largeCameraControlRef}
                setRotationState={setLargeRotation}
                item={model}
                size={size}
            />

            <Canvas className="">
                <View.Port/>
            </Canvas>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
