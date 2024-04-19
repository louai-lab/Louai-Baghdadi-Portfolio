import * as THREE from "three";
import React, { useRef } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
// import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
// import { FontLoader } from 'three/addons/loaders/FontLoader.js';



export const ThreeJs = ({ icon }) => {
  // const loader = new FontLoader()

  // loader.load("fonts/helvetiker_regular.typeface.json", function (font) {
  //   const geometry = new TextGeometry("Hello three.js!", {
  //     font: font,
  //     size: 80,
  //     depth: 5,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 10,
  //     bevelSize: 8,
  //     bevelOffset: 0,
  //     bevelSegments: 5,
  //   });
  // });

  const orbitControlsRef = useRef();
  const scene = new THREE.Scene();

  const texture = useTexture(icon);

  const geometry = new THREE.CircleGeometry(2, 32);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });

  const circle = new THREE.Mesh(geometry, material);
  circle.castShadow = true;

  scene.add(circle);

  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <primitive object={circle} />
    </>
  );
};
