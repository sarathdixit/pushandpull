import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import React from "react";

const Index = () => {
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
          fontFamily: "Helvetica",
        }}
        className="relative z-10 bg-white pt-[180px] pb-20 min-h-screen"
      >
        <div className="text-center font-bebas text-[80px] mt-[100px]">
          Coming Soon..
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Index;
