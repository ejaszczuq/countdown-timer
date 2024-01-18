import React from "react";

import "./Main.scss";
import NumberBox from "../../components/NumberBox/NumberBox";
import NumberBoxTitle from "../../components/NumberBoxTitle/NumberBoxTitle";


const MainPage = () => {
  return (
    <div className="main-page">
      <main>
        <div className="boxSection">
          <NumberBox idProp="days" num={8} />
          <NumberBoxTitle content="days"/>
          
        </div>
        <div className="boxSection">
          <NumberBox idProp="hours" num={23} />
          <NumberBoxTitle content="hours"/>
          
      </div>
      <div className="boxSection">
          <NumberBox idProp="minutes" num={55} />
          <NumberBoxTitle content="minutes"/>
          
      </div>
      <div className="boxSection">
          <NumberBox idProp="seconds" num={41} />
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
