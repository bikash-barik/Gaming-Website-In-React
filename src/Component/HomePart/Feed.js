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
          heading={"Anatomy"}
          title={
            "Human Anatomy (ana- = “up”, tome = “to cut”) is often defined as the study of structures in the human body. Anatomy focuses on the description of form, or how body structures at different levels look."
          }
          link={"/3d/anatomy"}
          tdink={"../../3DFiles/ex1.glb"}
        />
        </Fade>
        <FeedViewLeft
          heading={"Engineering"}
          title={
            "In engineering design, virtual reality utilizes 3D modeling tools and visualization techniques to enable design engineers to view and interact with their projects in 3D. The main perk of incorporating VR into the design process is that engineers can spot design flaws and potential risks well before implementation."
          }
          link={"/3d/anatomy"}
          tdink={"../../3DFiles/ex1.glb"}
        />

        <FeedView
          heading={"Architecture"}
          title={
            "A VR architectural presentation provides you with a full 360 view – enabling you to get a feeling for space and design and perceive the actual scale of a project. Used by interior designers, architects, and real estate developers, virtual reality systems, and 3D visualization tools are perfect for creating mixed-reality spaces and immersive experiences for projects. Virtual reality can make it easier for people to navigate through buildings and provides a way for people to experience real projects in a whole new way.Virtual reality is a new medium in architecture and design. It allows architects and designers to receive customer feedback so that it could be capitalized on before the project is finished."
          }
          link={"/3d/anatomy"}
          tdink={"../../3DFiles/ex1.glb"}
        />
        <FeedViewLeft
          heading={"Tourism"}
          title={
            "For the travel industry, virtual reality can be used in tourism marketing to enhance travel experience and shape the behavior of travel consumers. What technology can do today is absolutely remarkable!. Using the VR, your tour or activity business can have a virtual walkthrough. Allow potential consumers to catch a glimpse of the atmosphere of the destination they’re about to book."
          }
          link={"/3d/anatomy"}
           srclink={""}
           tdink={"../../3DFiles/ex1.glb"}
        />
        <FeedView
          heading={"Entertainment"}
          title={
            "Virtual reality environments allow common people to engage with the exhibits, concerts, museum, gallery, etc. in ways which were previously unknown or forbidden. It allows the person to view 3D images and these images appear life-sized to the person, so the entertainment seems realistic but enjoyable."
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
