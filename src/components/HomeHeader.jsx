import React, { useEffect, useState } from "react";
import CustomImage from "./image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import BrandingText from "./brandingText";
export default function HomeHeader({
  hide = false,
  logo = "/assets/logo.svg",
  header = "",
  menu = "/assets/menu.svg",
  heading = "",
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsopen] = useState(false);
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <div className="p-4 pb-0 !pt-[30px]  lg:!py-8 flex items-center justify-end lg:justify-between max-w-[1480px] m-auto ">
          <div className="relative hidden lg:block">
            <BrandingText heading={heading} hide={hide} />
          </div>
          <div
            className={`!absolute left-4 lg:left-0 right-0 w-full flex lg:justify-center  `}
          >
            <Link href="/">
              <CustomImage
                url={logo}
                className="w-[80px] h-[60px] lg:w-[161px] lg:h-[60px]"
              />
            </Link>
          </div>
          <div onClick={() => setIsopen(true)} className="relative z-50">
            <img
              src={menu}
              alt=""
              className="cursor-pointer w-[35px] h-[35px] "
            />
          </div>
        </div>
        <div className="flex justify-center mt-2 relative right-9 lg:hidden">
          <div className="relative w-[108px]">
            <BrandingText heading={heading} hide={hide} />
          </div>
        </div>
        <div className="bg-black h-[1px] w-[96%] m-auto !mt-[10px] lg:hidden" />
      </header>
      {isOpen && (
        <motion.div
          className="h-screen fixed z-20 bg-black right-0 flex items-center"
          initial={{ width: 0 }}
          whileInView={{ width: window.innerWidth > 600 ? "65%" : "100%" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="w-full">
            <ul className="p-0 w-full">
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                onClick={() => handleNavigation("/")}
              >
                Home
              </li>
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                onClick={() => handleNavigation("/about")}
              >
                About us
              </li>
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                onClick={() => handleNavigation("/services")}
              >
                Services
              </li>
              <li
                className="text-[#FFF] px-20 py-4 border-b border-b-[#fff] text-[24px] cursor-pointer"
                onClick={() => handleNavigation("/blog")}
              >
                Blog
              </li>
              <li
                className="text-[#FFF] px-20 py-4 text-[24px] cursor-pointer"
                onClick={() => handleNavigation("/contact")}
              >
                Contact us
              </li>
            </ul>
            <div className="flex gap-10 ml-20 mt-20">
              <Link
                href={
                  "https://www.linkedin.com/company/94152171/admin/feed/posts/"
                }
              >
                <img src="/assets/linkedin-white.svg" alt="" />
              </Link>
              <Link href={"https://www.instagram.com/push__x__pull/"}>
                <img src="/assets/instagram-white.svg" alt="" />
              </Link>
              <Link
                href={"https://www.facebook.com/profile.php?id=100092271850049"}
              >
                <img src="/assets/facebook-white.svg" alt="" />
              </Link>
            </div>
          </div>
          <motion.div
            onClick={() => setIsopen(false)}
            className="absolute top-10 left-10 lg:right-[130px]"
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
      )}{" "}
    </>
  );
}
