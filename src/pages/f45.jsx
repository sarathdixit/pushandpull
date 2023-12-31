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
          <p className="border-b border-b-[#000] pb-2 text-[30px]">F45</p>
          <p className="text-center mt-10">
            For F45 Training Gym in Nungambakkam, KNK Road, we successfully
            revitalized their franchise prospects. By spotlighting their expert
            trainers, live classes, and quick 40-second workouts, we
            strategically reached out to the expat community near the US
            consulates, diplomats, and elite individuals. Our efforts resulted
            in an impressive 200+ leads and a remarkable 10% conversion rate for
            trial classes, driving growth and engagement.
          </p>
          <div className="max-w-[1080px] m-auto flex  gap-10 py-20 ">
            <div className="flex gap-10 justify-center flex-col">
              <video src="/assets/f45/video1.mp4" controls></video>
              <img src="/assets/f45/image2.jpg" alt="" />
            </div>
            <div className="flex gap-10 justify-center mb-[100px] flex-col">
              <video src="/assets/f45/video1.mp4" controls></video>
              <img src="/assets/f45/image4.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
