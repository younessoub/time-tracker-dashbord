import { useState } from "react";
import "./styles.css";
import data from "./data.json";
import profileImg from "./images/image-jeremy.png";

//card component
import Card from "./components/Card";

export default function App() {
  const [period, setPeriod] = useState("weekly");
  //console.log(data);
  //title
  //period
  //stats
  return (
    <div className="App">
      <div className="profile">
        <div className="info">
          <div className="imgContainer">
            <img src={profileImg} alt="profile-img" />
          </div>
          <div>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <div className="period">
          <span
            onClick={(e) => {
              setPeriod("daily");
            }}
          >
            Daily
          </span>
          <span
            onClick={() => {
              setPeriod("weekly");
            }}
          >
            Weekly
          </span>
          <span
            onClick={() => {
              setPeriod("monthly");
            }}
          >
            Monthly
          </span>
        </div>
      </div>
      <div className="grid">
        {data.map((e, index) => {
          return (
            <Card
              key={index}
              title={e.title}
              period={period}
              currentStat={e.timeframes[period].current}
              previousStat={e.timeframes[period].previous}
            />
          );
        })}
      </div>
    </div>
  );
}
