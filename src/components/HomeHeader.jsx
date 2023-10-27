import React from "react";
import CustomImage from "./image";
import { color } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
export default function HomeHeader({
  hide = false,
  logo = "/assets/white-logo.svg",
  header = "",
  menu = "/assets/menu.svg",
  heading = "",
}) {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsNavHidden(true);
      } else if (currentScrollY < prevScrollY) {
        setIsNavHidden(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={`fixed z-20 w-full bg-[#462D81] ${header}`}>
      <div className="pt-3 pb-3 flex items-center justify-around">
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
        <CustomImage url={logo} className="w-[100.061px] h-[60.199px]" />
        <div>
          <img src={menu} alt="" />
        </div>
      </div>
      {/* {!hide && (
        <motion.nav
          id="homeSubHeader"
          className={` flex gap-[110px] justify-center subheader ${
            isNavHidden ? "hidden2" : ""
          }`}
          style={{
            fontFamily: "Helvetica Light",
            fontWeight: "400",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <span className="text-white py-2">Our Work</span>
          <Dropdown>
            <Dropdown.Toggle id="services_dropdown">Services</Dropdown.Toggle>

            <Dropdown.Menu id="services_dropdown_menu">
              <Dropdown.Item>Influencer Marketing</Dropdown.Item>
              <Dropdown.Item>Creative</Dropdown.Item>
              <Dropdown.Item>Website</Dropdown.Item>
              <Dropdown.Item>Content Marketing</Dropdown.Item>
              <Dropdown.Item>Paid Media</Dropdown.Item>
              <Dropdown.Item>Social Media Optimisation</Dropdown.Item>
              <Dropdown.Item>Search Engine Optimization</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="text-white py-2">Blog</span>
          <span className="text-white py-2">Case Studies</span>
        </motion.nav>
      )} */}
    </header>
  );
}
