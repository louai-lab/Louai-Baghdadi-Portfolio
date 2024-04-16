import React from "react";
import AboutMeStyle from "./AboutMe.module.css";
import MyData from "../../Data/MyData";
import github from "../../Assets/akar-icons--github-outline-fill.svg";
import linkedin from "../../Assets/et--linkedin.svg";
import downloadIcon from "../../Assets/material-symbols--download (1).svg";

function AboutMe() {
  return (
    <div className={AboutMeStyle.Container}>
      <section className={AboutMeStyle.myCard}>
        <div className={AboutMeStyle.personalInfo}>
          <img
            src={MyData.image}
            alt="louai"
            className={AboutMeStyle.myPhoto}
          />
          <div className={AboutMeStyle.jobTitle}>
            <p className={AboutMeStyle.myName}>{"< " + MyData.name + " />"}</p>
            <p className={AboutMeStyle.title}>{MyData.title}</p>
            <div className={AboutMeStyle.socialContainer}>
              <a href={MyData.links.github} className={AboutMeStyle.githubLink}>
                <img
                  src={github}
                  alt="github icon"
                  className={AboutMeStyle.githubIcon}
                />
              </a>
              <a href="#linkedin" className={AboutMeStyle.githubLink}>
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  className={AboutMeStyle.githubIcon}
                />
              </a>
            </div>
          </div>
        </div>
        <button className={AboutMeStyle.download}>
          <p>Download CV</p>
          <img
            src={downloadIcon}
            alt="download CV"
            className={AboutMeStyle.downloadIcon}
          />
        </button>
      </section>
      <section className={AboutMeStyle.PersonalElevatorPitch}>
        <div className={AboutMeStyle.elevatorPitchSection}>
          <p className={AboutMeStyle.gold}>
            About Me<span className={AboutMeStyle.line}></span>
          </p>
          {/* <h1>
            I am <span className={AboutMeStyle.green}>{MyData.name}</span>
          </h1> */}
          <h1>
            I am <span className={AboutMeStyle.green}>{MyData.name}</span>
          </h1>
          <p className={AboutMeStyle.elevatorPitchPara}>
            {MyData.elevatorPitch}
          </p>
        </div>
        <div className={AboutMeStyle.cards}>
          <div className={AboutMeStyle.expCard}>
            <p className={AboutMeStyle.number}>{MyData.yearsOfExperience}+</p>
            <p className={AboutMeStyle.green}>Years of Experiences</p>
          </div>
          <div className={AboutMeStyle.expCard}>
            <p className={AboutMeStyle.number}>{MyData.projectsCompleted}+</p>
            <p className={AboutMeStyle.green}>Projects Completed</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
