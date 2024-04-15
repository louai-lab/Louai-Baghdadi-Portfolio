import React from "react";
import SkillsStyles from "./Skills.module.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../Utils/Experience";

function Skills() {
  return (
    <div className={SkillsStyles.ContainerSkills}>
      <div className={SkillsStyles.title}>
        <p className={SkillsStyles.gold}>
          My Skills<span className={SkillsStyles.line}></span>
        </p>
        <h1>
          My Skills <span className={SkillsStyles.green}>Overview</span>
        </h1>
      </div>
      <div className={SkillsStyles.skillsIcons}>
        <Canvas shadows>
          {" "}
          <Experience />
        </Canvas>
        
      </div>
    </div>
  );
}

export default Skills;
