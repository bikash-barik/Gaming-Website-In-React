import React from "react";
import FirstModel from "../3DModels/FirstModel";
import tdlink from "../../3DFiles/ex1.glb" 

const FeedView = (props) => {
  return (
    <div className="mt-5 py-5">
      <div className="muscular mt-5">
        <a href={props.link}>
          <div class="container">
            <div class="row">
              <div class="col mt-5">
                <h1 className="heading">{props.heading}</h1>
                <p className="paragraph">{props.title}</p>
              </div>

              <div class="col">
                {/* <img
                  src={props.srclink}
                  alt="feed image"
                  width="550"
                  height="400"
                  className=" shadow-lg bg-light rounded"
                /> */}
                 <model-viewer id="arch_model" src={tdlink} ar ar-modes="webxr scene-viewer quick-look"  seamless-poster shadow-intensity="1" camera-controls></model-viewer>
                {/* <FirstModel/> */}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FeedView;

export const FeedViewLeft = (props) => {
  return (
    <div>
      <div className="muscular mt-5">
        <a href={props.link}>
          <div class="container">
            <div class="row">
              <div class="col">
                {/* <img
                  src={props.srclink}
                  alt="feed image"
                  width="550"
                  height="400"
                  className=" shadow-lg bg-light rounded"
                /> */}
                 <model-viewer id="arch_model" src={tdlink} ar ar-modes="webxr scene-viewer quick-look"  seamless-poster shadow-intensity="1" camera-controls></model-viewer>

              </div>
              <div class="col mt-5">
                <h1 className="heading">{props.heading}</h1>
                <p className="paragraph">{props.title}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

