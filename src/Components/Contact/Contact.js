import React from "react";
import ContactStyle from "./Contact.module.css";
import { ReactComponent as MessageIcon } from "../../Assets/wpf--message-outline.svg";
import Reveal from "../../Utils/Reveal";
import MyData from "../../Data/MyData";

function Contact() {
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
          <a href="#linkedin" className={ContactStyle.ContactLinkedin}>
            Linkedin
          </a>{" "}
          if that is more your speed.
        </p>
      </Reveal>

      <Reveal>
        <a href={MyData.links.gmail} className={ContactStyle.ahref}>
          <div className={ContactStyle.messageContainer}>
            <MessageIcon className={ContactStyle.messageIcon} />
            <span className={ContactStyle.span}>{MyData.links.gmail}</span>
          </div>
        </a>
      </Reveal>
    </div>
  );
}

export default Contact;
