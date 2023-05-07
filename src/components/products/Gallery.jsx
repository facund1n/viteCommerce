import { useState } from "react";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import React, { Component } from "react";

const Gallery = ({ data }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={data.image[i]}
            style={{
              marginTop: "2rem",
              width: "100%",
              height: "100%",
            }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="my-4">
      <Slider {...settings}>
        <div>
          <img
            src={data.image[0]}
            className="d-block img-fluid mx-auto "
            style={{ height: "350px" }}
          />
        </div>
        <div>
          <img
            src={data.image[1]}
            className="d-block img-fluid  mx-auto "
            style={{ height: "350px" }}
          />
        </div>
        <div>
          <img
            src={data.image[2]}
            className="d-block img-fluid  mx-auto "
            style={{ height: "350px" }}
          />
        </div>
        <div>
          <img
            src={data.image[3]}
            className="d-block img-fluid  mx-auto "
            style={{ height: "350px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;

/* const Gallery = ({ data }) => {
  let [i, setI] = useState(0);
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={data.image[i]} style={{ height: "100%", width: "100%" }} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} style={{ height: "80%" }}>
      <Col lg={1}>
        <img
          src={data.image[0]}
          className="d-block mx-auto my-auto img-fluid"
        />
      </Col>
      <Col>
        <img src={data.image[1]} className="d-block mx-auto img-fluid" />
      </Col>
      <Col>
        <img src={data.image[2]} className="d-block  mx-auto img-fluid" />
      </Col>
      <Col>
        <img src={data.image[3]} className="d-block mx-auto img-fluid" />
      </Col>
    </Slider>
  );
};

export default Gallery; */
