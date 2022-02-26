import React, { useRef } from "react";
// import TD from "../../3DFiles/BuildingArch.glb" 
import TD from "../../3DFiles/ex1.glb" 

const FirstModel = (props) => {
 
  return (
    <div>
      <model-viewer id="arch_model" src={TD} ar ar-modes="webxr scene-viewer quick-look"  seamless-poster shadow-intensity="1" camera-controls></model-viewer>
    </div>
  );
};

export default FirstModel;
