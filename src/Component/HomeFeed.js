import React, { useState } from "react";
import { Button, Card, Collapse, Form } from "react-bootstrap";
import "../Style/Feed.css";


export const FeedHeader = (props) => {
  return (
    <>
      <div class="container header-blue">
        <div class=" hero">
          <div class=" row border position-sticky">
            <div class="col-12 col-lg-6 col-xl-6 offset-xl-1 text-white">
              <h1>{props.heading}</h1>
              <p className="fw-bold ">
               {props.destitle}
                <br />
              </p>
              <p>
               {props.title}
              </p>

              <button id="foot">
                <button class="button-os">
                  <a href={props.leftbtnlink}>{props.leftbtn}</a>
                </button>
              </button>
              <button id="foot">
                <button class="button-os">
                  <a href={props.rightbtnlink}>{props.rightbtn}</a>
                </button>
              </button>
            </div>
            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div class="iphone-mockup">
                <img class="device" src={props.tdimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};


export const FeedHomeRight = (props) => {
  return (
    <>
     <div class="two_column">
        <div class="container ">
          <div class="row d-flex ">
            <div class="col-lg-6 col-md-12 ">
              <img
                src={props.tdimg}
                alt=""
              />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <p class="text-light">
                  <strong>
                  {props.heading}
                  </strong>
                </p>
                <p class="text-light">
                {props.destitle}
                </p>
                <a href={props.exclink} class="explore-btn">
                  EXPLORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <h1>{props.header}</h1>
      </div>
    </>
  );
};



export const FeedHomeLeft = (props) => {
  return (
    <>
     <div class="two_column">
        <div class="container ">
          <div class="row d-flex flex-md-row-reverse">
            <div class="col-lg-6 col-md-12 ">
              <img
                src={props.tdimg}
                alt=""
              />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <p class="text-light">
                  <strong>
                  {props.heading}
                  </strong>
                </p>
                <p class="text-light">
                {props.destitle}
                </p>
                <a href={props.exclink} class="explore-btn">
                  EXPLORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <h1>{props.header}</h1>
      </div>

    </>
  );
};

