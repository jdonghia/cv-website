"use client";

import "./animation.css";

import { useEffect, useRef } from "react";

export function Sphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const slices = 20;
  const angle = 360 / slices;

  useEffect(() => {
    if (sphereRef.current) {
      for (let i = 0; i < slices; i++) {
        const slice = document.createElement("div");
        slice.style.transform = `rotateY(${angle * i}deg)`;
        sphereRef.current.appendChild(slice);
      }
    }
  }, []);

  return (
    <div className="sphere__wrapper">
      <div ref={sphereRef} className="sphere">
        <div className="sphere__equator"></div>
        <div className="sphere__tropic sphere__cancer"></div>
        <div className="sphere__tropic sphere__capricorn"></div>
      </div>
    </div>
  );
}
