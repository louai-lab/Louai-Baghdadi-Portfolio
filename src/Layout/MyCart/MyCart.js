import React from "react";
import github from "../../Assets/akar-icons--github-outline-fill.svg";
import linkedin from "../../Assets/et--linkedin.svg";
import downloadIcon from "../../Assets/material-symbols--download (1).svg";
import AboutMeStyle from "./MyCart.module.css";
// import MyData from "../MyData";
import staticData from "../../Data/MyData";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";

function MyCart() {
  const { darkMode } = useDarkMode();

  return (
    <section className={AboutMeStyle.myCard}>
      <div className={AboutMeStyle.personalInfo}>
        <img src={staticData.image} alt="louai" className={AboutMeStyle.myPhoto} />
        <div className={AboutMeStyle.jobTitle}>
          <Reveal>
            {" "}
            <p
              className={
                darkMode === false
                  ? AboutMeStyle.myName
                  : AboutMeStyle.myNameDark
              }
            >
              {"< " + staticData.name + " />"}
            </p>
          </Reveal>
          <Reveal>
            {" "}
            <p className={AboutMeStyle.title}>{staticData.title}</p>
          </Reveal>
          <Reveal>
            <div className={AboutMeStyle.socialContainer}>
              <a href={staticData.links.github} className={AboutMeStyle.githubLink}>
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
          </Reveal>
        </div>
      </div>
      <button className={AboutMeStyle.download}>
        <p className={AboutMeStyle.downloadTitle}>Download CV</p>
        <img
          src={downloadIcon}
          alt="download CV"
          className={AboutMeStyle.downloadIcon}
        />
      </button>
    </section>
  );
}

export default MyCart;
