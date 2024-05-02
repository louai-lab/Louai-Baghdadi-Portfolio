import React, { useState } from "react";
import ProjectsStyles from "./Projects.module.css";
import linkIcon from "../../Assets/ph--link.svg";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import react from "../../Assets/reactjs.png";
import { Tilt } from "react-tilt";
import abouHatem from "../../Assets/images (1).jpeg";
import githubicon from "../../Assets/akar-icons--github-outline-fill.svg";

const ProjectsData = [
  {
    title: "Smart Home Automation System",
    img: abouHatem,
    description: "This project aims to create a  ",
    back: "back Side test",
    link: "https://www.google.com/",
    languages: [
      {
        name: "MongoDB",
        color: "green",
      },
      { name: "Express.js", color: "black" },
      { name: "React", color: "cyan" },
      { name: "Node.js", color: "green" },
    ],
  },
  {
    title: "E-commerce Website Development Development",
    img: react,
    description:
      "This project involves the development of a full-fledged e-commerce website from scratch. It includes features such as user authentication, product browsing, shopping cart management",
    back: "back Side test",
    link: "https://www.google.com/",
    languages: [
      {
        name: "MongoDB",
        color: "green",
      },
      { name: "Express.js", color: "black" },
      { name: "React", color: "cyan" },
      { name: "Node.js", color: "green" },
    ],
  },
  {
    title: "Data Analysis Dashboard",
    img: react,
    description:
      "This project focuses on creating a data analysis dashboard for visualizing and interpreting large datasets. The dashboard provides interactive charts, graphs, and metrics to help",
    back: "back Side",
    link: "https://www.google.com/",
    languages: [
      {
        name: "MongoDB",
        color: "green",
      },
      { name: "Express.js", color: "black" },
      { name: "React", color: "cyan" },
      { name: "Node.js", color: "green" },
    ],
  },
];

function Projects() {
  const { darkMode } = useDarkMode();
  const [expandedIndex, setExpandedIndex] = useState(null);

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
        {ProjectsData.map((project, index) => {
          return (
            <Tilt
              options={{ max: 45, scale: 1, speed: 450 }}
              className={
                darkMode === true
                  ? ProjectsStyles.tiltContainer
                  : ProjectsStyles.tiltContainerLight
              }
            >
              <div className={ProjectsStyles.container}>
                <img
                  src={project.img}
                  alt={project.title}
                  className={ProjectsStyles.image}
                />
                <div className={ProjectsStyles.resources}>
                  <div
                    onClick={() => window.open(project.link, "_blank")}
                    className={ProjectsStyles.divClick}
                  >
                    <img
                      src={githubicon}
                      alt="github"
                      className={ProjectsStyles.githubicon}
                    />
                  </div>
                </div>
              </div>

              <div className={ProjectsStyles.infoCard}>
                <div>
                  <h3 className={ProjectsStyles.title}>
                    <Reveal>{project.title}</Reveal>
                  </h3>
                  <p className={ProjectsStyles.description}>
                    <Reveal>{project.description}</Reveal>
                  </p>
                </div>
                <div className={ProjectsStyles.languageContainer}>
                  {project.languages.map((language) => {
                    return (
                      <p
                        style={{ color: `${language.color}` }}
                        className={ProjectsStyles.languageName}
                        key={language.name}
                      >
                        <Reveal>{language.name}</Reveal>
                      </p>
                    );
                  })}
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
