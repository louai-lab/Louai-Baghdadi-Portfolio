import React, { useRef } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import reactIcon from "../Assets/devicon--react.svg";
import nodeIcon from "../Assets/louai.jpg";
import * as THREE from "three";

const skills = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Nodejs",
    icon: nodeIcon,
  },
];

export const Experience = () => {
  const orbitControlsRef = useRef();
  const scene = new THREE.Scene();

  const texture1 = useTexture(reactIcon);
  const texture2 = useTexture(nodeIcon);

  const circles = skills.map((skill, index) => {
    const texture = index === 0 ? texture1 : texture2;

    const geometry = new THREE.CircleGeometry(2, 32);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });

    const circle = new THREE.Mesh(geometry, material);
    circle.castShadow = true;

    circle.position.set(index * 5, 0, 0);

    scene.add(circle);

    return <primitive key={index} object={circle} />;
  });

  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      {circles}
    </>
  );
};
