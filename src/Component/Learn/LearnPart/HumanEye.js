import React from "react";
import MuscularSystem from "./MuscularSystem";

const HumanEye = () => {
  return (
    <div>
      <div id="about">
        <br />
        <br />
        <br />
        <br />
        <div className="border p-5">
          <MuscularSystem
            heading={"Human Eye"}
            title={
              "The human eye is an organ that reacts to light in many circumstances. As a conscious sense organ, the human eye allows vision; rod and cone cells in the retina allow conscious light perception and vision, including color differentiation and the perception of depth. The human eye can distinguish about 10 million colors."
            }
          />
        </div>
      </div>

      <div id="parteye">
        <br />
        <br />
        <br />
        <br />

        <h1 className="heading mt-5 text-center">Parts of Eye:-</h1>
        <MuscularSystem
          heading={"Sclera:-"}
          title={
            "The sclera is the dense connective tissue of the eyeball that forms the 'white' of the eye. It is continuous with the stroma layer of the cornea. The junction between the white sclera and the clear cornea is called the limbus.<br./>The sclera ranges in thickness from about 0.3 millimeters (mm) to 1.0 mm. It is composed of fibrils (small fibers) of collagen that are arranged in irregular and interlacing bundles. "
          }
        />
        <MuscularSystem
          heading={"Pupil:-"}
          title={
            "The pupil of the eye is the black circle in the center of the iris. The iris is the colored portion of the eye with a structure and color unique to each person. <br/>The pupil of the eye is a portal that admits and regulates the flow of light to the retina. This is part of the process which allows us to perceive images. The pupil opens and closes to control the amount of light that is allowed to enter the eye."
          }
        />
        <MuscularSystem
          heading={"Iris:-"}
          title={
            "The iris is a flat and ring-shaped membrane behind the cornea of the eye with an adjustable circular opening in the center called a pupil. This is the structure that provides an individual with eye color.Together with the pupil, the iris is responsible for regulating the amount of light that gets into the eye. "
          }
        />
        <MuscularSystem
          heading={"Lens:-"}
          title={
            "The lens is composed of transparent, flexible tissue and is located directly behind the iris and the pupil. It is the second part of your eye, after the cornea, that helps to focus light and images on your retina. Because the lens is flexible and elastic, it can change its curved shape to focus on objects and people that are either nearby or at a distance. The lens provides 25-35% of your eye’s focusing power.The ciliary muscles, which are part of the ciliary body, are attached to the lens and contract or release to change the lens shape and curvature."
          }
        />
        <MuscularSystem
          heading={"Ciliary body:-"}
          title={
            "Structurally, the ciliary body is a ring of tissue that surrounds the iris and connects it to the choroid. The ciliary body can’t be seen when you look at the eye, because it’s located behind the iris and sclera, which is the white part of the eye.Structures contained within the ciliary body include:The ciliary muscle, which influences the shape of the lens inside the eye.  The ciliary processes, which are about 70 ridges in the ciliary body that contain cells involved in the production of the aqueous humor in the eye that controls eye pressure"
          }
        />
        <MuscularSystem heading={"Choroid:-"} title={"The choroid supplies the outer retina with nutrients and maintains the temperature and volume of the eye. The choroidal circulation, which accounts for 85% of the total blood flow in the eye, is a high-flow system with relatively low oxygen content. The choroidal circulation is controlled mainly by sympathetic innervation and is considered not to be autoregulated. This lack of autoregulation makes the choroid more dependent on the ocular perfusion pressure."} />
        <MuscularSystem 
        heading={"Retina:-"} 
        title={"Light-sensitive tissue that lines the back of the eye. It contains millions of photoreceptors (rods and cones) that convert light rays into electrical impulses that are relayed to the brain via the optic nerve."} />
        <MuscularSystem 
        heading={"Forvea Centralis:-"} 
        title={"The fovea centralis, also generally known as the fovea (the term fovea comes from the Latin, meaning pit or pitfall), is a part of the eye, located in the center of the macula region of the retina.The fovea is responsible for sharp central vision (also called foveal vision), which is necessary for humans for reading, driving, and any activity where visual detail is of primary importance. "} />
        <MuscularSystem 
        heading={"Central Vasculature:-"} 
        title={"The eyeball receives arterial blood primarily via the ophthalmic artery. This is a branch of the internal carotid artery, arising immediately distal to the cavernous sinus. The ophthalmic artery gives rise to many branches, which supply different components of the eye. The central artery of the retina is the most important branch – supplying the internal surface of the retina. Occlusion of this artery will quickly result in blindness."} />
        <MuscularSystem 
        heading={"Optic nerve:-"} 
        title={"The optic nerve is a bundle of more than 1 million nerve fibers. Also known as the second cranial nerve or cranial nerve II, it is the second of several pairs of cranial nerves. It transmits sensory information for vision in the form of electrical impulses from the eye to the brain. Damage to an optic nerve can cause vision loss. The type of vision loss and how severe it is depends on where the damage occurs. It may affect one or both eyes."} />
        <MuscularSystem 
        heading={"Cornea:-"} 
        title={"The cornea is your eye’s clear, protective outer layer. Along with the sclera (the white of your eye), it serves as a barrier against dirt, germs, and other things that can cause damage. It also plays a key role in vision. As light enters your eye, it gets refracted, or bent, by the cornea’s curved edge. This helps determine how well your eye can focus on objects close-up and far away."} />
        
      </div>

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

export default HumanEye;
