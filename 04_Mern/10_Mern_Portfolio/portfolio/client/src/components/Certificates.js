

import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "../styles/CertificatesStyles.css";
import dojoCert from "../images/cert_Dojo.JPG";
import cpaCert from "../images/cert_CPA.jpg";
import awsCert from "../images/cert_AWS.JPG";

function Certificates() {

  return (
    <>
    <Carousel>
      <Carousel.Item 
        interval={7000}
        className="">
        <img
          width="85%"
          className="certImg d-block"
          src={awsCert}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
        interval={7000}
        className="">
        <img
          width="85%"
          className="certImg d-block"
          src={dojoCert}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
        interval={7000}
        className="">
        <img
          width="85%"
          className="certImg d-block"
          src={cpaCert}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
export default Certificates;