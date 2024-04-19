import React from "react";
import ExperiencesStyles from "./Experiences.module.css";
import Reveal from "../../Utils/Reveal";

const certificates = [
  {
    certificate: "LT",
    title: "Certificate 1",
    description:
      "Description of Certificate 1 goes here... Description of Certificate 3 goes here...Description of Certificate 3 goes here...Description of Certificate 3 goes here...Description of Certificate 3 goes here",
    startDate: "January, 2020",
    endDate: "February, 2020",
  },
  {
    certificate: "LT",
    title: "Certificate 2",
    description: "Description of Certificate 2 goes here... ",
    startDate: "March, 2020",
    endDate: "April, 2020",
  },
  {
    certificate: "LT",
    title: "Certificate 3",
    description:
      "Description of Certificate 3 goes here...Description of Certificate 3 goes here...Description of Certificate 3 goes here...Description of Certificate 3 goes here...Description of Certificate 3 goes here...",
    startDate: "May, 2020",
    endDate: "June, 2020",
  },
];

function Experiences() {
  return (
    <div className={ExperiencesStyles.ContainerExperiences}>
      <div className={ExperiencesStyles.title}>
        <p className={ExperiencesStyles.gold}>
          <Reveal>
            <h1>My Experinces</h1>
          </Reveal>
          <span className={ExperiencesStyles.line}></span>
        </p>
        <Reveal>
          <h1>
            Work <span className={ExperiencesStyles.green}>Experiences</span>
          </h1>
        </Reveal>
      </div>
      <div className={ExperiencesStyles.certificate}>
        {certificates.map((certificate, index) => (
          <div key={index} className={ExperiencesStyles.content}>
            <div className={ExperiencesStyles.certificateDate}>
              <h3 className={ExperiencesStyles.certificateTitle}>
                <Reveal>{certificate.certificate}</Reveal>
              </h3>
              <p className={ExperiencesStyles.date}>
                <Reveal>{certificate.startDate}</Reveal>
              </p>
              <p className={ExperiencesStyles.date}>
                <Reveal>{certificate.endDate}</Reveal>
              </p>
            </div>

            <div className={ExperiencesStyles.bullet}></div>
            <div className={ExperiencesStyles.certificateDescription}>
              <h3 className={ExperiencesStyles.contentTitle}>
                <Reveal>{certificate.title}</Reveal>
              </h3>
              <p className={ExperiencesStyles.contentDescription}>
                <Reveal>{certificate.description}</Reveal>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
