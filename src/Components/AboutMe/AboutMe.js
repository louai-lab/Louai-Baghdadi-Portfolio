import React from "react";
import AboutMeStyle from "./AboutMe.module.css";
import MyData from "../../Data/MyData";
import github from "../../Assets/akar-icons--github-outline-fill.svg";
import linkedin from "../../Assets/et--linkedin.svg";

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
          <p>{"< " + MyData.name + " />"}</p>
          <p className={AboutMeStyle.title}>{MyData.title}</p>
          <div className={AboutMeStyle.socialContainer}>
            <a href="">
              <img src={github} alt="github icon" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin icon" />
            </a>
          </div>
        </div>
        <div className={AboutMeStyle.download}>
          <p>Download CV</p>
        </div>
      </section>
      <section className={AboutMeStyle.PersonalElevatorPitch}>
        <h1>About Me ...</h1>
      </section>
    </div>
  );
}

export default AboutMe;
