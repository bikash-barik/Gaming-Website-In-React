import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light  mb-5 fixed-top">
          <div class="container-fluid">
          <div class="col-sm-12 col-md-2 desktopNone">
            <img
              src="https://convocation.cutm.ac.in/images/cutm%20logo1.png"
              className="cutmLogo"
              width="80px"
              alt="..."
            />

            <img
              src="./images/logo1.png"
              width="350px"
              class="rounded desktopNone gttechLogo bg-dark"
              alt="..."
            />
          </div>
            <a class="navbar-brand mobileNone" href="#">
              <img
                src="./images/logo.png"
                alt=""
                width="150"
                height="64"
                class="d-inline-block align-text-top"
              />
             
            </a>
            <div className="d-flex align-content-center flex-wrap ">
            <h3 className="p-2 sm-text-center">3D Human Anatomy <img src="https://img.icons8.com/ios/26/000000/learn-more.png"/></h3>
            <img
                src="./images/logo1.png"
                alt=""
                width="150"
                height="54"
                class=" gttechLogo bg-dark ml-3 mobileNone"
              />
              </div>
              
          </div>
          
        </nav>
      </div>
    );
  }
}
