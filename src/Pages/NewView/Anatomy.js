import React from "react";
import { AnatmyHome } from "../../Component/AnatomyPart/AnatmyHome";
import { SideCards } from "../../Component/AnatomyPart/SideCards";

function Anatomy() {
  return (
    <div className="row mt-4 container-fluid">
      <div className="col-sm-12 col-md-9 col-xl-9 mt-2">
          <AnatmyHome/>
      </div>
      <div className="col-sm-12 col-md-3 col-xl-3 mt-2">
          <SideCards/>
      </div>
    </div>
  );
}

export default Anatomy;
