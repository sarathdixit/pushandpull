import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MobileSection from "../../components/mobile-section";

const Index = () => {
  const router = useRouter();
  const handleNavigation = (route) => {
    router.push(route);
  };
  return (
    <>
      <HomeHeader
        hide
        header="!bg-[#fff] lg:border-b-2"
        logo="/assets/colorLogo.svg"
        menu="/assets/colorMenu.svg"
        heading="!text-[#462D81]"
      />
      <main
        style={{
          paddingTop: "8rem",
          fontFamily: "Helvetica",
        }}
        className="relative z-10 bg-white lg:min-h-screen mb-20"
      >
        <div className="container mt-10 hidden lg:block">
          <div className="border-b-2 border-b-[#707070]">
            <p className="text-[32px]">Services</p>
          </div>
          <div className="pt-10 pb-20 ">
            <div className="flex flex-col lg:grid gap-[20px] lg:grid-cols-4">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  handleNavigation("/services/influencer-marketing")
                }
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#462D81] " />
                <p className="text-[24px] font-[400] m-0">
                  Influencer Marketing
                </p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleNavigation("/services/creative")}
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#462D81] " />
                <p className="text-[24px] font-[400] m-0">Creative</p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleNavigation("/services/website")}
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#462D81] " />
                <p className="text-[24px] font-[400] m-0">Website</p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleNavigation("/services/content-marketing")}
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#462D81] " />
                <p className="text-[24px] font-[400] m-0">Content Marketing</p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleNavigation("/services/paid-media")}
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#462D81] " />
                <p className="text-[24px] font-[400] m-0">Paid Media</p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  handleNavigation("/services/social-media-optimisation")
                }
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#462D81] " />
                <p className="text-[24px] font-[400] m-0">
                  Social Media Optimisation
                </p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer col-span-2"
                onClick={() =>
                  handleNavigation("/services/search-engine-optimisation")
                }
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#462D81] " />
                <p className="text-[24px] font-[400] m-0">
                  Search Engine Optimization
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[64px] lg:hidden">
          <MobileSection heading={"Services"} description={""} />
          <div className="flex justify-end mr-10">
            <div>
              <div
                className=" cursor-pointer"
                onClick={() =>
                  handleNavigation("/services/influencer-marketing")
                }
              >
                <p className="text-[18px] font-[500] mt-3 !font-neue m-0">
                  Influencer Marketing
                </p>
              </div>
              <div
                className=" cursor-pointer"
                onClick={() => handleNavigation("/services/creative")}
              >
                <p className="text-[18px] font-[500] mt-3 !font-neue m-0">
                  Creative
                </p>
              </div>
              <div
                className=" cursor-pointer"
                onClick={() => handleNavigation("/services/website")}
              >
                <p className="text-[18px] font-[500] mt-3 !font-neue m-0">
                  Website
                </p>
              </div>
              <div
                className=" cursor-pointer"
                onClick={() => handleNavigation("/services/content-marketing")}
              >
                <p className="text-[18px] font-[500] mt-3 !font-neue m-0">
                  Content Marketing
                </p>
              </div>
              <div
                className=" cursor-pointer"
                onClick={() => handleNavigation("/services/paid-media")}
              >
                <p className="text-[18px] font-[500] mt-3 !font-neue m-0">
                  Paid Media
                </p>
              </div>
              <div
                className=" cursor-pointer"
                onClick={() =>
                  handleNavigation("/services/social-media-optimisation")
                }
              >
                <p className="text-[18px] font-[500] mt-3 !font-neue m-0">
                  Social Media Optimisation
                </p>
              </div>
              <div
                className=" cursor-pointer "
                onClick={() =>
                  handleNavigation("/services/search-engine-optimisation")
                }
              >
                <p className="text-[18px] font-[500] mt-3 !font-neue m-0">
                  Search Engine Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Index;
