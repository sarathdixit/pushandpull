import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const About = () => {
  return (
    <>
      <HomeHeader
        hide
        header="!bg-[#fff] border-b-2"
        logo="/assets/colorLogo.svg"
        menu="/assets/colorMenu.svg"
        heading="!text-[#462D81]"
      />
      <main
        style={{
          paddingTop: "8rem",
          fontFamily: "Helvetica",
          borderBottomLeftRadius: "125px",
          borderBottomRightRadius: "125px",
        }}
        className="relative z-10 bg-white"
      >
        <div className="container">
          <p className="text-[32px] font-[700] text-center mb-10">About</p>
          <div className="flex justify-center  mt-6 mb-2">
            <div className="bg-black text-white px-6 py-2">
              <div>
                Push The Buttons and Pull Your Socks Up For The Dynamic Digital
                Experience
              </div>
            </div>
          </div>
        </div>
        <section className="mt-12">
          <video
            src="/assets/Banner video.mp4"
            autoPlay
            muted
            className="aspect-16/9 w-full"
            loop
          />
        </section>

        <section className="mt-20 pb-20">
          <p className="mt-6 max-w-[1020px] m-auto mb-4 text-center">
            Welcome to Push & Pull, a dynamic digital marketing agency in
            Chennai, where creativity meets digital advertising and marketing
            innovation. We are a team of passionate and skilled marketers who
            are dedicated to helping businesses thrive in the online realm. We
            have the perfect pull-ution for your digital marketing needs,
            guaranteed to push your business to the forefront of your industry.
          </p>
          <p className="mt-6 max-w-[1020px] m-auto mb-4 text-center">
            Our goal is to provide strategic digital solutions to our clients
            that produce outcomes and promote success. For example, we can
            improve search engine rankings and increase organic traffic to your
            website with our cutting-edge digital marketing strategies.
          </p>
          <p className="mt-6 max-w-[1020px] m-auto mb-4 text-center">
            In digital marketing, we aspire to be the leading agency that
            delivers innovative, effective, and transformative solutions. But
            don't worry, we won't turn your business into a circus—unless that's
            what you're after!
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;