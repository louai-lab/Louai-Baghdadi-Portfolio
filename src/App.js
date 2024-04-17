import React from "react";
import { BrowserRouter } from "react-router-dom";
import StyleApp from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Experiences from "./Components/Experiences/Experiences.js";

function App() {
  return (
    <BrowserRouter>
      <div className={StyleApp.App}>
        <Navbar />
        <div className={StyleApp.Components}>
          <AboutMe />
          <Skills />
          <Projects />
          <Experiences />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
