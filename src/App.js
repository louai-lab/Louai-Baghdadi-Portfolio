import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, Routes } from "react-router-dom";
import StyleApp from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Experiences from "./Components/Experiences/Experiences.js";
import Contact from "./Components/Contact/Contact.js";
import { DarkModeProvider } from "./Utils/DarkMode.js";
import { useDarkMode } from "./Utils/DarkMode.js";

function App() {
  const { darkMode } = useDarkMode();
  return (
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
