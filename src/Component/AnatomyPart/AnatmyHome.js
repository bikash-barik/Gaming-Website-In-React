import React from "react";
import "../../Style/AnatomyHome.css";

export const AnatmyHome = () => {
  return (
    <>
      <div class="container-fluid flex pt-5 ">
        <div class="row">
            <div className="iframcustum">
              <iframe
                className="iframe_div"
                style={{ height: "75vh", width: "100%" }}
                src="https://www.youtube.com/embed/ym3aaodVQIU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                <a
                  className="text-white h5"
                  href="https://www.w3schools.com"
                  target="iframe_a"
                >
                  W3Schools.com
                </a>
              </p>

              <p className="text-white h5">
                When the target attribute of a link matches the name of an
                iframe, the link will open in the iframe.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};
