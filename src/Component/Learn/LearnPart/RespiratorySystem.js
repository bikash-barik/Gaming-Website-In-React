import React from "react";
import MuscularSystem from "./MuscularSystem";

const  RespiratorySystem = () => {
  return (
    <div>
    <div id="about">
      <br />
      <br />
      <br />
      <br />
      <div className="border p-5">
        <MuscularSystem
        imgcont={"../images/ms.png"}
          heading={"Respiratory System"}
          title={
            "The respiratory system is the organs and other parts of your body involved in breathing, when you exchange oxygen and carbon dioxide."
          }
        />
      </div>
    </div>
{/*------------------------------- Respiratory System Parts Starts------------------------------- */}
    <div id="internalparts">
      <br />
      <br />
      <br />
      <br />
      <h1 className="heading mt-5 text-center">Parts of Respiratory System:-</h1>
      <MuscularSystem
      imgcont={"../images/ms.png"}
        heading={"Teachea:-"}
        title={
          "The trachea, also known as the windpipe, is a cartilaginous tube that connects the larynx to the bronchi of the lungs, allowing the passage of air, and so is present in almost all air-breathing animals with lungs. The trachea extends from the larynx and branches into the two primary bronchi."
        }
      />
<MuscularSystem
imgcont={"../images/ms.png"}
        heading={"Alveoli:-"}
        title={
          "Alveoli are tiny air sacs in your lungs that take up the oxygen you breathe in and keep your body going. You have about 480 million alveoli, located at the end of bronchial tubes. When you breathe in, the alveoli expand to take in oxygen. When you breathe out, the alveoli shrink to expel carbon dioxide."
        }
      />
      <MuscularSystem
      imgcont={"../images/ms.png"}
        heading={"Bronchus:-"}
        title={
          "The bronchi are the two large tubes that carry air from your windpipe to your lungs. You have a left and right main bronchus in each lung. After the main bronchi, these tubes branch out into segments that look like tree branches. Many respiratory conditions, such as asthma or bronchitis, can affect your bronchi."
        }
      />
      <MuscularSystem
      imgcont={"../images/ms.png"}
        heading={"Bronchioles:-"}
        title={
          "Bronchioles are air passages inside the lungs that branch off like tree limbs from the bronchi—the two main air passages into which air flows from the trachea (windpipe) after being inhaled through the nose or mouth. The bronchioles deliver air to tiny sacs called alveoli where oxygen and carbon dioxide are exchanged."
        }
      />
      <MuscularSystem
      imgcont={"../images/ms.png"}
        heading={"Diaphragm:-"}
        title={
          "The diaphragm, located below the lungs, is the major muscle of respiration.It is a large, dome-shaped muscle that contracts rhythmically and continually, and most of the time, involuntarily. Upon inhalation, the diaphragm contracts and flattens and the chest cavity enlarges."
        }
      />
      <MuscularSystem
      imgcont={"../images/ms.png"}
        heading={"Left Lung:-"}
        title={
          "The left lung consists of two lobes and is longer and narrower than the right lung. The left lung has a concave region on the mediastinal surface called the cardiac notch that allows space for the heart. There is a cavity, called the pleural cavity, between the parietal and visceral layers of the pleura."
        }
      />
      <MuscularSystem
      imgcont={"../images/ms.png"}
        heading={"Right Lung:-"}
        title={
          "The right lung is larger in volume than the left lung, with a larger transverse dimension due to the heart on the left but a shorter longitudinal dimension due to the liver causing the right hemidiaphragm to be higher than the left."
        }
      />
      </div>


{/*------------------------------- Respiratory System Parts Ends------------------------------- */}


    <div class="container mt-5">
      <div class="row ">
        <div class="col">
        <a href="/learn/learnmore" className="btn px-5">
          <img src="https://img.icons8.com/ios/30/ffffff/left--v1.png" />
          Back
        </a>
        </div>

        <div class="col d-flex justify-content-end mr-5">
        <a href="/learn/skeletalsystem" className="btn px-5">
          
          Next
          <img src="https://img.icons8.com/ios/30/ffffff/right--v1.png" />
        </a>
        </div>
      </div>
      </div>
  </div>

  );
};
export default RespiratorySystem;
