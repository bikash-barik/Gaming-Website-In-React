import React from "react";
import MuscularSystem from "./MuscularSystem";

const SkinAnatomy = () => {
  return (
    <div className="">
      <div id="about">
        <br />
        <br />
        <br />
        <br />
        <div className="border p-5">
          
          <MuscularSystem
          imgcont={"../images/ms.png"}
            heading={"Skin Anatomy"}
            title={
              "The muscular system is an organ system consisting of skeletal, smooth and cardiac muscles. It permits movement of the body, maintains posture and circulates blood throughout the body. ... Together with the skeletal system in the human, it forms the musculoskeletal system, which is responsible for movement of the body."
            }
          />
        </div>
      </div>

      <div id="partskin">
        <br />
        <br />
        <br />
        <br />

        <h1 className="heading mt-5 text-center">Parts of Skin:-</h1>
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Stratum Basale:"} 
        title={" The stratum basale is a single row of columnar or cuboidal cells resting on the basement membrane zone that separates the epidermis from the dermis. Most of these cells are keratinocytes that are constantly reproducing and pushing upward to replenish the epidermal cells above."} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Keratinocyte:"} 
        title={" Keratinocytes are the main components of the epidermis. From the basal layer (stratum basale), there is a continuous formation of new cells, that scale off from the stratum corneum."} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Melanocyte:"} 
        title={"Melanocytes (pigment cells) live in the stratum basale of the epidermis, between the keratinocytes. The main function of a melanocyte is the production of melanin, which is stored in the neighbouring basal keratinocytes. Dark and light skintones have the same amount of melanocytes. The production of melanin is higher in a dark skin. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Merkel cell:"} 
        title={"Merkel-cells have a tactile function. A special type of cell found right below the epidermis (top layer of skin). These cells are very close to the nerve endings that receive the sensation of touch and may be involved in touch. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Langerhans cell:"} 
        title={"Langerhans cells are antigen-presenting cells. They play an important role in the generation of an immune response against foreign antigens. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Stratum corneum:"} 
        title={" The Stratum corneum (horny layer) consists of a nuclear, completely keratinised cells, with in between them a layer consisting of keratin and lipids that let through very little water."} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Basement membrane of epidermis:"} 
        title={" The basement membrane is a complex structure that forms the boundary between epidermis and dermis. The function of the basement membrane is to ensure that the dermis and epidermis are attached to each other."} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Fibroblast:"} 
        title={"Fibroblasts synthetise collagen, elastin, proteins and mucopolysaccharids. Together these contribute to the volume and flexibility of the dermis. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Dermal matrix:"} 
        title={"The dermal matrix consists of collagen, elastin, proteins and mucopolysaccharids, that are produced by fibroblasts. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Hair:"} 
        title={"Hairs are thin, keratinised skin annexes that are formed in the hair follicle. They consist of three layers: marrow, cortex and cuticle. the amount of melanin in the marrow determines the colour of the hair. Marrow can only be found in terminal hair (scalp, eye brows, armpits, genitalia) and is absent in the vellus hair. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Musculus Arrector pili:"} 
        title={" Smooth muscle fibers that are attached to the hair follicle. When tightened, they cause goose bumps."} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Sebaceous gland:"} 
        title={"Sebaceous glands arise from hair follicles and are often connected to the hair follicle; the gland then drains into the hair follicle. Because of the sebacious glands, the skin is covered with a thin layer of fat. The production of sebum is influenced by androgens. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Apocrine sweat gland:"} 
        title={"These glands are influenced by androgens and can be found in the external ear canal, armpit, nipple and anogenital area. The gland drains just above the drainage of the sebaceous gland. These glands contribute to the body odour. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Eccrine sweat gland:"} 
        title={" These glands are present all over the body and play a role in amongst others the maintenance of elektrolyte balance and thermo regulation."} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Nerve:"} 
        title={"Conducts signals from the skin to the brains. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Dermal vessel:"} 
        title={"Dermal vessels supply the skin of nutrients and play an important role in thermoregulation and supply of amongst others leukocytes that are involved in the defense and inflammatory processes in the skin. "} />
        
        <MuscularSystem
        imgcont={"../images/ms.png"} 
        heading={"Fat in subcutis"} 
        title={"The subcutis consists of fat cells, arranged in a network of connective tissue. Blood vessels, nerves and lymphatics can be found in this network. The fat tissue functions as a resource of energy and has an isolating and protective function. "} />
        
        
      </div>

      <div class="container mt-5">
        <div class="row ">
          <div class="col">
            <a href="/learn/muscularsystem" className="btn px-5">
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

export default SkinAnatomy;
