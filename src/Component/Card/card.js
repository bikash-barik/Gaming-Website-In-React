import React, { Component } from "react";

export default function Card(props) {

    return (
      <>
      <a href={props.link}>
        <div class="card  h-100">
          <img
            src={props.imgs}
            class="card-img-top"
            alt="..."
            style={{ height: "150px" }}
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text ">
             {props.text}
            </p>
          </div>
        </div>
        </a>
      </>
    );

}
