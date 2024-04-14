import React from "react";
import SkillsStyles from "./Skills.module.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../Utils/Experience";

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <Canvas>
        {" "}
        <Experience />
      </Canvas>
    </div>
  );
}

export default Skills;
