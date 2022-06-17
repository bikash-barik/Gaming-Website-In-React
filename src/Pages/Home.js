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
                imgs={"../images/kidney.gif"}
                title={"Kidney Anatomy"}
                text={" The kidneys are highly vascular (contain a lot of blood vessels) and are divided into three main regions: the renal cortex (outer region which ..."}
                link={"/3d/sec_kidney"}
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
        <div class="row mt-5 mb-5 mrbt-10">
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
              imgs={"../images/respiratory.gif"}
              title={"The Respiratory System"}
              text={
                " Your lungs are part of the respiratory system, a group of organs and tissues that work together to help you breathe, ...."
              }
              link={"/3d/sec_respiratorysystem"}
            />
          </div>
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
        </div>
        <div class="row mt-5 mb-5 mrbt-10">
          <h3 class="row mt-5 mb-5 mrbt-10 text-white">Experience</h3>

          

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
                imgs={"../images/NewGif/neuron.gif"}
                title={"The Neuron System"}
                text={" Neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system, the cells responsible for receiving  ..."}
                link={"/3d/sec_neuron"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/NewGif/Dental.gif"}
                title={"Dental Anatomy"}
                text={" Dental anatomy examines the structures that make up the teeth of a human being. Those studying dental anatomy will learn the classification..."}
                link={"/3d/sec_dental"}
              />
            </div>
            
        </div>
        <div class="row mt-5 mb-5 mrbt-10">
            
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/NewGif/Structure of Cell.gif"}
                title={"Structure of Cell"}
                text={"A cell consists of three parts: the cell membrane, the nucleus, and, between the two, the cytoplasm. Within the cytoplasm lie intricate ..."}
                link={"/3d/sec_humancell"}
              />
            </div>
            <div class="col-sm-12 col-md-3 mrt-10">
              <Card
                imgs={"../images/NewGif/human reproductive.gif"}
                title={"Reproductive System"}
                text={"(REE-proh-DUK-tiv SIS-tem) The tissues, glands, and organs involved in producing offspring (children). In women, the reproductive system ..."}
                link={"/3d/sec_reproductive"}
              />
            </div>
          </div>
        
        {/* <div className="commign-soon">
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

            
            
          </div>{" "}
         
        </div> */}
      </div>
    );
  }
}
