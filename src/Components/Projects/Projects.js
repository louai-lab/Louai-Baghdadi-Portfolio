import React, { useState } from "react";
import ProjectsStyles from "./Projects.module.css";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import preview from "../../Assets/ph--link.svg";
import { useProjectsStore } from "../../Zustand/Store";
import SingleProject from "../../Layout/SingleProject/SingleProject";

function Projects() {
  const { darkMode } = useDarkMode();
  const { projects } = useProjectsStore();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // console.log(projects);

  return (
    <div className={ProjectsStyles.ContainerProjects}>
      <div>
        <p className={ProjectsStyles.gold}>
          <Reveal>
            <h1>My Projects</h1>
          </Reveal>
          <span
            className={
              darkMode === false ? ProjectsStyles.lineDark : ProjectsStyles.line
            }
          ></span>
        </p>
        <Reveal>
          <h1>
            My Projects <span className={ProjectsStyles.green}>Showcase</span>
          </h1>
        </Reveal>
      </div>

      <div className={ProjectsStyles.projectsCards}>
        {projects.map((project) => (
          <SingleProject key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
