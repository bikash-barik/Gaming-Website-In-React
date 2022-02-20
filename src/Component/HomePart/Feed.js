import React from "react";
import Card from "./Card";
import FeedView, { FeedViewLeft } from "./FeedView";

const Seed = () => {
  return (
    <div class="container header-blue">
      <div class="container header-blue">
        <div class=" hero">
          <div class=" row border position-sticky">
            <div class="col-12 col-lg-6 col-xl-6 offset-xl-1 text-white">
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
            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div class="iphone-mockup">
                <img
                  class="device"
                  src="http://www.animationboom.net/blog/wp-content/uploads/2020/08/animation-3d.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container header-blue">
        <div class=" hero">
          <div class="row">
            {/* <h3 class=" mb-5  text-white">Recent Experience</h3> */}
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"https://innerbody.imgix.net/3bodies2.jpg"}
                title={"Anatomy"}
                text={
                  " The heart is made up of four chambers: two upper chambers known as the left atrium and right atrium and two lower..."
                }
                link={"/3d/sec_humanhart"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"https://innerbody.imgix.net/3bodies2.jpg"}
                title={"Engineer"}
                text={
                  " The digestive system breaks down food into nutrients such as carbohydrates, fats and proteins. They can then be..."
                }
                link={"/3d/sec_digestivesystem"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"https://innerbody.imgix.net/3bodies2.jpg"}
                title={"Architecture"}
                text={
                  "The human eye is an organ that reacts to light in many circumstances. As a conscious sense organ, the human eye  ..."
                }
                link={"/3d/second_page2"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"https://innerbody.imgix.net/3bodies2.jpg"}
                title={"Tourisme"}
                text={
                  "The human eye is an organ that reacts to light in many circumstances. As a conscious sense organ, the human eye  ..."
                }
                link={"/3d/second_page2"}
              />
            </div>
          </div>
          <div class="row mt-5 mb-5 mrbt-10">

          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh3.googleusercontent.com/ibrwYhkcinkIhda8073e1YpXTlVAlM7Yi43i9uXk0wwv5FvLRaSStG21b5e7wuFbkG3T8WLBg--HfQP6L26tng6ts1IsHUpPbr2Ne2f2i9f2IbY5IHjlI7MZIvowZcNaZWXQki0"}
              title={"Entertainment"}
              text={
                "The human ear, like that of other mammals, contains sense organs that serve two quite different  ..."
              }
              link={"/3d/second_page3"}
            />
          </div>

        </div>

        </div>
      </div>

      <div>
        <FeedView
          heading={"Anatomy:-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
        />
        <FeedViewLeft
          heading={"Engineer :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
        />

        <FeedView
          heading={"Architecture :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
        />
        <FeedViewLeft
          heading={"Tourisme :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
        />
        <FeedView
          heading={"Entertainment :-"}
          title={
            "Hip abduction is where the leg moves away from the mid-body, backward, forward or sideways. You do this movement when you take a side step or step out of a car. The muscles responsible are the hip abductors, a small muscle group located in the outer thighs and around the glutes."
          }
        />
      </div>
    </div>
  );
};

export default Seed;
