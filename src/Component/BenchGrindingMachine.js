import React, { Component } from "react";

export default function CBenchGrindingMachineard(props) {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="h5 gofornext float-end">
        <a href="/3d/3danatomy">
          <img src="https://img.icons8.com/ios/30/3212ff/left--v1.png" />
          Back
        </a>
      </div>
      <div class="container shadow-lg p-3 my-5  X rounded rounded-3  bg-light">
        <div class="row justify-content-end  align-items-center">
          <div class="col-sm-0 col-md-4 h1 justify-content-center"></div>
          <div class="col-sm-2 col-md-7 h1 justify-content-center fw-bold">
            {" "}
            {props.title}
          </div>
          <div class="col-sm-5 col-md-1 float-end ">
            <a href={props.link}>
              {" "}
              <img src="https://img.icons8.com/color/80/000000/circled-right-2.png" />
            </a>
            {/* <a href={props.link}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5hrEeLt6wEmM954MIrXIjLc9YarvUngseTy2ABcUg3Xy76eGVMUPfAdcEOLvyJ3CpCs&usqp=CAU" width="110px" class="rounded float-start nextpage cutmLogo" alt="..."/></a> */}
          </div>
        </div>
        <div class="row justify-content-start mt-2">
          <div class="col-sm-12 col-md-4 mb-3 h1">Description:</div>
          <div class="col-sm-12 col-md-12 h3 fw-normal">{props.text}</div>
        </div>
        <div className="h5 gofornext">
          <a href={props.link}>
            Go For Next{" "}
            <img src="https://img.icons8.com/ios/30/3212ff/right--v1.png" />
          </a>
        </div>

        <div class="row justify-content-between align-items-center">
          <div class="col-sm-2 col-md-2 h3"></div>
          <div class="col-sm-12 col-md-2 ">
            <a href="https://cutm.ac.in/">
              <img
                src="https://convocation.cutm.ac.in/images/cutm%20logo1.png"
                className="cutmLogo"
                width="80px"
                alt="..."
              />
            </a>
            <a href="https://www.thegttech.com/">
              <img
                src="./images/logo1.png"
                width="350px"
                class="rounded desktopNone gttechLogo bg-dark"
                alt="..."
              />
            </a>
          </div>
          <div class="col-sm-2 col-md-2 mobileNone">
          <a href="https://www.thegttech.com/">

            <img
              src="../images/logo1.png"
              width="300px"
              class="rounded float-start gttechLogo bg-dark"
              alt="..."
            />
            </a>
          </div>
          <div class="col-sm-2 col-md-2  h3"></div>

          {/* <div class="col-sm-12 col-md-2 h3">Developer:</div>
            <div class="col-sm-12 col-md-2"><img src="data:image/png;base64,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" width="200px" class="rounded float-start" alt="..."/></div> */}
        </div>
      </div>
    </div>
  );
}
