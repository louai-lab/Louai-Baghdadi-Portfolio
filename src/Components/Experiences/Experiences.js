import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperiencesStyles from "./Experiences.module.css";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import SingleExperience from "../../Layout/SingleExperience/SingleExperience";
import { useExperiencesStore } from "../../Zustand/Store";

function Experiences() {
  const { darkMode } = useDarkMode();
  const { experiences } = useExperiencesStore();
  return (
    <div className={ExperiencesStyles.ContainerExperiences}>
      <div className={ExperiencesStyles.title}>
        <p className={ExperiencesStyles.gold}>
          <Reveal>
            <h1>My Experiences</h1>
          </Reveal>
          <span
            className={
              darkMode === false
                ? ExperiencesStyles.lineDark
                : ExperiencesStyles.line
            }
          ></span>
        </p>
        <Reveal>
          <h1>
            Work <span className={ExperiencesStyles.green}>Experiences</span>
          </h1>
        </Reveal>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <SingleExperience key={experience._id} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experiences;
