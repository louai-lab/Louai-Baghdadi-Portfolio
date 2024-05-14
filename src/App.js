import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import StyleApp from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Experiences from "./Components/Experiences/Experiences.js";
import Contact from "./Components/Contact/Contact.js";
import { useDarkMode } from "./Utils/DarkMode.js";
import { useUserStore } from "./Zustand/Store.js";
import { useSkillsStore } from "./Zustand/Store.js";
import { useProjectsStore } from "./Zustand/Store.js";
import { useExperiencesStore } from "./Zustand/Store.js";
import Loading from "./Components/Loading/Loading.js";

function App() {
  const { darkMode } = useDarkMode();

  const { loading, getUser } = useUserStore();
  const { getSkills } = useSkillsStore();
  const { getProjects } = useProjectsStore();
  const { getExperiences } = useExperiencesStore();

  // console.log(user);
  // console.log(skills);
  // console.log(projects);
  // console.log(experiences);

  useEffect(() => {
    getUser();
    getSkills();
    getProjects();
    getExperiences();
  }, [getUser, getSkills, getProjects, getExperiences]);
  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <div className={darkMode === false ? StyleApp.App : StyleApp.AppDark}>
        <Navbar />

        <div className={StyleApp.Components}>
          <section id="aboutMe">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experiences">
            <Experiences />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
