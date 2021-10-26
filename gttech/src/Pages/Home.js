import React, { Component } from "react";
import Card from "../Component/Card/card";

export default class Home extends Component {
  render() {
    return (
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <Card
            imgs={"./images/giphy.gif"}
              title={"The Skeletal System"}
              text={
                " A grinding machine, often shortened to grinder, is one of power tools or machine tools used for grinding, it is a type of machining using an abrasive wheel as the cutting tool."
              }
              link={"/second_page"}
            />
          </div>

          <div class="col">
            <Card
            imgs={"./images/brain.gif"}
              title={"Human Brain Anatomy"}
              text={
                " Lathes are one of the most versatile machine tools in the industry, used to perform a variety of machining operations( Ex Facing, Tapering& Boring etc)."
              }
              link={"/second_page1"}
            />
          </div>
          <div class="col">
            <Card
            imgs={"./images/eye.gif"}
              title={"Human Eye Anatomy"}
              text={
                "A radial drilling machine or radial arm press is a geared drill head that is mounted on an arm assembly that can be moved around to the extent of its arm reach."
              }
              link={"/second_page2"}
            />
          </div>
          <div class="col">
            <Card
            imgs={"./images/ear.gif"}
              title={"Hunam Ear Anatomy"}
              text={
                " A feeler gauge or a gap gauge is a tool - or, more commonly, a set of tools - used to check the width of small gaps between objects placed very close together. "
              }
              link={"/second_page2"}
            />
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col">
            <Card
            imgs={"./images/heart-only.gif"}
              title={"Human Heart Anatomy"}
              text={
                " A grinding machine, often shortened to grinder, is one of power tools or machine tools used for grinding, it is a type of machining using an abrasive wheel as the cutting tool."
              }
              link={"/second_page3"}
            />
          </div>

          <div class="col">
            <Card
            imgs={"./images/cardiovascular.gif"}
              title={"Cardiovascular System"}
              text={
                " A grinding machine, often shortened to grinder, is one of power tools or machine tools used for grinding, it is a type of machining using an abrasive wheel as the cutting tool."
              }
              link={"/second_page"}
            />
          </div>
          <div class="col">
            <Card
            imgs={"./images/skin.gif"}
              title={"Anatomy Of The Skin"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>
          <div class="col">
            <Card
            imgs={"./images/muscular system.gif"}
              title={"Muscular System"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
            />
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col">
            <Card
            imgs={"./images/lymphatic system.gif"}
              title={"Lymphatic System"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>
          <div class="col">
            <Card
            imgs={"./images/dental.gif"}
              title={"Dental Anatomy"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>
          <div class="col">
            <Card
            imgs={"./images/respiratory.gif"}
              title={"The Respiratory System"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>

          <div class="col">
            <Card
            imgs={"./images/renal.gif"}
              title={"The Renal System"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col">
            <Card
            imgs={"./images/kidney.gif"}
              title={"Kidney Anatomy"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>

          <div class="col">
            <Card
            imgs={"./images/Liver.gif"}
              title={"Liver Anatomy"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>

          <div class="col">
            <Card
            imgs={"./images/digestive system.gif"}
              title={"Digestive System"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>
          <div class="col">
            <Card
            imgs={"./images/skin.gif"}
              title={"Structure Of Cell"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>
        </div>{" "}
        <div class="row mt-5 mb-5">
          <div class="col">
            <Card
            imgs={"./images/reproductive.gif"}
              title={"Reproductive System"}
              text={
                " 5/2-way valves are used to actuate double acting pneumatic actuators, such as pneumatic cylinders, rodless cylinders, grippers and rotary actuators."
              }
              link={"/second_page"}
            />
          </div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
    );
  }
}
