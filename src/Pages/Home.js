import React, { Component } from "react";
import Card from "../Component/Card/card";

export default class Home extends Component {
  render() {
    return (
      <div class="container mt-5">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <h3 class=" mb-5  text-white">Recent Experience</h3>
          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/heart-only.gif"}
              title={"Human Heart Anatomy"}
              text={
                " The heart is made up of four chambers: two upper chambers known as the left atrium and right atrium and two lower..."
              }
              link={"/3d/sec_humanhart"}
            />
          </div>
          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/digestive system.gif"}
              title={"Digestive System"}
              text={
                " The digestive system breaks down food into nutrients such as carbohydrates, fats and proteins. They can then be..."
              }
              link={"/3d/sec_digestivesystem"}
            />
          </div>
          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/eye.gif"}
              title={"Human Eye Anatomy"}
              text={
                "The human eye is an organ that reacts to light in many circumstances. As a conscious sense organ, the human eye allows vision; rod and cone cells ..."
              }
              link={"/3d/second_page2"}
            />
          </div>
        </div>
        <div class="row mt-5 mb-5 mrbt-10">
          <h3 class="row mt-5 mb-5 mrbt-10 text-white">Experience</h3>

          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/ear.gif"}
              title={"Human Ear Anatomy"}
              text={
                "The human ear, like that of other mammals, contains sense organs that serve two quite different functions: that of hearing  ..."
              }
              link={"/3d/second_page3"}
            />
          </div>

          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/lymphatic system.gif"}
              title={"Lymphatic System"}
              text={
                " The lymphatic system is a network of tissues, vessels and organs that work together to move a colorless, watery fluid called lymph back into ... "
              }
              link={"/3d/second_page"}
            />
          </div>
          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/skin.gif"}
              title={" Anatomy Of The Skin "}
              text={
                " A cell is the smallest living thing in the human organism, and all living structures in the human body are made of cells. There are hundreds..."
              }
              link={"/3d/second_page1"}
            />
          </div>
          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/respiratory.gif"}
              title={"The Respiratory System"}
              text={
                " Your lungs are part of the respiratory system, a group of organs and tissues that work together to help you breathe, ...."
              }
              link={"/3d/sec_respiratorysystem"}
            />
          </div>
        </div>

        <div class="row mt-5 mb-5 mrbt-10">
          <div class="col-sm-12 col-md-3 mrt-10">
            <Card
              imgs={"../images/muscular system.gif"}
              title={"Muscular System"}
              text={
                " The muscular system is an organ system consisting of skeletal, smooth and cardiac muscles. It permits movement of the body, ..."
              }
              link={"/3d/sec_muscularsystem"}
            />
          </div>
        </div>
        <div className="commign-soon">
          <div class="row mt-5 mb-5 mrbt-10">
            <h3 class="mb-5 mrbt-10 text-white">Comming Soon.....</h3>

            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/cardiovascular.gif"}
                title={"Cardiovascular System"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>

            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/giphy.gif"}
                title={"The Skeletal System"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/renal.gif"}
                title={"The Renal System"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/brain.gif"}
                title={"Human Brain Anatomy"}
                text={"Comming Soon ...."}
                link={"/3d/1"}
              />
            </div>
          </div>
          <div class="row mt-5 mb-5 mrbt-10">
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/kidney.gif"}
                title={"Kidney Anatomy"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>

            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/Liver.gif"}
                title={"Liver Anatomy"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>

            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/skin.gif"}
                title={"Structure of Cell"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/dental.gif"}
                title={"Dental Anatomy"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>
          </div>{" "}
          <div class="row mt-5 mb-5 mrbt-10">
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/reproductive.gif"}
                title={"Reproductive System"}
                text={" Comming Soon ...."}
                link={"/3d/"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
