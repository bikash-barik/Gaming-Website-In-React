import React from "react";
import "../Style/Feed.css";

function HomeFeed() {
  return (
    <>
     <h1 class="edu">Educators</h1>
      <div class="two_column ">
        <div class="container header-educators">
          <div class="row d-flex ro">
            <div class="col-lg-6 col-md-12 pic1">
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
                <a href="" id="explore-btn">
                  EXPLORE
                </a>

              </div>
            </div>

          </div>

        </div>


      </div>
   </>
  );
}

export default HomeFeed;
