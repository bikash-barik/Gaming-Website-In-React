import React, { Component } from "react";
import Card from "../../Component/Card/card";

export default class EngineeringPart extends Component {
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

          <div class="col-sm-12 col-md-3 mrt-10 mb-5">
            <Card
              imgs={"https://c.tenor.com/IQtwK5kAcKQAAAAd/harga-box-culvert-jual-box-culvert.gif"}
              title={"Syphone and Culvert"}
              text={
                " The digestive system breaks down food into nutrients such as carbohydrates, fats and proteins. They can then be..."
              }
              link={"/3deng/sec_syphoneandculvert"}
            />
          </div>

          <div class="col-sm-12 col-md-3 mrt-10 mb-5">
            <Card
              imgs={"https://c.tenor.com/VqmjMW9KF60AAAAd/dji-agriculture.gif"}
              title={"Agricultural Drone Simulator"}
              text={
                " The digestive system breaks down food into nutrients such as carbohydrates, fats and proteins. They can then be..."
              }
              link={"/3deng/sec_agriculturalDroneSimulator"}
            />
          </div>

          <div class="col-sm-12 col-md-3 mrt-10 mb-5">
            <Card
              imgs={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/337c3951853579.58fc76482621b.gif"}
              title={"Coffee Machine Simulator"}
              text={
                " The digestive system breaks down food into nutrients such as carbohydrates, fats and proteins. They can then be..."
              }
              link={"/3deng/sec_coffeeMachineSimulator"}
            />
          </div>

          <div class="col-sm-12 col-md-3 mrt-10 mb-5">
            <Card
              imgs={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6555a238830641.577126a354b2e.gif"}
              title={"Engineering (Rickshaw)"}
              text={
                " The digestive system breaks down food into nutrients such as carbohydrates, fats and proteins. They can then be..."
              }
              link={"/3deng/sec_eRickshaw"}
            />
          </div>
          </div>
      </div>
    );
  }
}
