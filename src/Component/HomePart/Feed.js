import React from "react";
import FeedView, { FeedViewLeft } from "./FeedView";
import Fade from 'react-reveal/Fade';
const Seed = () => {
  return (
    <div class="container header-blue">
      {/* <div class="container header-blue"
       srclink={""}>
        <div class=" hero">
          <div class=" row border position-sticky">
            <div class="col-12 col-lg-4 col-xl-4 offset-xl-1 text-white">
              <h1>The Leading 3D</h1>
              <p className="fw-bold ">
                For Educators, Students, Practitioners and Industry
                Professionals
                <br />
              </p>
              <p>
                Depend on the world’s most detailed, accurate and evidence-based
                3D . University experts produced our 3D models. Advanced
                academic research and hundreds of thousands of development hours
                underpin its creation, exhaustively peer reviewed so you can use
                our solutions with confidence.
              </p>
            </div>
            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-1 d-none d-lg-block phone-holder justify-center mt-5">
              <div class="iphone-mockup">
                <img
                  class="devic"
                  src="https://www.forbesindia.com/media/images/2021/Nov/img_170999__augmentedreality_bg.jpg"
                  alt="" width="600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      

      <div>
      <Fade left>
        <FeedView
          heading={"Anatomy:-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
          srclink={"https://i.ytimg.com/vi/eSYSybPxUM4/maxresdefault.jpg"}
        />
        </Fade>
        <FeedViewLeft
          heading={"Engineer :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
           srclink={"https://media.istockphoto.com/photos/computer-science-engineer-wearing-virtual-reality-headset-works-with-picture-id968289756?k=20&m=968289756&s=612x612&w=0&h=6p-c4PIvWqxpASlCTvEzpD8mAUuiQsUq9m69pW7Ix5E="}
        />

        <FeedView
          heading={"Architecture :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
          srclink={"https://cdn.redshift.autodesk.com/2017/06/virtual-reality-in-architecture-header_kss-e1639098479465.jpg"}
        />
        <FeedViewLeft
          heading={"Tourisme :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
           srclink={""}
          srclink={"https://imageio.forbes.com/specials-images/imageserve/60c2eed696889810881fea8c/Extended-Reality-In-Tourism--4-Ways-VR-and-AR-Can-Enhance-The-Travel-Experience/960x0.jpg?fit=bounds&format=jpg&width=960"}
        />
        <FeedView
          heading={"Entertainment :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
          link={"/3d/anatomy"}
          srclink={"https://content.fortune.com/wp-content/uploads/2019/06/vir07.19-the-void.jpg"}
        />
      </div>
    </div>
  );
};

export default Seed;
