import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testiCarouselRef = React.useRef(null);
  const handleNext = () => {
    console.log("clicked");
    if (testiCarouselRef.current) {
      testiCarouselRef.current.next(); // Call the next method on the Carousel
    }
  };

  const handlePrev = () => {
    console.log("clicked");

    if (testiCarouselRef.current) {
      testiCarouselRef.current.prev(); // Call the prev method on the Carousel
    }
  };
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #000",
            paddingBottom: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              margin: "0",
              fontFamily: "Helvetica",
              fontWeight: "900",
              fontSize: "34px",
            }}
          >
            HEAR FROM OUR PARTNERS
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <svg
              onClick={handlePrev}
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                padding: "3px",
                marginRight: "15px",
                cursor: "pointer",
              }}
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9881 17.5565L23.625 25.1935L21.4435 27.375L11.625 17.5565L21.4435 7.73807L23.625 9.92115L15.9881 17.5581V17.5565Z"
                fill="black"
              />
            </svg>

            <div
              style={{
                borderBottom: "1px solid rgba(51, 51, 51, 0.50)",
                height: "100%",
                width: "50px",
              }}
            ></div>
            <svg
              onClick={handleNext}
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                padding: "3px",
                marginLeft: "15px",
                cursor: "pointer",
              }}
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0119 17.5565L11.375 25.1935L13.5565 27.375L23.375 17.5565L13.5565 7.73807L11.375 9.92115L19.0119 17.5581V17.5565Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <Carousel ref={testiCarouselRef} interval={null} indicators={false}>
        <Carousel.Item>
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-2">
              <img src="/assets/quoteImg.svg" alt="" />
            </div>
            <div
              className="col-span-6 testiCenterCol"
              style={{ textAlign: "center", alignSelf: "center" }}
            >
              <p>
                “I have had the pleasure of working with Push & Pull and I am
                thoroughly impressed with their professionalism and dedication.
                Their work is of the highest quality and they consistently
                deliver exceptional results. I have also been amazed by the
                creativity and innovation displayed by Push & Pull in their
                designs and marketing strategies. Their ability to think outside
                the box and create captivating visuals sets them apart from the
                competition. I highly recommend Push & Pull for any needs
                digitally ”
              </p>

              <p>
                <strong>RAJHESH VAIDHYA</strong>
              </p>
            </div>
            <div className="col-span-2"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-2">
              <img src="/assets/quoteImg.svg" alt="" />
            </div>
            <div
              className="col-span-6 testiCenterCol"
              style={{ textAlign: "center", alignSelf: "center" }}
            >
              <p>
                "I started working with Push & Pull from the scratch and I'm
                extremely grateful for all the support they provided. They're
                creativity is incredible. They had proved their efforts by
                showing results. They gave Samudhrika Lakshana a great number
                sales & visibility.
              </p>
              <p>
                Their strategies are really good and I would highly recommend
                Push & Pull to others!"
              </p>
              <p>
                <strong>SRIHARI - SAMUDHRIKA LAKSHANA</strong>
              </p>
            </div>
            <div className="col-span-2"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-2">
              <img src="/assets/quoteImg.svg" alt="" />
            </div>
            <div
              className="col-span-6 testiCenterCol"
              style={{ textAlign: "center", alignSelf: "center" }}
            >
              <p>
                "I have worked with multiple agencies for Kal & Kai, but I got
                to say that Push & Pull is really different. Their creative
                strategies really helped in pushing the brand up. With the help
                of performance marketing, they helped us in achieving 500+ sales
                for the product.
              </p>
              <p>Thank you Push & Pull team!"</p>
              <p>
                <strong>ARAVIND - KAL & KAI</strong>
              </p>
            </div>
            <div className="col-span-2"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimonials;
