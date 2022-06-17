import React, { useState } from "react";

import FeedView, { FeedViewLeft, LeftComView, RightComView } from "./FeedView";
import Fade from "react-reveal/Fade";
import AnatomyDD from "../../3DFiles/AnatomyDD.glb";
import BuildingArch from "../../3DFiles/BuildingArch.glb";
import Engineering from "../../3DFiles/Engineering.glb";
import Entertainment from "../../3DFiles/Entertainment.glb";
import Tourism from "../../3DFiles/Tourism.glb";
import ex from "../../3DFiles/ex1.glb";
import ex1 from "../../3DFiles/ex1.glb";
import Human from "../../3DFiles/3D/neuron.glb"
import { Button, Card, Collapse, Form } from "react-bootstrap";
const Seed = () => {
  const [open, setOpen] = useState(false);

  return (
    

          <div class="container header-blue">
            <RightComView
             heading={"Anatomy"}
             title={
               "Human Anatomy (ana- = “up”, tome = “to cut”) is often defined as the study of structures in the human body. Anatomy focuses on the description of form, or how body structures at different levels look."
             }
             link={"/3d/anatomy"}
             tdink={AnatomyDD}
            //  tdink={Human}
            />

            <LeftComView
             heading={"Engineering"}
             title={
               "In engineering design, virtual reality utilizes 3D modeling tools and visualization techniques to enable design engineers to view and interact with their projects in 3D. The main perk of incorporating VR into the design process is that engineers can spot design flaws and potential risks well before implementation."
             }
             link={"/3deng/engineering"}
             tdink={Engineering}
            />
             <RightComView
              heading={"Architecture"}
              title={
                "A VR architectural presentation provides you with a full 360 view – enabling you to get a feeling for space and design and perceive the actual scale of a project. Used by interior designers, architects, and real estate developers, virtual reality systems, and 3D visualization tools are perfect for creating mixed-reality spaces and immersive experiences for projects. Virtual reality can make it easier for people to navigate through buildings and provides a way for people to experience real projects in a whole new way.Virtual reality is a new medium in architecture and design. It allows architects and designers to receive customer feedback so that it could be capitalized on before the project is finished."
              }
              link={"/3deng/architecture"}
              tdink={BuildingArch}
            />

            <LeftComView
            heading={"Tourism"}
            title={
              "For the travel industry, virtual reality can be used in tourism marketing to enhance travel experience and shape the behavior of travel consumers. What technology can do today is absolutely remarkable!. Using the VR, your tour or activity business can have a virtual walkthrough. Allow potential consumers to catch a glimpse of the atmosphere of the destination they’re about to book."
            }
            link={"comingsoon"}
            srclink={""}
            tdink={Tourism}
            />
             <RightComView
           heading={"Entertainment"}
           title={
             "Virtual reality environments allow common people to engage with the exhibits, concerts, museum, gallery, etc. in ways which were previously unknown or forbidden. It allows the person to view 3D images and these images appear life-sized to the person, so the entertainment seems realistic but enjoyable."
           }
           link={"/comingsoon"}
           tdink={Entertainment}
            />

            {/* <LeftComView
             heading={"Entertainment"}
             title={
               "Virtual reality environments allow common people to engage with the exhibits, concerts, museum, gallery, etc. in ways which were previously unknown or forbidden. It allows the person to view 3D images and these images appear life-sized to the person, so the entertainment seems realistic but enjoyable."
             }
             link={"#"}
             tdink={Entertainment}
            /> */}
            <div class="container header-blue">
              <div>
                <Fade left>
                  {/* <FeedView
                    heading={"Anatomy"}
                    title={
                      "Human Anatomy (ana- = “up”, tome = “to cut”) is often defined as the study of structures in the human body. Anatomy focuses on the description of form, or how body structures at different levels look."
                    }
                    link={"/3d/anatomy"}
                    tdink={ex1}
                  /> */}
                </Fade>
                {/* <FeedViewLeft
                  heading={"Engineering"}
                  title={
                    "In engineering design, virtual reality utilizes 3D modeling tools and visualization techniques to enable design engineers to view and interact with their projects in 3D. The main perk of incorporating VR into the design process is that engineers can spot design flaws and potential risks well before implementation."
                  }
                  link={"#"}
                  tdink={Engineering}
                /> */}

                {/* <FeedView
                  heading={"Architecture"}
                  title={
                    "A VR architectural presentation provides you with a full 360 view – enabling you to get a feeling for space and design and perceive the actual scale of a project. Used by interior designers, architects, and real estate developers, virtual reality systems, and 3D visualization tools are perfect for creating mixed-reality spaces and immersive experiences for projects. Virtual reality can make it easier for people to navigate through buildings and provides a way for people to experience real projects in a whole new way.Virtual reality is a new medium in architecture and design. It allows architects and designers to receive customer feedback so that it could be capitalized on before the project is finished."
                  }
                  link={"#"}
                  tdink={BuildingArch}
                /> */}
                {/* <FeedViewLeft
                  heading={"Tourism"}
                  title={
                    "For the travel industry, virtual reality can be used in tourism marketing to enhance travel experience and shape the behavior of travel consumers. What technology can do today is absolutely remarkable!. Using the VR, your tour or activity business can have a virtual walkthrough. Allow potential consumers to catch a glimpse of the atmosphere of the destination they’re about to book."
                  }
                  link={"#"}
                  srclink={""}
                  tdink={ex}
                /> */}
                {/* <FeedView
                  heading={"Entertainment"}
                  title={
                    "Virtual reality environments allow common people to engage with the exhibits, concerts, museum, gallery, etc. in ways which were previously unknown or forbidden. It allows the person to view 3D images and these images appear life-sized to the person, so the entertainment seems realistic but enjoyable."
                  }
                  link={"#"}
                  tdink={ex1}
                /> */}
              </div>
            </div>
            <>
        {/* <div class="contact_toogle">
          <button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="btn"
          >
           <p>CONTACT</p> 
          </button>
        </div> */}

        <div className="popup">
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: "400px" }}>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </div>
          </Collapse>
        </div>
      </>
          </div>
       
  );
};

export default Seed;
