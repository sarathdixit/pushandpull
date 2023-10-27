/* eslint-disable react/no-unescaped-entities */
import { AnimtedImage } from "@/components/animatedImage";
import { motion, useAnimation } from "framer-motion";
import Layout from "@/components/layout";
import HomeHeader from "@/components/HomeHeader";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";
import CaseStudies from "@/components/caseStudies";
import "animate.css/animate.min.css";
import TextAnimation from "@/components/textAnimation";
import animationData from "../../public/assets/lotties/RightArrow.json";
import { initLottie } from "lottie-web";
import lottie from "lottie-web";
import LottieAnimation from "@/components/rightArrowLottie";
import Testimonials from "@/components/testimonials";

export default function Index() {
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // useEffect(() => {
  //   const arrowElement = document.getElementById("arrow-img");

  //   const handleMouseMove = (e) => {
  //     // Calculate the angle between the mouse cursor and the center of the arrow image.
  //     const angle = Math.atan2(
  //       e.clientY - window.innerHeight / 2,
  //       e.clientX - window.innerWidth / 2
  //     );
  //     // Convert the angle from radians to degrees and apply an offset if necessary.
  //     const rotationInDegrees = (angle * 180) / Math.PI + 90;
  //     // Set the rotation of the arrow image.
  //     arrowElement.style.transform = `rotate(${rotationInDegrees}deg)`;
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  const sectionRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150 && !scrolled) {
        setScrolled(true);
        window.scrollTo({
          top: sectionRef.current.offsetTop,
          behavior: "instant",
        });
      }
      // else if (window.scrollY < 150) {
      //   setScrolled(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, sectionRef]);

  return (
    <div>
      <HomeHeader />
      <section id="homeSec1" className="relative z-10 ">
        <img src="/assets/kamal.png" alt="" className="h-screen w-screen" />

        {/* <video
          ref={videoRef}
          src="/assets/Banner video.mp4"
          autoPlay
          muted
          className="aspect-16/9 w-full"
          loop
        ></video> */}
        <div className="absolute z-20 top-[25%] left-[10%]">
          <p className="text-white text-[32px] border-b-2 inline-block">
            PUSH AND PULL
          </p>
          <p className="text-white text-[92px] leading-[50px] mt-6">CREATIVE</p>
          <br />
          <p className="text-white text-[92px] leading-[50px]">TVC</p>
          <br />
          <p className="text-white text-[92px] leading-[50px]">SOCIAL MEDIA</p>
          <br />
          <p className="text-white text-[92px] leading-[50px]">LEADS & SALES</p>
        </div>
      </section>

      <section className="homeSec3 pt-36 pb-36 relative z-10">
        <div className="container">
          <div>
            <TextAnimation></TextAnimation>
            <p>
              We offer a wide range of digital marketing services to help
              businesses of all sizes achieve their growth objectives. Our
              services are designed to be flexible, customizable, and scalable
              to meet your unique needs and budget
            </p>
          </div>
        </div>
      </section>
      <section ref={sectionRef} id="homeSec2" className="relative z-10">
        <motion.div
          initial={{ width: "100%", height: "100%", opacity: "1" }}
          whileInView={{ height: "auto", opacity: "0.9" }}
          transition={{ duration: 1, delay: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="absolute w-full h-full bg-[#eec627]"
        ></motion.div>
        <video
          id="sec2"
          ref={videoRef1}
          src="/assets/Push & Pull Intro.mp4"
          autoPlay
          muted
          className="aspect-16/9 w-full"
          loop
        ></video>
      </section>
      {/* <section className="h-screen relative z-10 bg-white ">
        <div className="">
          <CaseStudies></CaseStudies>
        </div>
      </section> */}
      <section
        id="servicesSection"
        className=" relative z-10 bg-white pt-40 pb-20"
      >
        <div className="container">
          <div
            style={{
              fontFamily: "Helvetica Light",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
            className="grid grid-cols-2  md:py-16  md:px-16"
          >
            <div className="col-span-2 md:col-span-1">
              <h4 style={{ fontSize: "44px" }}>Services</h4>
            </div>
            <div className="col-span-2 md:col-span-1">
              <ul style={{ listStyle: "none", fontSize: "24px" }}>
                <li>Influencer Marketing</li>
                <li>Creative</li>
                <li>Website</li>
                <li>Content Marketing</li>
                <li>Paid Media</li>
                <li>Social Media Optimisation</li>
                <li>Search Engine Optimization</li>
              </ul>
            </div>
          </div>
          {/* <div className="grid grid-cols-5 items-center mb-36">
            <div className=" col-span-1">
              <div className="servicesCard">
                <div>
                  <p>Influencer Relationship, Celebrity Management & PR</p>
                  <div className="lottie-player">
                    <LottieAnimation
                      path="/assets/lotties/RightArrow.json"
                      loop={true}
                      autoplay={true}
                      containerId="animation1-container"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="servicesCard">
                <div>
                  <p>Creative Video production And photography</p>
                  <div className="lottie-player">
                    <LottieAnimation
                      path="/assets/lotties/RightArrow.json"
                      loop={true}
                      autoplay={true}
                      containerId="animation2-container"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="servicesCard">
                <div>
                  <p>Integrated Marketing Solutions</p>
                  <div className="lottie-player">
                    <LottieAnimation
                      path="/assets/lotties/RightArrow.json"
                      loop={true}
                      autoplay={true}
                      containerId="animation3-container"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="servicesCard">
                <div>
                  <p>Digital Content Creation</p>
                  <div className="lottie-player">
                    <LottieAnimation
                      path="/assets/lotties/RightArrow.json"
                      loop={true}
                      autoplay={true}
                      containerId="animation4-container"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="servicesCard">
                <div>
                  <p>Website,Paid Media and Search engine optimization</p>
                  <div className="lottie-player">
                    <LottieAnimation
                      path="/assets/lotties/RightArrow.json"
                      loop={true}
                      autoplay={true}
                      containerId="animation5-container"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section
        style={{
          borderBottomLeftRadius: "125px",
          borderBottomRightRadius: "125px",
        }}
        className="homeSec4  pt-24 pb-56 relative z-10 bg-white"
      >
        <div className="container">
          <div className="grid grid-cols-10 gap-4 items-center md:px-16 mb-36">
            <div className=" col-span-2">
              <p
                style={{
                  fontSize: "50px",
                  lineHeight: "100%",
                  fontFamily: "'Helvetica'",
                  fontWeight: "600",
                }}
              >
                OUR WORK
              </p>
            </div>
            <div className=" col-span-2">
              <div
                style={{
                  position: "relative",
                  width: "max-content",
                  height: "max-content",
                }}
              >
                <img
                  id="arrow-img"
                  src="assets/homeOurWorkArrow.svg"
                  alt="Arrow"
                  style={{
                    width: "120px",
                    height: "120px",
                    transformOrigin: "center center",
                    transform: "rotate(0deg)",
                  }}
                />
              </div>
            </div>
            <div className=" col-span-6">
              <p
                style={{
                  fontSize: "30px",
                  marginBottom: "15px",
                  width: "70%",
                  fontFamily: "'Gillroy_Medium'",
                  lineHeight: "110%",
                }}
              >
                Prepare to Be Pulled Into a World of Creative Brilliance!
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "'Helvetica'",
                  textAlign: "justify",
                }}
              >
                Our digital marketing agency excels at assisting clients in
                overcoming business challenges through expertly crafted
                strategies and one-of-a-kind design solutions.Our approach to
                design and development is geared towards creating impactful,
                engaging brands and immersive digital experiences that yield a
                return on creativity.
              </p>
            </div>
          </div>

          <div className="gifsRow grid grid-cols-4 gap-4 items-center md:px-16 mb-6">
            <div className="col-span-1 ">
              <div className="worksTile1"></div>
            </div>
            <div className=" col-span-1">
              <div className="worksTile2"></div>
            </div>
            <div className=" col-span-1">
              <div className="worksTile3"></div>
            </div>
            <div className=" col-span-1">
              <div className="worksTile4"></div>
            </div>
          </div>
          <div className="gifsRow grid grid-cols-4 gap-4 items-center md:px-16 mb-6">
            <div className=" col-span-1">
              <div className="worksTile5"></div>
            </div>
            <div className=" col-span-1">
              <div className="worksTile6"></div>
            </div>
            <div className=" col-span-1">
              <div className="worksTile7"></div>
            </div>
            <div className=" col-span-1">
              <div className="worksTile8"></div>
            </div>
          </div>

          {/* <div className="gifsRow grid grid-cols-3 gap-4 items-center md:px-16 mb-6">
            <div className=" col-span-1">
              <div>
                <img src="/assets/gifs/hok.gif" alt="" />
              </div>
            </div>
            <div className=" col-span-1">
              <img src="/assets/gifs/samudhrika.gif" alt="" />
            </div>
            <div className=" col-span-1">
              <img src="/assets/gifs/happi.gif" alt="" />
            </div>
          </div> */}

          {/* <div className="gifsRow grid grid-cols-3 gap-4 items-center md:px-16 mb-28">
            <div className=" col-span-1">
              <div>
                <img src="/assets/gifs/srusthi.gif" alt="" />
              </div>
            </div>
            <div className=" col-span-1">
              <img src="/assets/gifs/f45.gif" alt="" />
            </div>
            <div className=" col-span-1">
              <img
                style={{ height: "100%", width: "100%" }}
                src="/assets/gifs/Rhapsody.gif"
                alt=""
              />
            </div>
          </div> */}

          <div className="marquee_wrapper mb-28">
            <div className="marquee">
              <div className="marquee__group">
                <img src="/assets/clients/rha.svg" alt="" />
                <img src="/assets/clients/hok.svg" alt="" />
                <img src="/assets/clients/ikd.svg" alt="" />
                <img src="/assets/clients/f45.svg" alt="" />
                <img src="/assets/clients/sam.svg" alt="" />
              </div>
              <div aria-hidden="true" className="marquee__group">
                <img src="/assets/clients/rha.svg" alt="" />
                <img src="/assets/clients/hok.svg" alt="" />
                <img src="/assets/clients/ikd.svg" alt="" />
                <img src="/assets/clients/f45.svg" alt="" />
                <img src="/assets/clients/sam.svg" alt="" />
              </div>
            </div>
            <div
              style={{ marginTop: "-35px" }}
              className="marquee marquee--reverse"
            >
              <div className="marquee__group">
                <img src="/assets/clients/pv.svg" alt="" />
                <img src="/assets/clients/kalkai.svg" alt="" />
                <img src="/assets/clients/carrot.svg" alt="" />
                <img src="/assets/clients/rv.svg" alt="" />
              </div>
              <div aria-hidden="true" className="marquee__group">
                <img src="/assets/clients/pv.svg" alt="" />
                <img src="/assets/clients/kalkai.svg" alt="" />
                <img src="/assets/clients/carrot.svg" alt="" />
                <img src="/assets/clients/rv.svg" alt="" />
              </div>
            </div>
          </div>
          <Testimonials></Testimonials>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
