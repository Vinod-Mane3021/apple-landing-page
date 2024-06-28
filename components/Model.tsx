"use client";

import { useModelAnimation, useModelTimelineAnimation } from "@/hooks/gsap-animations/use-model-animation";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "@/utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { models, sizes } from "@/constants";

const Model = () => {
  const [size, setSize] = useState<"small" | "large">("small");
  const [model, setModel] = useState(models[0]);

  // setup camera control for model view
  const smallCameraControlRef = useRef();
  const largeCameraControlRef = useRef();

  // model
  const smallGroupRef = useRef(new THREE.Group());
  const largeGroupRef = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const src = document.getElementById('root');
    setEventSource(src);
  }, []);

  // animations
  useModelAnimation(size);
  useModelTimelineAnimation(size, smallGroupRef, largeGroupRef, smallRotation, largeRotation);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        {/* Model */}
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[70vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={smallGroupRef}
              gsapType="view1"
              controlRef={smallCameraControlRef}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={largeGroupRef}
              gsapType="view2"
              controlRef={largeCameraControlRef}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full canvas-container"
              eventSource={eventSource!}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className={`w-6 h-6 rounded-full mx-2 cursor-pointer ${
                      item.id == model.id && "border border-5 border-white"
                    }`}
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map((item) => (
                  <span
                    key={item.label}
                    className="size-btn"
                    style={{
                      backgroundColor:
                        size === item.value ? "white" : "transparent",
                      color: size === item.value ? "black" : "white",
                    }}
                    onClick={() => setSize(item.value)}
                  >
                    {item.label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
