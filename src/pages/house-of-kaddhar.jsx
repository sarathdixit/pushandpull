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
            House of Khaddar
          </p>
          <p className="text-center mt-10">
            For House of Khaddar, the renowned fashion brand owned by Kamal
            Hassan, we crafted different ideas for their latest collection,
            "Chaos." Through innovative reels and statics on social media, we
            strategically highlighted the intricate textures and diverse designs
            of the dresses. Our approach ensured a compelling visual narrative
            and also engaging the audience.
          </p>
          <div className="max-w-[400px] m-auto flex flex-col gap-10 py-20 ">
            <div className="flex gap-10 justify-center">
              <video src="/assets/kaddhar/video1.mov" controls></video>
              <video src="/assets/kaddhar/video2.mp4" controls></video>
            </div>
            {/* <div className="flex gap-10 justify-center mb-[100px]">
              <img src="/assets/kaddhar/image3.png" alt="" />
              <img src="/assets/kaddhar/image4.png" alt="" />
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
