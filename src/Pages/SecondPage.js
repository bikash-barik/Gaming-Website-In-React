import React, { Component } from "react";
import BenchGrindingMachine from "../Component/BenchGrindingMachine";




export default class SecondPage extends Component {
  render() {
    return (
      <div>
        <BenchGrindingMachine
          title={"The Skeletal System"}
          text={
            " A grinding machine, often shortened to grinder, is one of power tools or machine tools used for grinding, it is a type of machining using an abrasive wheel as the cutting tool."
          }
          link={"/massages"}
        />
      </div>
    );
  }
}




  export const SecondPage1 = () => {
    return (
        <div>
          <BenchGrindingMachine
           title={"Human Brain Anatomy"}
           text={
             " Lathes are one of the most versatile machine tools in the industry, used to perform a variety of machining operations( Ex Facing, Tapering& Boring etc)."
           }
            link={"/massages"}
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
              "A radial drilling machine or radial arm press is a geared drill head that is mounted on an arm assembly that can be moved around to the extent of its arm reach."
            }
            link={"/massages"}
          />
        </div>
      );
  };


  export const SecondPage3 = () => {
    return (
        <div>
          <BenchGrindingMachine
            title={"Hunam Ear Anatomy"}
            text={
              " A feeler gauge or a gap gauge is a tool - or, more commonly, a set of tools - used to check the width of small gaps between objects placed very close together. "
            }
            link={"/massages"}
          />
        </div>
      );
  };
  