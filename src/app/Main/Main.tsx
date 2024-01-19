import React, { useState, useEffect } from "react";
import "./Main.scss";
import NumberBox from "../../components/NumberBox/NumberBox";
import NumberBoxTitle from "../../components/NumberBoxTitle/NumberBoxTitle";

const MainPage = () => {
  const [time, setTime] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    const countdownDate = new Date("Feb 5, 2024 15:37:25").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-page">
      <main>
        <div className="boxSection">
          <NumberBox idProp="days" num={time.days} />
          <NumberBoxTitle content="days"/>
        </div>
        <div className="boxSection">
          <NumberBox idProp="hours" num={time.hours} />
          <NumberBoxTitle content="hours"/>
        </div>
        <div className="boxSection">
          <NumberBox idProp="minutes" num={time.minutes} />
          <NumberBoxTitle content="minutes"/>
        </div>
        <div className="boxSection">
          <NumberBox idProp="seconds" num={time.seconds} />
          <NumberBoxTitle content="seconds"/>
        </div>
      </main>
      <footer>
        <div className="social-icons-container">
            <img className="facebook-icon" alt="Facebook Icon" />
            <img className="pinterest-icon" alt="Pinterest Icon" />
            <img className="instagram-icon" alt="Instagram Icon" />
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
