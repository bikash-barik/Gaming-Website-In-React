import React from "react";
import FirstModel from "../Component/3DModels/FirstModel";
import Feed from "../Component/HomePart/Feed";
import HomeSlider from "../Component/HomePart/HomeSlider";

const Landingpage = () => {
  return (
    <div className="">
      <div className="home_page sm: mt-5">
        <HomeSlider />
        <Feed />
         
      <FirstModel/>
      </div>
    </div>
  );
};

export default Landingpage;
