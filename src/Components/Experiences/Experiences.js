import React from "react";
import ExperiencesStyles from "./Experiences.module.css";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import { useExperiencesStore } from "../../Zustand/Store"

function Experiences() {
  const { darkMode } = useDarkMode();
  const { experiences } = useExperiencesStore();

  const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
  };

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
      <div className={ExperiencesStyles.certificate}>
        {experiences.map((experience, index) => (
          <div key={experience._id} className={ExperiencesStyles.content}>
            <div className={ExperiencesStyles.certificateDate}>
              <h3 className={ExperiencesStyles.certificateTitle}>
                <Reveal>{experience?.certificate}</Reveal>
              </h3>
              <p className={ExperiencesStyles.date}>
                <Reveal>{formatMonthYear(experience.startDate)}</Reveal>
              </p>
              <p className={ExperiencesStyles.date}>
                <Reveal>{formatMonthYear(experience?.endDate)}</Reveal>
              </p>
            </div>

            <div className={ExperiencesStyles.bullet}></div>
            <div className={ExperiencesStyles.certificateDescription}>
              <h3 className={ExperiencesStyles.contentTitle}>
                <Reveal>{experience?.title}</Reveal>
              </h3>
              <p className={ExperiencesStyles.contentDescription}>
                <Reveal>{experience?.description}</Reveal>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
