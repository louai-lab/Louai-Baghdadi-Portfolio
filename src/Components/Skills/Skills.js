import React from "react";
import SkillsStyles from "./Skills.module.css";
// import { ThreeJs } from "../../Utils/ThreeJs";
import BallCanvas from "../../Utils/ThreeJs";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";

import { useSkillsStore } from "../../Zustand/Store";

function Skills() {
  const { darkMode } = useDarkMode();
  const { loading, skills } = useSkillsStore();

  return loading ? (
    <div>Loading ...</div>
  ) : (
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
          <div className={SkillsStyles.singleCanvas} key={skill?._id}>
            <BallCanvas
              icon={`${process.env.REACT_APP_IMAGE_PATH}/${skill?.icon}`}
              name={skill?.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
