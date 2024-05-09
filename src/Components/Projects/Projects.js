import React, { useState } from "react";
import ProjectsStyles from "./Projects.module.css";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import { Tilt } from "react-tilt";
import preview from "../../Assets/ph--link.svg";
import { useProjectsStore } from "../../Zustand/Store";

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
        {projects.map((project, index) => {
          return (
            <Tilt
              key={project._id}
              options={{ max: 20, scale: 2, speed: 150 }}
              className={
                darkMode === true
                  ? ProjectsStyles.tiltContainer
                  : ProjectsStyles.tiltContainerLight
              }
            >
              <div
                className={ProjectsStyles.container}
                // onClick={() => window.open(project?.link, "_blank")}
              >
                <img
                  src={`${process.env.REACT_APP_IMAGE_PATH}/${project?.image}`}
                  alt={project?.title}
                  className={ProjectsStyles.image}
                />
              </div>

              <div className={ProjectsStyles.infoCard}>
                <div>
                  <h3 className={ProjectsStyles.title}>
                    <Reveal>{project?.title}</Reveal>
                  </h3>
                  <p className={ProjectsStyles.description}>
                    {/* <Reveal>{project?.description}</Reveal> */}
                    <Reveal>
                      {showFullDescription
                        ? project?.description
                        : `${project?.description.slice(0, 100)}...`}
                      <button
                        className={ProjectsStyles.showMoreLessButton}
                        onClick={() =>
                          setShowFullDescription(!showFullDescription)
                        }
                      >
                        {showFullDescription ? "Show less" : "Show more"}
                      </button>
                    </Reveal>
                  </p>
                </div>
                <div className={ProjectsStyles.languageContainer}>
                  {project.languages.map((language) => {
                    return (
                      <p
                        style={{ color: `${language?.color}` }}
                        className={ProjectsStyles.languageName}
                        key={language?._id}
                      >
                        <Reveal>{language?.name}</Reveal>
                      </p>
                    );
                  })}
                </div>

                <p
                  className={ProjectsStyles.livePreview}
                  onClick={() => window.open(project?.link, "_blank")}
                >
                  Live Preview <img src={preview} alt="preview" />
                </p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
