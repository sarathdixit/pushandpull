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
            Samudhrika Lakshana
          </p>
          <p className="text-center mt-10">
            For Samudhrika Lakshana, a flourishing Cosmetic & Skincare Brand, we
            transformed their online presence from scratch. With a non-existent
            social media footprint, we initiated a dynamic campaign leveraging
            influencers and content creators. Our strategy included captivating
            reels and posts that not only engaged the audience but were also
            strategically utilized in performance marketing. In the fiercely
            competitive skincare industry, our efforts bore fruit, propelling
            the brand to remarkable success. Within just 6 months, we
            facilitated collaborations with multiple influencers and achieved
            sales exceeding 15 Lakhs, while concurrently nurturing a substantial
            organic follower base on social media.
          </p>
          <div className="max-w-[800px] m-auto flex flex-col gap-10 py-20 ">
            <video src="/assets/samudhrika/video3.mp4" controls></video>

            <div className="flex gap-10 justify-center max-w-[400px] m-auto">
              <video src="/assets/samudhrika/video1.mp4" controls></video>
              <video src="/assets/samudhrika/video2.mp4" controls></video>
              <video src="/assets/samudhrika/video4.mp4" controls></video>

              {/* <img src="/assets/samudhrika/image1.png" alt="" />
              <img src="/assets/samudhrika/image2.png" alt="" /> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
