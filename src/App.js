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
import { Helmet } from "react-helmet-async";
import HelmetProvider from "react-helmet-async";
import FavIcon from "./Assets/LOUAI (1).png";

function App() {
  const { darkMode } = useDarkMode();

  const { loading, user, getUser } = useUserStore();
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
      <Helmet>
        <link rel="shortcut icon" href={FavIcon} type="image/x-icon" />
        <title>Louai Baghdadi Portfolio</title>
        <meta
          name="description"
          content="Welcome to Louai Baghdadi's portfolio website. Explore my skills and projects as a Full Stack Web Developer, specializing in React, MongoDB, Express, Node.js, Three.js, and Framer Motion. Connect with me on Instagram, Facebook, and LinkedIn."
        />
        <meta
          name="keywords"
          content="Louai Baghdadi, portfolio, Full Stack Web Developer, React, MongoDB, Express, Node.js, Three.js, Framer Motion, web development, projects, skills, contact, Instagram, Facebook, LinkedIn"
        />
      </Helmet>
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
