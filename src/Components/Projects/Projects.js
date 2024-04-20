import React, { useState } from "react";
import ProjectsStyles from "./Projects.module.css";
import ProjectImage from "../../Assets/reactIcon.png";
import linkIcon from "../../Assets/ph--link.svg";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";

const ProjectsData = [
  {
    title: "Smart Home Automation System",
    img: ProjectImage,
    description:
      "This project aims to create a smart home automation system using IoT devices and sensors. The system allows users to remotely control various home appliances such as lights e a smart home automation system using IoT devices and sensors. Th e a smart home automation system using IoT devices and sensors. Th",
    back: "back Side test",
  },
  {
    title: "E-commerce Website Development Development",
    img: ProjectImage,
    description:
      "This project involves the development of a full-fledged e-commerce website from scratch. It includes features such as user authentication, product browsing, shopping cart management",
    back: "back Side test",
  },
  {
    title: "Data Analysis Dashboard",
    img: ProjectImage,
    description:
      "This project focuses on creating a data analysis dashboard for visualizing and interpreting large datasets. The dashboard provides interactive charts, graphs, and metrics to help",
    back: "back Side",
  },
];

function Projects() {
  const { darkMode } = useDarkMode();
  const [expandedIndex, setExpandedIndex] = useState(null);

  // const toggleDescription = (index) => {
  //   setExpandedIndex(index === expandedIndex ? null : index);
  // };

  return (
    <div className={ProjectsStyles.ContainerProjects}>
      <div className={ProjectsStyles.title}>
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
      <div className={ProjectsStyles.cards}>
        {ProjectsData.map((project, index) => {
          const isExpanded = index === expandedIndex;
          return (
            <div className={ProjectsStyles.card}>
              <div className={ProjectsStyles.try}>
                <img
                  src={project.img}
                  alt="d"
                  className={ProjectsStyles.imageProject}
                />
                {/* <a href="#x" className={ProjectsStyles.livePreview}>
                  <img src={linkIcon} alt="link" /> Live Preview
                </a> */}
                <p className={ProjectsStyles.livePreview}>
                  <Reveal>{project.title}</Reveal>
                </p>
              </div>
              <div className={ProjectsStyles.cardContent}>
                <p className={ProjectsStyles.cardTitle}>{project.title}</p>
                <p className={ProjectsStyles.cardDescription}>
                  {project.description}
                </p>
              </div>
            </div>

            // <div key={index} className={ProjectsStyles.singleProject}>
            //   <p className={ProjectsStyles.singleTitle}>
            //     <Reveal>{project.title}</Reveal>
            //   </p>
            //   <p className={ProjectsStyles.description}>
            //     <Reveal>
            //       {" "}
            //       {project.description.length <= 150 || isExpanded
            //         ? project.description
            //         : project.description.substring(0, 150) + "..."}
            //       {project.description.length > 150 && (
            //         <button
            //           onClick={() => toggleDescription(index)}
            //           className={ProjectsStyles.showMoreLessButton}
            //         >
            //           {isExpanded ? "Show Less" : "Show More"}
            //         </button>
            //       )}
            //     </Reveal>
            //   </p>

            //   <a href="#x" className={ProjectsStyles.livePreview}>
            //     <img src={linkIcon} alt="link" /> Live Preview
            //   </a>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
