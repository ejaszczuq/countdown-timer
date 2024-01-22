import React, { useState, useEffect } from "react";
import "./Main.scss";

import NumberBox from "../../components/NumberBox/NumberBox";
import SocialIcons from "../../components/Social-icons/ScoialIcons";
import InputButton from "../../components/InputButton/InputButton";

const MainPage = () => {
  const [timeValues, setTimeValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [inputDate, setInputDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const targetDate = inputDate;

      const timeDifference = targetDate.getTime() - currentDate.getTime();

      if (timeDifference < 0) {
        setTimeValues({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeValues({
          days,
          hours,
          minutes,
          seconds
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [inputDate]);

  return (
    <div className="main-page">
      <main>
        <div className="boxSection">
          <NumberBox id="days" title="days" num={timeValues.days} />
        </div>
        <div className="boxSection">
          <NumberBox id="hours" title="hours" num={timeValues.hours} />
        </div>
        <div className="boxSection">
          <NumberBox id="minutes" title="minutes" num={timeValues.minutes} />
        </div>
        <div className="boxSection">
          <NumberBox id="seconds" title="seconds" num={timeValues.seconds} />
        </div>
      </main>
      <InputButton id="input" title="+" setInputDate={setInputDate} />
      <footer>
        <SocialIcons />
      </footer>
    </div>
  );
};

export default MainPage;
