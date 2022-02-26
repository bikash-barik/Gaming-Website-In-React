import React, { useState } from "react";
// import { Carousel } from "antd";
// import { Carousel } from 'react-bootstrap'
import Carousel from "react-bootstrap/Carousel";
import "../../Style/Style.css";

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-25"
            src="./images/vr.png"


            alt="First slide"
            height="596"
          />
          <Carousel.Caption className="text-center top">
            <h1 className="text-center top textFont">
              Powering The Next Generation Of Learning-Based 3D Application
            </h1>
            <p>WebGL, MOBILE, Augmented And Virtual Reality .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-25"
            src="https://www.arena-sayajigunj.com/wp-content/uploads/2021/02/human_anatomy_atlas_1x-1080x675.jpg"
            alt="Second slide"
            height="596"
          />

          <Carousel.Caption className="top">
            <h1 className="textFont">Anatomy(Incredible Experience)</h1>
            <p>The First Cloud Based Virtual 3D Assest Of Human Organs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-25"
            src="./images/vr2.jpg"
            alt="Third slide"
            height="596"
          />

          <Carousel.Caption className="top">
            <h1 className="textFont">Architecture</h1>
            <p>
              Intractive Virtual Platform For Visualising 3D Interior Design.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-25"
            src="https://s27389.pcdn.co/wp-content/uploads/2019/08/vr-ar-potential-1024x440.jpeg.optimal.jpeg"
            alt="Third slide"
            height="596"
          />

          <Carousel.Caption className="top">
            <h1 className="textFont">Engineering</h1>
            <p>
              Virtual 3D Experience For The Machanical Component.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-25"
            src="https://imageio.forbes.com/specials-images/imageserve/60c2eed696889810881fea8c/Extended-Reality-In-Tourism--4-Ways-VR-and-AR-Can-Enhance-The-Travel-Experience/960x0.jpg?fit=bounds&format=jpg&width=960"
            alt="Third slide"
            height="596"
          />

          <Carousel.Caption className="top">
            <h1 className="textFont">Tourism</h1>
            <p>
              Virtual 3D Experience For The Tourist.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
