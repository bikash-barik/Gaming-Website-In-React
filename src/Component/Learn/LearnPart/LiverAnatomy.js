import React from "react";
import MuscularSystem from "./MuscularSystem";

const LiverAnatomy = () => {
  return (
    <div>
    <div id="about">
      <br />
      <br />
      <br />
      <br />
      <div className="border p-5">
        <MuscularSystem
          heading={"Liver Anatomy"}
          title={
            "The liver is roughly triangular and consists of two lobes: a larger right lobe and a smaller left lobe. The lobes are separated by the falciform ligament, a band of tissue that keeps it anchored to the diaphragm. A layer of fibrous tissue called Glisson's capsule covers the outside of the liver."

            
          }
        />
      </div>
    </div>
{/*------------------------------- Liver Parts Starts------------------------------- */}
    <div id="internalparts">
      <br />
      <br />
      <br />
      <br />
      <h1 className="heading mt-5 text-center">Parts Of Liver:-</h1>
      <MuscularSystem
        heading={"Hepatic Veins:-"}
        title={
          "Hepatic veins are blood vessels that return low-oxygen blood from your liver back to the heart. The veins are key players in the supply chain that moves the blood that delivers nutrients and oxygen to every cell in your body."
        }
      />
<MuscularSystem
        heading={"Aorta:-"}
        title={
          "The aorta is the main artery that carries blood away from your heart to the rest of your body. The blood leaves the heart through the aortic valve. Then it travels through the aorta, making a cane-shaped curve that allows other major arteries to deliver oxygen-rich blood to the brain, muscles and other cells."
        }
      />
      <MuscularSystem
        heading={"Portal Vein:-"}
        title={
          "The hepatic portal vein is a vessel that moves blood from the spleen and gastrointestinal tract to the liver. It is approximately three to four inches in length and is usually formed by the merging of the superior mesenteric and splenic veins behind the upper edge of the head of the pancreas."
        }
      />
      <MuscularSystem
        heading={"Right and Left Hepatic Arteries:-"}
        title={
          "The proper hepatic artery bifurcates into the left and right hepatic arteries at or before reaching the porta hepatis. These are end arteries and supply the left and the right halves of the liver respectively."
        }
      />
      <MuscularSystem
        heading={"Bile Duct:-"}
        title={
          "The bile ducts are a series of thin tubes that go from the liver to the small intestine. Their main job is to allow a fluid called bile to go from the liver and gallbladder into the small intestine, where it helps digest the fats in food."
        }
      />
      <MuscularSystem
        heading={"Gall Bladder:-"}
        title={
          "Gall bladder is a small, pear-shaped organ on the right side of your abdomen, just beneath your liver. The gallbladder holds a digestive fluid called bile that's released into your small intestine."
        }
      />
      <MuscularSystem
        heading={"Hepatic Artery:-"}
        title={
          "The common hepatic artery is one of the final branches of the celiac artery. It supplies oxygen-rich blood to the liver, pylorus, pancreas, and duodenum. It runs on the right inside the lesser sac, a cavity near the middle of the abdomen, and enters the lesser omentum, a folded membrane that attaches the stomach to the liver."
        }
      />
      <MuscularSystem
        heading={"Central Veins System:-"}
        title={
          "The central veins of liver are veins found at the center of hepatic lobules. They receive the blood mixed in the liver sinusoids and return it to circulation via the hepatic veins. The circulation of venous blood is: Portal vein which is formed by the joining of the superior mesenteric vein with the splenic vein drains into the sinusoids of the liver, these all drain into the central veins of liver which drain into the hepatic vein to be returned to IVC."
        }
      />
      <MuscularSystem
        heading={"Bile vien:-"}
        title={
          "It consists of a roughly hexagonal arrangement of plates of hepatocytes radiating outward from a central vein in the center. At the vertices of the lobule are regularly distributed portal triads, containing a bile duct and a terminal branch of the hepatic artery and portal vein."
        }
      />
      </div>


{/*------------------------------- Liver Parts Ends------------------------------- */}



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
export default LiverAnatomy;
