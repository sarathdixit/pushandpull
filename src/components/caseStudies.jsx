import React from "react";

import Carousel from "react-bootstrap/Carousel";
const CaseStudies = () => {
  return (
    <Carousel
      className="caseStudiesCarousel"
      controls={false}
      pause={false}
      interval={2500}
    >
      <Carousel.Item>
        <img src="/assets/cs1.svg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/cs2.svg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/cs3.svg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/cs4.svg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CaseStudies;
