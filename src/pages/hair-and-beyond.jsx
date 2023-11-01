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
          <p
            className="border-b border-b-[#000] pb-2 text-[30px]"
            style={{ fontFamily: "Helvetica" }}
          >
            Hair & Beyond
          </p>
          <p className="text-center mt-10" style={{ fontFamily: "Helvetica" }}>
            For Hair & Beyond, we executed a social media strategy, enhancing
            their online presence and engagement. Through strategic branding
            initiatives, we crafted an identity, aligning their image with
            elegance and sophistication. By seamlessly integrating their
            services with compelling content, we created a strong brand
            resonance.
          </p>
          <div className="max-w-[1080px] m-auto flex flex-col gap-10 py-20 ">
            <div className="flex gap-10 justify-center">
              <img src="/assets/hair/image1.png" alt="" />
            </div>
            <div className="flex gap-10 justify-center">
              <img src="/assets/hair/image2.png" alt="" />
              <img src="/assets/hair/image3.png" alt="" />
            </div>
            <div className="flex gap-10 justify-center  mb-[100px]">
              <img src="/assets/hair/image4.png" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
