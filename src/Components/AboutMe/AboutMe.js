import React from "react";
import AboutMeStyle from "./AboutMe.module.css";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import MyCart from "../../Layout/MyCart/MyCart";
import { useUserStore } from "../../Zustand/Store";
import { useProjectsStore } from "../../Zustand/Store";

function AboutMe() {
  const { darkMode } = useDarkMode();
  const { user } = useUserStore();
  const { projects } = useProjectsStore();

  // console.log(user);

  return (
    <div className={AboutMeStyle.Container}>
      <MyCart />
      <section className={AboutMeStyle.PersonalElevatorPitch}>
        <div className={AboutMeStyle.elevatorPitchSection}>
          <p className={AboutMeStyle.gold}>
            <Reveal>
              <h1>About Me</h1>
            </Reveal>
            <span
              className={
                darkMode === false ? AboutMeStyle.lineDark : AboutMeStyle.line
              }
            ></span>
          </p>
          <Reveal>
            <h1>
              I am{" "}
              <span className={AboutMeStyle.green}>
                {user?.firstName} {user?.lastName}
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className={AboutMeStyle.elevatorPitchPara}>
              {user?.elevatorPitch}
            </p>
          </Reveal>
        </div>
        <div className={AboutMeStyle.cards}>
          <div className={AboutMeStyle.expCard}>
            <p className={AboutMeStyle.number}>{user?.startDate}+</p>
            <p className={AboutMeStyle.green}>Years of Experiences</p>
          </div>
          <div className={AboutMeStyle.expCard}>
            <p className={AboutMeStyle.number}>{projects.length}+</p>

            <p className={AboutMeStyle.green}>Projects Completed</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
