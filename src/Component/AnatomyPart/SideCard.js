import React from "react";
import "../../Style/AnatomySideCard.css";

export const SideCard = (props) => {
  return (
    <div>
      <div class="text-white">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-xl-6">
            <img
              className="rounded"
              height="80%"
              width="100%"
              src={props.imgs}
              alt="Card image cap"
              />
          </div>
          <div class="col-sm-6 col-md-6 col-xl-6">
            <h6 class="text-white">{props.title}</h6>
            <p class="text-white d-inline-block text-truncate">{props.text}</p>
            {/* <a href="#" class="btn btn-outline-primary">Primary</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
