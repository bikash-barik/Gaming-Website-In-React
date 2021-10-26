import React, { Component, useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function Massages() {
  return (
    <div>
      <div class="container">
      <div className="h5 gofornext float-end"><a href="/"><img src="https://img.icons8.com/ios/30/3212ff/left--v1.png"/>Back</a></div>

        <div class="col">
        {/* <iframe frameborder="0" src="https://itch.io/embed/1165758" width="552" height="167"><a href="https://we-make-our-own-world.itch.io/human-eye-anatomy">Human Eye Anatomy by We_Make_Our_Own_World</a></iframe> */}
          <iframe
            src="https://i.simmer.io/@HeyAkash/lymphatic-system"
            style={{ width: "100%", height: "85vh", border: "0" }}
          ></iframe>
        </div>

        {/* <div class="row">
          <div class="col-12 justify-content-end align-items-end float-end">
            <img src="https://img.icons8.com/material/50/000000/enter-2--v1.png" />
          </div>
          <div class="col-12 justify-content-end align-items-end float-end">
            <img src="https://img.icons8.com/ios/50/000000/info--v3.png" />
          </div>
          <div class="col-12">
            <div className="col-6"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
