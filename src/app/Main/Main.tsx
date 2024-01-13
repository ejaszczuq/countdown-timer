import React from "react";

import "./Main.scss";
import NumberBox from "../../components/NumberBox/NumberBox";


const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Main Page</h1>
      <NumberBox className="days" title="days" num={6}></NumberBox>
    </div>
  );
};

export default MainPage;
