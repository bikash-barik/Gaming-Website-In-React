import React from "react";
import FeedView, { FeedViewLeft } from "./FeedView";
import Fade from 'react-reveal/Fade';
const Seed = () => {
  return (
    <div class="container header-blue">
      
     <div class="container header-blue">
     
      <div>
      <Fade left>
        <FeedView
          heading={"Anatomy:-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
          tdink={"../../3DFiles/ex1.glb"}
        />
        </Fade>
        <FeedViewLeft
          heading={"Engineer :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
          tdink={"../../3DFiles/ex1.glb"}
        />

        <FeedView
          heading={"Architecture :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
          tdink={"../../3DFiles/ex1.glb"}
        />
        <FeedViewLeft
          heading={"Tourisme :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
           srclink={""}
           tdink={"../../3DFiles/ex1.glb"}
        />
        <FeedView
          heading={"Entertainment :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
          tdink={"../../3DFiles/ex1.glb"}
        />
      </div>
  </div>
  </div>
  );
};

export default Seed;
