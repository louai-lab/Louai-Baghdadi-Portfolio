import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import icon from "../../Assets/wpf--message-outline.svg";
import { useDarkMode } from "../../Utils/DarkMode";

function SingleExperience({ experience }) {
  // console.log(experience);
  const { darkMode } = useDarkMode();

  const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
  };
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "var(--bg-clr-card)", color: "var(--color)" }}
      contentArrowStyle={{ borderRight: "7px solid var(--secondary-clr)" }}
      date={
        <span style={{ color: "var(--secondary-clr)" }}>
          {`${formatMonthYear(experience.startDate)} - ${formatMonthYear(
            experience.endDate
          )}`}
        </span>
      }
      iconStyle={{ background: icon }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p style={{ margin: "0px" }}>{experience.certificate}</p>
        <p>{experience.description}</p>
      </div>
    </VerticalTimelineElement>
  );
}

export default SingleExperience;
