import React from "react";
import "../../Style/Landingpage.css";
const FeedView = (props) => {
  return (
    <div className="mt-5 py-5">
      <div className="muscular mt-5">
        <div class="container">
          <div class="row">
            <div class="col mt-5">
            <a href={props.link}>
                <span className="textlendingp">
                  <span className="textlen">
                    <h1 className="heading">{props.heading}</h1>
                    <p className="paragraph">{props.title}</p>
                    </span>
                  <img
                    src="https://media1.giphy.com/media/jss17HdkspjmvaYxH1/giphy.gif?cid=6c09b952e6dc73568aa2eeb5ad68ebfd0dbccb04e7dd3c39&rid=giphy.gif&ct=s"
                    class="midlen"
                    height="400px"
                    alt="..."
                    
                  />
               
                </span>
              </a>
            </div>

            <div class="col">
              <model-viewer
                id="arch_model"
                src={props.tdink}
                ar
                ar-modes="webxr scene-viewer quick-look"
                seamless-poster
                shadow-intensity="1"
                camera-controls
              ></model-viewer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedView;

export const FeedViewLeft = (props) => {
  return (
    <div>
      <div className="muscular mt-5">
        <div class="container">
          <div class="row">
            <div class="col">
              <model-viewer
                id="arch_model"
                src={props.tdink}
                ar
                ar-modes="webxr scene-viewer quick-look"
                seamless-poster
                shadow-intensity="1"
                camera-controls
              ></model-viewer>
            </div>
            <div class="col mt-5">
              <a href={props.link}>
                <span className="textlendingp">
                  <span className="textlen">
                    <h1 className="heading">{props.heading}</h1>
                    <p className="paragraph">{props.title}</p>
                    </span>
                  <img
                    src="https://media1.giphy.com/media/jss17HdkspjmvaYxH1/giphy.gif?cid=6c09b952e6dc73568aa2eeb5ad68ebfd0dbccb04e7dd3c39&rid=giphy.gif&ct=s"
                    class="midlen"
                    height="400px"
                    alt="..."
                    
                  />
               
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
