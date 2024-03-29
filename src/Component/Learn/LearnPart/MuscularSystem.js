import React from "react";
import "../../../Style/Style.css";

const MuscularSystem = (props) => {
  return (
    <div className="muscular mt-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 className="heading">{props.heading}</h1>
            <p className="paragraph">{props.title}</p>
          </div>

          <div class="col">
              <a href="/viewmuscularsystem">
              <img src={props.imgcont} alt="feed image" width="450" height="250" className=" shadow-lg bg-light rounded" />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuscularSystem;
