import React from "react";
import "../Style/Feed.css";

function HomeFeed() {
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
              {/* <button
                class="btn btn-light btn-lg action-button m-2 newbtn"
                type="button"
              >
                <a href="/3d/3danatomy" className="text-decoration-none text-white text-home">
                  3D Visualisation
                </a>
                <i class="fa fa-long-arrow-right ml-2"></i>
              </button>
              <button class="btn btn-light btn-lg action-button newbtn" type="button">
                <a href="learn/learnmore" className=" text-white text-home">
                  {" "}
                  Learn More
                </a>

                <i class="fa fa-long-arrow-right ml-2"></i>
              </button> */}
              <button id="foot"><button class="button-os"><a href="/3d/3danatomy">3D Visualisation</a></button></button>
              <button id="foot"><button class="button-os"><a href="/learn/learnmore">Read</a></button></button>

            </div>
            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div class="iphone-mockup">
                <img class="device" src="./images/humananatomy.png" alt=""/> 
                {/* <iframe
                  width="460"
                  height="315"
                  src="https://www.youtube.com/embed/0K4ZRjkd7bc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe> */}
                {/* <!-- <div class="screen">	</div>	--> */}
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div>

     
      <div class="container educator" >
       
      <h1 class="text-red-800 edu">Educators</h1>
       <div class="row d-flex">
         <div class="col-lg-6 col-md-12 pic">
           <img src="https://www.primalpictures.com/wp-content/uploads/2019/06/educators-update.jpg.webp" class="lazy loaded" alt=""></img>
           </div>
         <div class="col-lg-6 col-md-12">
           <div class="content">
           <p class="text-light">
             <strong >Captivate and motivate students and ensure their&nbsp;success</strong>
           </p>
           <p class="text-light">
           Integrate dynamic, interactive content directly into your learning environment – lecture, lab, assessment. Support independent discovery and diverse learning&nbsp;experiences.
           </p>
           <a href="/educators">EXPLORE &nbsp;<i class="far fa-arrow-right"></i></a>
           </div>
           
    
</div>

         </div>
         </div>
         {/* <img src="./images/bb.png" class="border-bottom" alt=""></img> */}
         </div>

    </>
  );
}

export default HomeFeed;
