import React from "react";
import ContactStyle from "./Contact.module.css";
import { ReactComponent as MessageIcon } from "../../Assets/wpf--message-outline.svg";
import Reveal from "../../Utils/Reveal";
import { useDarkMode } from "../../Utils/DarkMode";
import { useUserStore } from "../../Zustand/Store";

function Contact() {
  const { darkMode } = useDarkMode();
  const { user } = useUserStore();
  // console.log(user);
  return (
    <div className={ContactStyle.ContactComponent}>
      <div className={ContactStyle.title}>
        <p className={ContactStyle.gold}>
          <Reveal>
            <h1>Contact</h1>
          </Reveal>
        </p>
      </div>
      <Reveal>
        <p className={ContactStyle.ContactPara}>
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a href={user?.linkedinLink} className={ContactStyle.ContactLinkedin}>
            Linkedin
          </a>{" "}
          if that is more your speed.
        </p>
      </Reveal>

      <Reveal>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            user?.email
          )}&su=Subject&body=Hello%20there`}
          className={ContactStyle.ahref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <div className={ContactStyle.messageContainer}>
            <MessageIcon
              className={
                darkMode === false
                  ? ContactStyle.messageIcon
                  : ContactStyle.messageIconDark
              }
            />
            <span
              className={
                darkMode === false ? ContactStyle.span : ContactStyle.spanDark
              }
            >
              {user?.email}
            </span>
          </div>
        </a>
      </Reveal>
    </div>
  );
}

export default Contact;
