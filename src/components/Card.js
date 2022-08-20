import { useEffect, useState } from "react";
import "./CardStyle.css";
import exerciseIcon from "../images/icon-exercise.svg";
import playIcon from "../images/icon-play.svg";
import selfCareIcon from "../images/icon-self-care.svg";
import socialIcon from "../images/icon-social.svg";
import studyIcon from "../images/icon-study.svg";
import workIcon from "../images/icon-work.svg";
import ellipsisIcon from "../images/icon-ellipsis.svg";

export default function Card({ title, period, currentStat, previousStat }) {
  const [periodText, setPeriodText] = useState();
  const [icon, setIcon] = useState();
  const [background, setBackground] = useState();
  console.log(period);

  useEffect(() => {
    if (period === "daily") {
      setPeriodText(`Yesterday - ${previousStat}`);
    } else if (period === "weekly") {
      setPeriodText(`Last Week - ${previousStat}`);
    } else {
      setPeriodText(`Last Month - ${previousStat}`);
    }
    switch (title) {
      case "Work":
        setIcon(workIcon);
        break;
      case "Play":
        setIcon(playIcon);
        break;
      case "Study":
        setIcon(studyIcon);
        break;
      case "Exercise":
        setIcon(exerciseIcon);
        break;
      case "Social":
        setIcon(socialIcon);
        break;
      case "Self Care":
        setIcon(selfCareIcon);
        break;
      default:
        break;
    }
    switch (title) {
      case "Work":
        setBackground("var(--lightRed)");
        break;
      case "Play":
        setBackground("var(--softBlue)");
        break;
      case "Study":
        setBackground("var(--lightRedTwo)");
        break;
      case "Exercise":
        setBackground("var(--limeGreen)");
        break;
      case "Social":
        setBackground("var(--violet)");
        break;
      case "Self Care":
        setBackground("var(--softOrange)");
        break;
      default:
        break;
    }
  }, [period]);

  return (
    <div className="cardContainer" style={{ backgroundColor: background }}>
      <div className="svgContainer">
        <img src={icon} alt="icon" />
      </div>
      <div className="main">
        <div className="titleContainer">
          <span className="title">{title}</span>
          <img src={ellipsisIcon} alt="elipsis" />
        </div>
        <div className="stats">
          <h3>{currentStat}hrs</h3>
          <p>{periodText}hrs</p>
        </div>
      </div>
    </div>
  );
}
