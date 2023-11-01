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
  );
}
