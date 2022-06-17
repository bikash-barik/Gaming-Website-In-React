import React, { Component } from "react";

export default class HeaderEngg extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light mb-5 fixed-top" style={{background:" #222"}}>
          <div class="container-fluid">
          <div class="col-sm-12 col-md-2 desktopNone">
            <img
              // src="https://convocation.cutm.ac.in/images/cutm%20logo.png"
              src="../images/logo.png"

              style={{background:" #FFF"}}
              className="cutmLogo rounded"
              alt="..."
            />

            <img
              src="../images/logo1.png"
              width="350px"
              class="rounded desktopNone gttechLogo bg-dark"
              alt="..."
            />
          </div>
            <a class="navbar-brand mobileNone" href="/">
              <img
                src="../images/CUTMLogo.png"
                alt=""
                width="150"
                height="54"
                class="d-inline-block align-text-top rounded"
              />
             
            </a>
            <div className="d-flex align-content-center flex-wrap ">
            <h3 className="p-2 sm-text-center text-white">3D Engineering <img  src="https://img.icons8.com/ios/26/ffffff/learn-more.png"/></h3>
            <img
                src="../images/logo1.png"
                alt=""
                width="150"
                height="54"
                class=" gttechLogo bg-dark ml-3 mobileNone rounded"
              />
              </div>
              
          </div>
          
        </nav>
      </div>
    );
  }
}
