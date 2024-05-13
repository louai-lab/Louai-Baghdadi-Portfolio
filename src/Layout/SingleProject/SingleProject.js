import React, { useState } from "react";
import ProjectsStyles from "../../Components/Projects/Projects.module.css";
import { useProjectsStore } from "../../Zustand/Store";
import { useDarkMode } from "../../Utils/DarkMode";
import Reveal from "../../Utils/Reveal";
import preview from "../../Assets/ph--link.svg";

function SingleProject({ project }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { darkMode } = useDarkMode();

  return (
    <div
      key={project._id}
      className={
        darkMode === true
          ? ProjectsStyles.tiltContainer
          : ProjectsStyles.tiltContainerLight
      }
    >
      <div className={ProjectsStyles.container}>
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
            {" "}
            <Reveal>
              {showFullDescription
                ? project?.description
                : `${project?.description.slice(0, 120)}...`}
              <button
                className={ProjectsStyles.showMoreLessButton}
                onClick={() => setShowFullDescription(!showFullDescription)}
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
    </div>
  );
}

export default SingleProject;
