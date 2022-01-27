import React, { Component } from "react";
import BenchGrindingMachine from "../Component/BenchGrindingMachine";




export default class SecondPage extends Component {
  render() {
    return (
      <div>
        <BenchGrindingMachine
          title={"Lymphatic System"}
          text={
            " The lymphatic system is a network of tissues, vessels and organs that work together to move a colorless, watery fluid called lymph back into your circulatory system. Some 20 liters of plasma flow through your body’s arteries and smaller arteriole blood vessels and capillaries every day. The lymphatic system collects this excess fluid, now called lymph, from tissues in your body and moves it along until it's ultimately returned to your bloodstream."
          }
          link={"/view2"}
        />
      </div>
    );
  }
}




  export const SecondPage1 = () => {
    return (
        <div>
          <BenchGrindingMachine
           title={"Anatomy Of The Skin "}
           text={
             "  A cell is the smallest living thing in the human organism, and all living structures in the human body are made of cells. There are hundreds of different types of cells in the human body, which vary in shape (e.g. round, flat, long and thin, short and thick) and size (e.g. small granule cells of the cerebellum in the brain (4 micrometers), up to the huge oocytes (eggs) produced in the female reproductive organs (100 micrometers) and function."
           }
            link={"/view1"}
          />
        </div>
      );
  };


  export const SecondPage2 = () => {
    return (
        <div>
          <BenchGrindingMachine
            title={"Human Eye Anatomy"}
            text={
              "The human eye, like that of other mammals, contains sense organs that serve two quite different functions: that of hearing and that of postural equilibrium and coordination of head and eye movements. Anatomically, the ear has three distinguishable parts: the outer, middle, and inner ear. The outer ear consists of the visible portion called the auricle, or pinna, which projects from the side of the head, and the short external auditory canal..."
            }
            link={"/view3"}
          />
        </div>
      );
  };


  export const SecondPage3 = () => {
    return (
        <div>
          <BenchGrindingMachine
            title={"Human Ear Anatomy"}
            text={
              " A feeler gauge or a gap gauge is a tool - or, more commonly, a set of tools - used to check the width of small gaps between objects placed very close together. "
            }
            link={"/view4"}
          />
        </div>
      );
  };
  


  
  export const SecHumanHeart = () => {
    return (
        <div>
          <BenchGrindingMachine
            title={"Human Heart Anatomy"}
            text={
              "The heart is made up of four chambers: two upper chambers known as the left atrium and right atrium and two lower chambers called the left and right ventricles. It is also made up of four valves: the tricuspid, pulmonary, mitral and aortic valves. "
            }
            link={"/viewhumanhart"}
          />
        </div>
      );
  };
  