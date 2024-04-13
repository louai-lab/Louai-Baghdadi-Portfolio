import React from "react";
import { BrowserRouter } from "react-router-dom";
import StyleApp from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";

function App() {
  return (
    <BrowserRouter>
      <div className={StyleApp.App}>
        <Navbar />
        <AboutMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
