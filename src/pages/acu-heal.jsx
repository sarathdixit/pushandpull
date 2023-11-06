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
          <p className="border-b border-b-[#000] pb-2 text-[30px]">Acu Heal</p>
          <p className="text-center mt-10">
            For Acu Heal, a leading healthcare brand, we spearheaded a targeted
            performance marketing campaign focused on regional lead generation.
            Leveraging compelling creatives, we optimized their social media
            presence and implemented strategic Google Ads initiatives. Through
            our tailored approach, Acu Heal experienced a significant boost in
            qualified leads within their target regions. Our creative approaches
            improved their online presence but also maximized their outreach,
            enhancing their market and growth.
          </p>
          <div className="max-w-[1080px] m-auto py-20">
            <div className="flex gap-10 justify-center flex-col items-center ">
              <img src="/assets/acu/image1.jpg" alt="" />
              <img src="/assets/acu/image2.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
