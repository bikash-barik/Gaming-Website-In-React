

import { FeedHeader, FeedHomeLeft, FeedHomeRight } from '../Component/HomeFeed'
import React, { useState } from "react";
import { Button, Card, Collapse, Form } from "react-bootstrap";
import "../Style/Feed.css";
export const Architecture = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='home_page sm: mt-5'>
     <FeedHeader 
     heading={"The Leading 3D Architecture Resource"}
     destitle={" For Educators, Students, Practitioners and Industry Professionals"}
     title={"  Depend on the world’s most detailed, accurate and evidence-based 3D reconstruction of human anatomy. University experts produced our 3D models. Advanced academic research and hundreds of thousands of development hours underpin its creation, exhaustively peer reviewed so you can use our solutions with confidence."}
     leftbtnlink={"/3d/3danatomy"}
     leftbtn={"3D Visualisation"}
     rightbtnlink={"/learn/learnmore"}
     rightbtn={"Read"}
     tdimg={"https://cloud.chiefarchitect.com/1/images/interior-design-software/dollhouse.png"}
     />
      {/* ----------------------EDUCATORs SECTION STARTS------------------------------------ */}


<FeedHomeLeft
tdimg={"https://www.primalpictures.com/wp-content/uploads/2019/06/educators-update.jpg.webp"}
heading={"Captivate and motivate students and ensure their success"}
destitle={" Integrate dynamic, interactive content directly into your learning environment – lecture, lab, assessment. Support  independent discovery and diverse learning experiences."}
exclink={"#"}
header={"EDUCATORS"}
/>
      {/* -----------------------------STUDENTS SECTION STARTS--------------------------- */}

     <FeedHomeRight
     tdimg={"https://www.primalpictures.com/wp-content/uploads/2019/06/students-update.jpg.webp"}
     heading={" Master anatomy and physiology concepts and prepare for courses and exams with confidence"}
     destitle={"Explore, learn and master! Ensure a solid foundation of anatomy and physiology knowledge is your cornerstone."}
     exclink={"#"}
     header={"STUDENTS"}
     />
      {/* -----------------------------PRACTITIONERS STARTS------------------------------ */}
  
<FeedHomeRight
     tdimg={"https://www.primalpictures.com/wp-content/uploads/2019/06/practitioners-update.jpg.webp"}
     heading={" Support clinical decision making and enhance patient outcomes"}
     destitle={" Promote better health outcomes with a wealth of specialty-focused content that brings anatomy into focus – for  you and your patients."}
     exclink={"#"}
     header={"Practitioners"}
     />
      {/* ----------------------------CORPORATE STARTS--------------------------------*/}

<FeedHomeLeft
     tdimg={"https://www.primalpictures.com/wp-content/uploads/2019/06/corporate-update.jpg.webp"}
     heading={" Deliver credible and differentiated go-to market programs – drive ROI!"}
     destitle={"Maximize brand impact through optimal go-to-market readiness. Breakthrough with innovative, dynamic programs built on foundation of evidence-based accuracy and unrivaled coverage."}
     exclink={"#"}
     header={"Corporate"}
     />
      <>
        <div class="contact_toogle">
          <button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="btn color-inherit"
          >
           <p>Contact us</p> 
          </button>
        </div>

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
  )
}
