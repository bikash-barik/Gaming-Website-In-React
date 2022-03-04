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

export const RightComView = (props) => {
  return (
    <>
      <div class="two_column">
        <div class="container ">
          <div class="row d-flex ">
            <div class="col-lg-6 col-md-12 ">
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
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <span className="textlendingp">
                  <span className="textlen">
                    <p class="text-light h1">
                      <strong>{props.heading}</strong>
                    </p>
                    <p class="text-light ">{props.title}</p>
                  </span>
                  <a href={props.link} class="explore-btn">
                    EXPLORE
                  </a>
                  {/* <button id="foot">
                    <button class="button-os">
                      <a href={props.link}> EXPLORE</a>
                    </button>
                  </button> */}
                  {/* <img
                    src="https://media1.giphy.com/media/jss17HdkspjmvaYxH1/giphy.gif?cid=6c09b952e6dc73568aa2eeb5ad68ebfd0dbccb04e7dd3c39&rid=giphy.gif&ct=s"
                    class="midlen"
                    height="400px"
                    alt="..."
                  /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>EDUCATORS</h1> */}
      </div>
    </>
  );
};

export const LeftComView = (props) => {
  return (
    <>
      <div class="two_column">
        <div class="container ">
          <div class="row d-flex flex-md-row-reverse">
            <div class="col-lg-6 col-md-12 col-xs-12  col-sm-12">
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
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <span className="textlendingp">
                  <span className="textlen">
                    <p class="text-light h1">
                      <strong>{props.heading}</strong>
                    </p>
                    <p class="text-light">{props.title}</p>
                  </span>
                  <a href={props.link} class="explore-btn">
                    EXPLORE
                  </a>
                  {/* <img
                    src="https://media1.giphy.com/media/jss17HdkspjmvaYxH1/giphy.gif?cid=6c09b952e6dc73568aa2eeb5ad68ebfd0dbccb04e7dd3c39&rid=giphy.gif&ct=s"
                    class="midlen"
                    height="400px"
                    alt="..."
                  /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>STUDENTS</h1> */}
      </div>
    </>
  );
};
