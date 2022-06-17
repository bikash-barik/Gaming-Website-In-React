import React from "react";
import Massages from "../Component/Massages";
import VisualizePage from "../Component/VisualizePage";
import Human from "../3DFiles/3D/neuron.glb" 
import HumanMale from "../3DFiles/3D/reproductive-system.glb" 
import HumanFemale from "../3DFiles/3D/female-reproductive-system.glb" 
import VisualizePage2 from "../Component/VisualizePage2";
export const Visidual = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5432600?color=333333"} />
    </div>
  );
};

export const Visidual2 = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/4984009?color=333333"} />
    </div>
  );
};

export const Visidual3 = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5432587?color=333333"} />
      
    </div>
  );
};

export const Visidual4 = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/4982740?color=333333"} />
    </div>
  );
};


export const ViewHumanHeart = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5432565?color=333333"} />
    </div>
  );
};


export const ViewMuscularSystem = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5191082?color=333333"} />
    </div>
  );
};




export const ViewRespiratorySystem = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5972018?color=333333"} />
    </div>
  );
};


export const ViewDigestiveSystem = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5195309?color=333333"} />
    </div>
  );
};


export const ViewKidney = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5404758?color=333333"} />
    </div>
  );
};



//comming Soon Data
// export const ViewReproductiviSystem = () => {
//   return (
//     <div>
//       <VisualizePage2 title={"Male"} title2={"Female"} tdink={HumanMale} tdink2={HumanFemale} />
//     </div>
//   );
// };

export const ViewReproductiviSystem = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5897899?color=333333"} />
    </div>
  );
};

export const ViewNeuronSystem = () => {
  return (
    <div>
      <VisualizePage title={"Neuron"}  tdink={Human}/>
    </div>
  );
};




export const ViewDental = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5973530?color=333333"} />
    </div>
  );
};



export const ViewHumanCell = () => {
  return (
    <div>
      <Massages srs={"https://itch.io/embed-upload/5939701?color=333333"} />
    </div>
  );
};