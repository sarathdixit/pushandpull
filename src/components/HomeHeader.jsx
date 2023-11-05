import React from "react";
import CustomImage from "./image";
export default function HomeHeader({
  hide = false,
  logo = "/assets/logo.gif",
  header = "",
  menu = "/assets/menu.svg",
  heading = "",
}) {
  return (
    <>
      <header className={`fixed z-20 w-full bg-[#462D81] ${header}`}>
        <div className="py-8 flex items-center justify-between max-w-[1480px] m-auto px-10">
          <div className="relative">
            <div className="positivity">
              <span className={`positivity__alone ${heading}`}>Branding X</span>
              <div className="positivity__words">
                <span className="change">Grateful</span>
                <span className="change">Humble</span>
                <span className="change">Kind</span>
                <span className="change">Wise</span>
              </div>
            </div>
          </div>
          <div
            className={`!absolute left-0 right-0 w-full flex justify-center  ${
              hide ? "top-[unset]" : "top-7"
            }`}
          >
            <CustomImage
              url={logo}
              className={` ${
                hide ? "w-[200px] h-[80px]" : "w-[250px] h-[120px]"
              }`}
            />
          </div>
          <div>
            <img src={menu} alt="" />
          </div>
        </div>
      </header>
      {/* <motion.div className="w-[65%] h-screen fixed z-20 bg-black right-0 flex items-center">
        <ul className="p-0 w-full">
          <li
            className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
            style={{ fontFamily: "Helvetica" }}
          >
            Home
          </li>
          <li
            className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
            style={{ fontFamily: "Helvetica" }}
          >
            About us
          </li>
          <li
            className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
            style={{ fontFamily: "Helvetica" }}
          >
            Services
          </li>
          <li
            className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
            style={{ fontFamily: "Helvetica" }}
          >
            Blog
          </li>
          <li
            className="text-[#FFF] px-20 py-4 text-[24px] cursor-pointer"
            style={{ fontFamily: "Helvetica" }}
          >
            Contact us
          </li>
        </ul>
        <img
          src="/assets/header/cross.svg"
          alt=""
          className="fixed top-10 right-10 cursor-pointer"
        />
      </motion.div> */}
      {/* <motion.div
        initial={{ width: "100%", height: "100%", opacity: "1" }}
        whileInView={{ height: "auto", opacity: "0.9" }}
        transition={{ duration: 1, delay: 0.8, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ once: true }}
        className="absolute w-full h-full bg-[#eec627]"
      ></motion.div> */}
    </>
  );
}
