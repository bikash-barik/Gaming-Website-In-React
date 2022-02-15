import React from 'react'

const SideHumanAnatomy = () => {
  return (
    <div>
      <div class="container header-blue">
        <div class=" hero hero1">
          <div class="row border position-sticky">
            <div class="col-12 col-lg-6 col-xl-5 offset-xl-1 text-white">
              <h1>What is Human Anatomy ?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
              </p>
                <button
                  class="btn btn-light btn-lg action-button m-2"
                  type="button"
                
                >
                    <a href="/learnmore" className=" text-white">  Learn More</a>
                <i class="fa fa-long-arrow-right ml-2"></i>
                </button>
                <button
                  class="btn btn-light btn-lg action-button"
                  type="button"
                >
                    <a href="/" className=" text-white">3D Visualisation</a>

               <i class="fa fa-long-arrow-right ml-2"></i>
                </button>
            </div>
            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div class="iphone-mockup1">
                {/* <img class="device" src="https://i.imgur.com/bkCeTu7.png"/>  */}
                <iframe
                  width="460"
                  height="315"
                  src="https://www.youtube.com/embed/0K4ZRjkd7bc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                {/* <!-- <div class="screen">	</div>	--> */}
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default SideHumanAnatomy