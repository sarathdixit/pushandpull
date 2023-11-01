import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { motion } from "framer-motion";
import { AnimtedImage } from "@/components/animatedImage";
import HomeHeader from "@/components/HomeHeader";

const Creative = () => {
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
        }}
        className="relative z-10 bg-white pb-32"
        id="creativePage"
      >
        <div className="px-8 md:container m-auto">
          <p className="text-[32px] font-[700] text-center mb-10">Creative</p>
          <div className="flex justify-center  mt-6 mb-8">
            <div className="bg-black text-white px-6 py-2">
              <p behavior="scroll" direction="right" className="m-0">
                Stand Out in the Digital Crowd with Our Eye-Catching Graphics
              </p>
            </div>
          </div>
          <p style={{ marginBottom: "3rem" }} className="mt-6 text-center">
            To effectively convey a message to your target audience, graphic
            design is the art of producing visual information. Our team of
            skilled graphic designers specializes in producing captivating
            graphics that assist you in efficiently establishing your brand
            identity and promoting your goods or services. In addition, our
            branding and creative agency offers a wide range of services, which
            include :
          </p>

          <div className="px-5 py-7 border-[1px] border-[#000] rounded-3xl m-auto">
            <div className="flex flex-wrap  justify-around py-6">
              <div className="relative md:order-last">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Brand Identity
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/c1.svg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first self-center text-justify">
                We collaborate closely with you to comprehend your brand's
                personality, values, and objectives, and we utilize this
                knowledge to develop a distinctive and memorable brand identity
                that captures the soul of your company.
              </p>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              className=" h-[1px] bg-black my-6"
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>
            <div className="flex flex-wrap justify-around py-6">
              <div className="relative">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">Print Design</p>
                </div>
                <AnimtedImage url={"/assets/creative/c2.svg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify">
                Building brand awareness and communicating with your audience
                through print design is beneficial. Our design team has years of
                expertise in producing eye-catching print designs for various
                materials, including flyers, business cards, and brochures.
              </p>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              className=" h-[1px] bg-black my-6"
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>

            <div className="flex flex-wrap justify-around py-6">
              <div className="relative md:order-last">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Brand Identity
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/c3.svg"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                The packaging of your products dramatically influences the
                success of your brand. It must be aesthetically pleasing and
                useful, as it is the first thing buyers see when buying your
                goods. Our design staff is skilled in producing stunning product
                packaging that makes your item stand out on shop shelves.
              </p>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              className=" h-[1.5px] bg-black my-6"
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>

            <div className="flex flex-wrap justify-around py-6">
              <div className="relative">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">Print Design</p>
                </div>
                <AnimtedImage url={"/assets/creative/c4.svg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                Any marketing strategy must include social media, and our team
                of designers is skilled at producing social media creatives that
                engage your audience and produce results. Our marketing
                strategist produces unique designs for every social media
                network, including Facebook, Instagram, Twitter, and LinkedIn.
              </p>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              className=" h-[1.5px] bg-black my-6"
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>
            <div className="flex flex-wrap justify-around py-6">
              <div className="relative md:order-last">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Brand Identity
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/c3.svg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>

              <p className="w-[450px] md:order-first">
                The packaging of your products dramatically influences the
                success of your brand. It must be aesthetically pleasing and
                useful, as it is the first thing buyers see when buying your
                goods. Our design staff is skilled in producing stunning product
                packaging that makes your item stand out on shop shelves.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Creative;
