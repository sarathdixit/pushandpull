/* eslint-disable react/no-unescaped-entities */
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, useAnimation } from "framer-motion";
import HomeHeader from "@/components/HomeHeader";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Index() {
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const items = [1, 2, 3, 4];
  const banner = [
    "/assets/kamal.png",
    "/assets/banner2.png",
    "/assets/banner3.png",
    "/assets/banner3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment the index, or reset it to 0 if it's at the end of the array
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 4000); // 2 seconds

    return () => {
      // Clear the timer when the component unmounts or the index changes
      clearTimeout(timer);
    };
  }, [currentIndex, items.length]);

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div>
      <HomeHeader />
      <section id="homeSec1" className="relative z-10 ">
        <img
          src={banner[currentIndex]}
          alt=""
          className="h-screen w-screen object-cover"
        />
        <div className="absolute z-20 top-[30%] max-w-[1480px] left-0 right-0 px-5 lg:px-5 lg:px-14 m-auto">
          <p className="text-white text-[24px] lg:text-[32px] border-b-2 inline-block !font-bebas">
            PUSH AND PULL
          </p>
          <p className="text-white text-[54px] lg:text-[92px] leading-[28px] lg:leading-[50px] mt-6 !font-bebas">
            CREATIVE
          </p>
          <br />
          <p className="text-white text-[54px] lg:text-[92px] leading-[28px] lg:leading-[50px] !font-bebas">
            TVC
          </p>
          <br />
          <p className="text-white text-[54px] lg:text-[92px] leading-[28px] lg:leading-[50px] !font-bebas">
            SOCIAL MEDIA
          </p>
          <br />
          <p className="text-white text-[54px] lg:text-[92px] leading-[28px] lg:leading-[50px] !font-bebas">
            LEADS & SALES
          </p>
        </div>
      </section>

      <section className="relative z-10 w-full bg-[#462D81]">
        <div className=" max-w-[1480px] mx-auto px-10 py-20 lg:py-[300px]">
          <p className="text-[#eec627] text-[48px] lg:text-[100px] text-center eading-[28px] lg:leading-[93.5px] !font-bebas">
            PUSH&PULL NICHE INCLUDES THE QUALITY SERVICES WE PUSH THAT PULL
            CUSTOMERS TOWARDS US ARE
          </p>
          <p className="text-[#fff] text-[20px] lg:text-[33px] text-center leading-[32px] lg:leading-[48px] mt-[30px] !font-neue !font-[500]">
            We offer a wide range of digital marketing services to help
            businesses of all sizes achieve their growth objectives. Our
            services are designed to be flexible,customizable, and scalable to
            meet your unique needs and budget
          </p>
        </div>
      </section>
      <section id="homeSec2" className="relative z-10">
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
          src="/assets/Banner video.mp4"
          autoPlay
          muted
          className="aspect-16/9 w-full"
          loop
        ></video>
      </section>

      <section className="relative z-10 bg-white">
        <div className="max-w-[1480px] m-auto px-5 lg:px-14 ">
          <div
            style={{
              fontFamily: "Helvetica Light",
              borderBottom: "1px solid black",
            }}
            className="grid grid-cols-2 pb-10 lg:border-none"
          >
            <div className="col-span-2 md:col-span-1 pt-[60px] pb-[20px] lg:py-[100px]">
              <h4 style={{ fontSize: "44px" }}>Services</h4>
            </div>
            <div className="col-span-2 md:col-span-1 lg:py-[100px]">
              <ul
                style={{ listStyle: "none", fontSize: "24px", padding: 0 }}
                className="lg:!pl-[24px]"
              >
                <li
                  className="cursor-pointer !font-neue !font-[500]"
                  onClick={() =>
                    handleNavigation("/services/influencer-marketing")
                  }
                >
                  Influencer Marketing
                </li>
                <li
                  className="mt-4 cursor-pointer !font-neue !font-[500]"
                  onClick={() => handleNavigation("/services/creative")}
                >
                  Creative
                </li>
                <li
                  className="mt-4 cursor-pointer !font-neue !font-[500]"
                  onClick={() => handleNavigation("/services/website")}
                >
                  Website
                </li>
                <li
                  className="mt-4 cursor-pointer !font-neue !font-[500]"
                  onClick={() =>
                    handleNavigation("/services/content-marketing")
                  }
                >
                  Content Marketing
                </li>
                <li
                  className="mt-4 cursor-pointer !font-neue !font-[500]"
                  onClick={() => handleNavigation("/services/paid-media")}
                >
                  Paid Media
                </li>
                <li
                  className="mt-4 cursor-pointer !font-neue !font-[500]"
                  onClick={() =>
                    handleNavigation("/services/social-media-optimisation")
                  }
                >
                  Social Media Optimisation
                </li>
                <li
                  className="mt-4 cursor-pointer !font-neue !font-[500]"
                  onClick={() =>
                    handleNavigation("/services/search-engine-optimisation")
                  }
                >
                  Search Engine Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 bg-white" id="works">
        <div className="max-w-[1480px] m-auto px-5 lg:px-14 ">
          <div
            style={{
              fontFamily: "Helvetica Light",
            }}
            className="grid grid-cols-2 "
          >
            <div className="col-span-2 md:col-span-1  pt-[60px] pb-[20px] lg:py-[100px]">
              <h4 style={{ fontSize: "44px" }}>OUR WORK</h4>
            </div>
            <div className="col-span-2 md:col-span-1   lg:py-[100px]">
              <ul
                style={{ listStyle: "none", padding: 0 }}
                className="lg:!pl-[24px]"
              >
                <li className="text-[30px] !font-neue !font-[500]">
                  Prepare to Be Pulled Into a World of Creative Brilliance!
                </li>
                <li className="mt-2 text-[20px] !font-neue !font-[500]">
                  Our digital marketing agency excels at assisting clients in
                  overcoming business challenges through expertly crafted
                  strategies and one-of-a-kind design solutions.Our approach to
                  design and development is geared towards creating impactful,
                  engaging brands and immersive digital experiences that yield a
                  return on creativity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSec4  pt-18 pb-20 relative z-10 bg-white">
        <div className="max-w-[1480px] m-auto px-12">
          <div className="gifsRow p-0 lg:p-[12px] grid grid-cols-1 lg:grid-cols-4 gap-4 items-center  mb-6">
            <div
              className="col-span-1 "
              onClick={() => handleNavigation("/samudhrika-lakshana")}
            >
              <div className="worksTile1"></div>
            </div>
            <div
              className=" col-span-1"
              onClick={() => handleNavigation("/don-miller")}
            >
              <div className="worksTile2"></div>
            </div>
            <div
              className=" col-span-1"
              onClick={() => handleNavigation("/house-of-kaddhar")}
            >
              <div className="worksTile3"></div>
            </div>
            <div
              className=" col-span-1"
              onClick={() => handleNavigation("/acu-heal")}
            >
              <div className="worksTile4"></div>
            </div>
          </div>
          <div className="gifsRow p-0 lg:p-[12px] grid grid grid-cols-1 lg:grid-cols-4 gap-4 items-center mb-[100px]">
            <div
              className=" col-span-1"
              onClick={() => handleNavigation("/f45")}
            >
              <div className="worksTile5"></div>
            </div>
            <div
              className=" col-span-1"
              onClick={() => handleNavigation("/kal-and-kai")}
            >
              <div className="worksTile6"></div>
            </div>
            <div
              className=" col-span-1"
              onClick={() => handleNavigation("/rajhesh-vaidhya")}
            >
              <div className="worksTile7"></div>
            </div>
            <div
              className=" col-span-1"
              onClick={() => handleNavigation("/hair-and-beyond")}
            >
              <div className="worksTile8"></div>
            </div>
          </div>
          <div className="py-0 lg:py-20">
            <p className=" text-[32px] lg:text-[55px] text-center leading-10 lg:leading-[58px] !font-neue">
              Got questions, weird <br /> thoughts, or just want <br />{" "}
              to say hi?
            </p>
          </div>
          <div className="bg-[#462D81] py-[121px] mb-20 mt-20 lg:mb-[160px] lg:mt-[100px]">
            <p className="text-white text-center text-[32px] lg:text-[55px]  leading-10 lg:leading-[58px] !font-neue">
              Interested in working together?
            </p>
            <Link href="/contact">
              <p className="text-white text-center underline cursor-pointer text-[32px] lg:text-[40px] !font-neue font-[500]">
                Talk to us
              </p>
            </Link>
          </div>

          <div className="marquee_wrapper mb-20 lg:mb-28">
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
          <Testimonials />
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
