import React from "react";
import SkillsStyles from "./Skills.module.css";
import { Canvas } from "@react-three/fiber";
import { ThreeJs } from "../../Utils/ThreeJs";
// import reactIcon from "../Assets/devicon--react.svg";
// import nodeIcon from "../Assets/louai.jpg";
import nodeIcon from "../../Assets/louai.jpg";
import reactIcon from "../../Assets/devicon--react.svg";

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
        {skills.map((skill, index) => (
          <Canvas shadows style={{ height: "400px", width:"400px" }}>
            <ThreeJs key={index} icon={skill.icon} name={skill.name} />
          </Canvas>
        ))}
      </div>
    </div>
  );
}

export default Skills;
