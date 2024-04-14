import { Decal, OrbitControls, useTexture } from "@react-three/drei";
import { Texture } from "three";
import reactIcon from "../Assets/devicon--react.svg";
import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

export const Experience = () => {
  const Texture = useTexture(reactIcon);

  const radius = 50;
  const widthSegments = 32;
  const heightSegments = 16;

  const geometry = new SphereGeometry(radius, widthSegments, heightSegments);
  const material = new MeshBasicMaterial({ map: Texture });
  const sphere = new Mesh(geometry, material);

  const imageWidth = 1;
  const imageHeight = 1;

  Texture.repeat.set(imageWidth, imageHeight);

  return (
    <>
      <OrbitControls />
      <primitive object={sphere} />
    </>
  );
};
