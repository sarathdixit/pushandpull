import React, { useEffect, useState } from "react";
import CustomImage from "./image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
export default function HomeHeader({
  hide = false,
  logo = "/assets/logo.svg",
  header = "",
  menu = "/assets/menu.svg",
  heading = "",
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [windowHeight, setWindowHeight] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    // Function to update the window height when the window is resized
    // const updateWindowHeight = () => {
    //   setWindowHeight(window.innerHeight - 20);
    // };

    // Initially, set the window height
    // updateWindowHeight();

    // Add a window resize event listener to keep the window height up to date
    // window.addEventListener("resize", updateWindowHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("resize", updateWindowHeight);
    };
  }, []);

  const getClassName = () => {
    if (!hide) {
      return scrollPosition >= 100 ? "bg-[#462D81]" : "bg-transparent";
    } else {
      return "";
    }
  };

  return (
    <>
      <header
        className={`fixed z-20 w-full  ${getClassName()} ${header} transition-colors duration-500`}
      >
        <div className="py-8 flex items-center justify-between max-w-[1480px] m-auto px-10">
          <div className="relative">
            <div className="positivity">
              <span className={`positivity__alone ${heading} text-white`}>
                Branding <span className="text-[#eec627]">X</span>
              </span>
              <div className="positivity__words text-white">
                <span className="change text-white">Grateful</span>
                <span className="change text-white">Humble</span>
                <span className="change text-white">Kind</span>
                <span className="change text-white">Wise</span>
              </div>
            </div>
          </div>
          <div
            className={`!absolute left-0 right-0 w-full flex justify-center  `}
          >
            <CustomImage url={logo} className="w-[200px] h-[80px]" />
          </div>
          <div onClick={() => setIsopen(true)} className="relative z-50">
            <img src={menu} alt="" className="cursor-pointer" />
          </div>
        </div>
      </header>
      {isOpen && (
        <motion.div
          className="h-screen fixed z-20 bg-black right-0 flex items-center"
          initial={{ width: 0 }}
          whileInView={{ width: "65%" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="w-full">
            <ul className="p-0 w-full">
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                style={{ fontFamily: "Helvetica" }}
                onClick={() => handleNavigation("/")}
              >
                Home
              </li>
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                style={{ fontFamily: "Helvetica" }}
                onClick={() => handleNavigation("/about")}
              >
                About us
              </li>
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                style={{ fontFamily: "Helvetica" }}
                onClick={() => handleNavigation("/services")}
              >
                Services
              </li>
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                style={{ fontFamily: "Helvetica" }}
                onClick={() => handleNavigation("/")}
              >
                Blog
              </li>
              <li
                className="text-[#FFF] px-20 py-4 text-[24px] cursor-pointer"
                style={{ fontFamily: "Helvetica" }}
                onClick={() => handleNavigation("/")}
              >
                Contact us
              </li>
            </ul>
            <div className="flex gap-10 ml-20 mt-20">
              <img src="/assets/linkedin-white.svg" alt="" />
              <img src="/assets/twitter-white.svg" alt="" />
              <img src="/assets/instagram-white.svg" alt="" />
              <img src="/assets/facebook-white.svg" alt="" />
            </div>
          </div>
          <motion.div
            onClick={() => setIsopen(false)}
            className="absolute top-10 right-[130px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
          >
            <CustomImage
              url={"/assets/header/cross.svg"}
              // className=""
              className="cursor-pointer w-[60px] h-[60px] "
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
