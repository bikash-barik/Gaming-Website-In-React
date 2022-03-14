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
              Anatomy is the science that studies the structure of the body. On this page, you'll find links to descriptions and pictures of the human body's parts and organ systems from head to toe.
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



      
      <div class="container">
        <div class="row ">
          <div class="col">
          <a href="/" className="btn px-5">
            <img src="https://img.icons8.com/ios/30/ffffff/left--v1.png" />
            Back
          </a>
          </div>

          <div class="col d-flex justify-content-end mr-5">
          <a href="/learn/muscularsystem" className="btn px-5">
            
            Next
            <img src="https://img.icons8.com/ios/30/ffffff/right--v1.png" />
          </a>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default SideHumanAnatomy