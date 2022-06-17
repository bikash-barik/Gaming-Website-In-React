import React from "react";

export default function VisualizePage(props) {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div className="h5 gofornext float-end">
          <a href="/3d/3danatomy">
            <img src="https://img.icons8.com/ios/30/3212ff/left--v1.png" />
            Back
          </a>
        </div>
<div>
    <h1 className="text-white mt-5 m-5 text-center">{props.title}</h1>
</div>
        <div class="col">
       
          <model-viewer
            id="arch_model"
            src={props.tdink}
           style={{width:"100vw" ,height: "80vh", justifyContent:"center" , justifyItems: "center"}}
            ar
            ar-modes="webxr scene-viewer quick-look"
            seamless-poster
            shadow-intensity="1"
            camera-controls
          ></model-viewer>
        </div>
       


      </div>
    </div>
  );
}
