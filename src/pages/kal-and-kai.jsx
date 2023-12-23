import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import React from "react";

export default function Index() {
  return (
    <>
      <HomeHeader
        hide
        header="!bg-[#fff] lg:border-b-2"
        logo="/assets/colorLogo.svg"
        menu="/assets/colorMenu.svg"
        heading="!text-[#462D81]"
      />
      <main className="min-h-screen z-10 relative bg-white">
        <div className="max-w-[1480px] m-auto px-[36px] lg:px-[56px] pt-[200px]">
          <p className="border-b border-b-[#000] pb-2 text-[30px]">Kal & Kai</p>
          <p className="text-center mt-10">
            For Kal & Kai, a wellness brand, we executed a comprehensive brand
            positioning strategy that yielded remarkable results. Through
            targeted performance marketing, we generated over 500 sales,
            strategically positioning the brand. We orchestrated a professional
            photoshoot, devised effective marketing strategies, and optimized
            their online presence. By crafting SEO-optimized blogs, and curating
            captivating social media content, we reduced bounce rates by 30%.
          </p>
          <div className="max-w-[1080px] m-auto flex flex-col gap-10 py-20 ">
            <div className="flex gap-10 justify-center">
              {/* <video src="/assets/kai/video1.mp4" controls></video> */}
              <video src="/assets/kai/video2.mp4" controls></video>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 justify-center mb-[100px]">
              <video src="/assets/kai/video3.mp4" controls></video>
              <video src="/assets/kai/video4.mp4" controls></video>
            </div>
            <video src="/assets/kai/video1.mp4" controls></video>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
