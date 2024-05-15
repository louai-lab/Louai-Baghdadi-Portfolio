import Styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { useDarkMode } from "../../Utils/DarkMode";
import { useUserStore } from "../../Zustand/Store";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [collapesed, setCollapsed] = useState(false);
  const { user } = useUserStore();

  // console.log(user.cv);
  // console.log(user);

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth > 600) {
        setCollapsed(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toggleClasses = [
    // Styles.linksWrapperMobile,
    darkMode
      ? `${Styles.linksWrapperMobile} ${Styles.linksWrapperMobileConcat}`
      : Styles.linksWrapperMobile,
    collapesed ? Styles.activeNav : "",
  ].join(" ");
  const bar1 = [
    darkMode ? Styles.line1 : Styles.line1Dark,
    collapesed ? Styles.a : "",
  ].join(" ");
  const bar2 = [
    darkMode ? Styles.line2 : Styles.line2Dark,
    collapesed ? Styles.a : "",
  ].join(" ");
  const bar3 = [
    darkMode ? Styles.line3 : Styles.line3Dark,
    collapesed ? Styles.a : "",
  ].join(" ");

  const handleDownload = () => {
    const pdfUrl = `${process.env.REACT_APP_IMAGE_PATH}/${user?.cv}`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Louai-Baghdadi-CV";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={darkMode === true ? Styles.header : Styles.headerLight}>
      <nav className={Styles.navBar}>
        <a
          className={Styles.logoContainer}
          href="/"
          aria-label="Go to homepage"
        >
          <img
            src={`${process.env.REACT_APP_IMAGE_PATH}/${user?.logo}`}
            // width={200}
            // height={60}
            className={Styles.logo}
            alt="louai"
          />
        </a>

        <label className={Styles.container}>
          <input className={Styles.input} type="checkbox" />
          <div className={Styles.button} onClick={handleDarkModeToggle}></div>
        </label>

        <ul
          className={
            darkMode
              ? `${Styles.linksWrapper} ${Styles.linksWrapperConcat}`
              : Styles.linksWrapper
          }
        >
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className={Styles.buttonDownload}>
            <button style={{ all: "unset" }} onClick={handleDownload}>
              Download CV
            </button>
          </li>
        </ul>

        <ul className={toggleClasses}>
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className={Styles.buttonDownload}>
            <button style={{ all: "unset" }} onClick={handleDownload}>
              Download CV
            </button>
          </li>
        </ul>

        <div
          className={Styles.burgerButton}
          onClick={() => setCollapsed(!collapesed)}
        >
          <div className={bar1}></div>
          <div className={bar2}></div>
          <div className={bar3}></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
