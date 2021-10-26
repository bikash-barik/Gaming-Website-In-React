import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="./images/logo.png"
                alt=""
                width="150"
                height="64"
                class="d-inline-block align-text-top"
              />
             
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
