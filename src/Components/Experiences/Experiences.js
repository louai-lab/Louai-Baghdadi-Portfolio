import React from "react";
import ExperiencesStyles from "./Experiences.module.css";

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
    description:
      "Description of Certificate 2 goes here... ",
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
          My Experiences<span className={ExperiencesStyles.line}></span>
        </p>
        <h1>
          Work <span className={ExperiencesStyles.green}>Experiences</span>
        </h1>
      </div>
      <div className={ExperiencesStyles.certificate}>
        {certificates.map((certificate, index) => (
          <div key={index} className={ExperiencesStyles.content}>
            <div className={ExperiencesStyles.certificateDate}>
              <h3 className={ExperiencesStyles.certificateTitle}>{certificate.certificate}</h3>
              <p className={ExperiencesStyles.date}>{certificate.startDate}</p>
              <p className={ExperiencesStyles.date}>{certificate.endDate}</p>
            </div>

            <div className={ExperiencesStyles.bullet}></div>
            <div className={ExperiencesStyles.certificateDescription}>
              <h3 className={ExperiencesStyles.contentTitle}>
                {certificate.title}
              </h3>
              <p className={ExperiencesStyles.contentDescription}>
                {certificate.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
