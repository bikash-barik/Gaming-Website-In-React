import { Button } from "bootstrap";
import React, { useState } from "react";
import "../Style/Feed.css";

function HomeFeed() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class="container header-blue">
        <div class=" hero">
          <div class=" row border position-sticky">
            <div class="col-12 col-lg-6 col-xl-6 offset-xl-1 text-white">
              <h1>The Leading 3D Anatomy Resource</h1>
              <p className="fw-bold ">
                For Educators, Students, Practitioners and Industry Professionals
                <br />
              </p>
              <p>
                Depend on the world’s most detailed, accurate and evidence-based 3D reconstruction of human anatomy. University experts produced our 3D models. Advanced academic research and hundreds of thousands of development hours underpin its creation, exhaustively peer reviewed so you can use our solutions with confidence.
              </p>

              <button id="foot"><button class="button-os"><a href="/3d/3danatomy">3D Visualisation</a></button></button>
              <button id="foot"><button class="button-os"><a href="/learn/learnmore">Read</a></button></button>

            </div>
            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div class="iphone-mockup">
                <img class="device" src="../images/humananatomy.png" alt="" />
              </div>
            </div>
          </div>
        </div>


      </div>




      {/* ----------------------EDUCATORs SECTION STARTS------------------------------------ */}
      <div class="two_column" >
        <div class="container ">
          <div class="row d-flex ">
            <div class="col-lg-6 col-md-12 ">
              <img src="https://www.primalpictures.com/wp-content/uploads/2019/06/educators-update.jpg.webp" alt="" />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <p class="text-light">
                  <strong>Captivate and motivate students and ensure their success</strong>
                </p>
                <p class="text-light">
                  Integrate dynamic, interactive content directly into your learning environment – lecture, lab, assessment. Support independent discovery and diverse learning experiences.
                </p>
                <a href="#na" class="explore-btn">
                  EXPLORE
                </a>

              </div>
            </div>
          </div>
        </div>
        <h1>EDUCATORS</h1>
      </div>
      {/* -----------------------------EDUCATORS SECTION ENDS---------------------------- */}


      {/* -----------------------------STUDENTS SECTION STARTS--------------------------- */}
      <div class="two_column" >
        <div class="container ">
          <div class="row d-flex flex-md-row-reverse">
            <div class="col-lg-6 col-md-12 ">
              <img src="https://www.primalpictures.com/wp-content/uploads/2019/06/students-update.jpg.webp" alt="" />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <p class="text-light">
                  <strong>Master anatomy and physiology concepts and prepare for courses and exams with confidence</strong>
                </p>
                <p class="text-light">
                  Explore, learn and master!  Ensure a solid foundation of anatomy and physiology knowledge is your cornerstone.
                </p>
                <a href="#na" class="explore-btn">
                  EXPLORE
                </a>

              </div>
            </div>
          </div>
        </div>
        <h1>STUDENTS</h1>
      </div>
      {/* -----------------------------STUDENTS SECTION ENDS------------------------------------ */}


      {/* -----------------------------PRACTITIONERS STARTS------------------------------ */}
      <div class="two_column" >
        <div class="container ">
          <div class="row d-flex ">
            <div class="col-lg-6 col-md-12 ">
              <img src="https://www.primalpictures.com/wp-content/uploads/2019/06/practitioners-update.jpg.webp" alt="" />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <p class="text-light">
                  <strong>Support clinical decision making and enhance patient outcomes</strong>
                </p>
                <p class="text-light">
                  Promote better health outcomes with a wealth of specialty-focused content that brings anatomy into focus – for you and your patients.
                </p>
                <a href="#na" class="explore-btn">
                  EXPLORE
                </a>

              </div>
            </div>
          </div>
        </div>
        <h1>Practitioners</h1>
      </div>
      {/*-----------------------------PRACTITIONERS ENDS----------------------------  */}


      {/* ----------------------------CORPORATE STARTS--------------------------------*/}
      <div class="two_column" >
        <div class="container ">
          <div class="row d-flex flex-md-row-reverse">
            <div class="col-lg-6 col-md-12 ">
              <img src="https://www.primalpictures.com/wp-content/uploads/2019/06/corporate-update.jpg.webp" alt="" />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <p class="text-light">
                  <strong>Deliver credible and differentiated go-to market programs – drive ROI!</strong>
                </p>
                <p class="text-light">
                  Maximize brand impact through optimal go-to-market readiness. Breakthrough with innovative, dynamic programs built on foundation of evidence-based accuracy and unrivaled coverage.
                </p>
                <a href="#na" class="explore-btn">
                  EXPLORE
                </a>

              </div>
            </div>
          </div>
        </div>
        <h1>Corporate</h1>
      </div>
      {/* ----------------------------CORPORATE ENDS------------------------------------- */}
      <div class="contact_toogle" >
        <p>Contact us</p>
      </div>

      {/* <button onClick={() => setOpen(true)}>ContactUs</button> */}

      <div open={open} class="container w-25  text-center mt-5">
        <h2 className="text-white">Contact Us</h2>
        <div class="card p-3">
          <div class="row">
            <div class="col-md-12 text-white">
              <div class="row">
                <div class="col-md-6">
                  {" "}
                  <input
                    type="text"
                    placeholder="Name"
                    class="form-control text-white"
                  />{" "}
                </div>
                <div class="col-md-6">
                  {" "}
                  <input
                    type="text"
                    placeholder="Email"
                    class="form-control text-white"
                  />{" "}
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  {" "}
                  <textarea
                    class="form-control textarea text-white"
                    placeholder="Message"
                    rows="4"
                  >
                    {" "}
                  </textarea>{" "}
                </div>
              </div>
              <div class="send-button mt-4">
                {" "}
                <button class="button">Send Message</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* ----------------------------SIDE CONTACT TOOGLE----------------------------------*/}
      <div class="contact_toogle">
        <p>Contact us</p>
      </div>


    </>
  );
}

export default HomeFeed;
