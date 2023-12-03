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
            Rajhesh Vaidhya
          </p>
          <p className="text-center mt-10">
            Rajhesh Vaidhya, a celebrated Veena artist, epitomizes musical
            excellence in the industry. With our tailored personal branding
            strategies, we elevated his online presence, highlighting his
            remarkable performances, events, and musical ventures. We crafted a
            unique band logo and captivating animation videos, fostering a
            compelling identity that resonates with his audience, amplifying his
            influence in the world of music.
          </p>
          <div className="max-w-[1080px] m-auto flex flex-col gap-10 py-20 ">
            <video src="/assets/rajesh/video1.mp4" controls></video>

            <div className="flex flex-col lg:flex-row gap-10 justify-center">
              <img src="/assets/rajesh/image1.jpg" alt="" />
              <img src="/assets/rajesh/image2.jpg" alt="" />
            </div>
            <div className="flex flex-col lg:flex-row gap-10 justify-center mb-[100px]">
              <img src="/assets/rajesh/image3.jpg" alt="" />
              <img src="/assets/rajesh/image4.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
