import React from "react";
import SkillsStyles from "./Skills.module.css";
// import { ThreeJs } from "../../Utils/ThreeJs";
import BallCanvas from "../../Utils/ThreeJs";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import css from "../../Assets/css.png";
import figma from "../../Assets/figma.png";
import github from "../../Assets/github.png";
import html from "../../Assets/html.png";
import javascript from "../../Assets/javascript.png";
import mongodb from "../../Assets/mongodb.png";
import nodejs from "../../Assets/nodejs.png";
import react from "../../Assets/reactjs.png";
import expressjs from "../../Assets/express.png";
import threejs from "../../Assets/threejs.svg";

function Skills() {
  const { darkMode } = useDarkMode();

  const skills = [
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "FIGMA",
      icon: figma,
    },
    {
      name: "GITHUB",
      icon: github,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "JAVA SCRIPT",
      icon: javascript,
    },
    {
      name: "MONGODB",
      icon: mongodb,
    },
    {
      name: "NODEJS",
      icon: nodejs,
    },
    {
      name: "EXPRESSJS",
      icon: expressjs,
    },
    {
      name: "REACTJS",
      icon: react,
    },
    {
      name: "THREEJS",
      icon: threejs,
    },
  ];

  return (
    <div className={SkillsStyles.ContainerSkills}>
      <div className={SkillsStyles.title}>
        <p className={SkillsStyles.gold}>
          <Reveal>
            <h1>My Skills</h1>
          </Reveal>
          <span
            className={
              darkMode === false ? SkillsStyles.lineDark : SkillsStyles.line
            }
          ></span>
        </p>
        <Reveal>
          <h1>
            My Skills <span className={SkillsStyles.green}>Overview</span>
          </h1>
        </Reveal>
      </div>
      <div className={SkillsStyles.skillsIcons}>
        {skills.map((skill) => (
          <div className={SkillsStyles.singleCanvas} key={skill.name}>
            <BallCanvas icon={skill.icon} name={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
