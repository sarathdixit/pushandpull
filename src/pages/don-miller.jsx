import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import React from "react";

export default function Index() {
  return (
    <>
      <HomeHeader
        hide
        header="!bg-[#fff] border-b-2"
        logo="/assets/colorLogo.svg"
        menu="/assets/colorMenu.svg"
        heading="!text-[#462D81]"
      />
      <main className="min-h-screen z-10 relative bg-white">
        <div className="max-w-[1480px] m-auto px-[56px] pt-[200px]">
          <p className="border-b border-b-[#000] pb-2 text-[30px]">
            Don Miller
          </p>
          <p className="text-center mt-10">
            For Don Miller, a leading Men's Leather Accessories Brand in the
            Retail & Apparel industry, epitomizes timeless elegance and
            craftsmanship. We curated a captivating visual narrative through a
            meticulously planned photoshoot. Our innovative ideas and artistic
            direction showcased the brand's exquisite range of leather
            accessories.
          </p>
          <div className="max-w-[1080px] m-auto flex flex-col gap-10 py-20 ">
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
              <img src="/assets/miller/image1.jpg" alt="" />
              <img src="/assets/miller/image2.jpg" alt="" />
              <img src="/assets/miller/image3.jpg" alt="" />
            </div>
            <div className="flex flex-col lg:flex-row  gap-10 justify-center mb-[100px]">
              <img src="/assets/miller/image4.jpg" alt="" />
              <img src="/assets/miller/image5.jpg" alt="" />
              <img src="/assets/miller/image6.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
