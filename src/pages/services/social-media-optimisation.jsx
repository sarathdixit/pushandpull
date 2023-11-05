import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { motion } from "framer-motion";
import { AnimtedImage } from "@/components/animatedImage";
import HomeHeader from "@/components/HomeHeader";

const Index = () => {
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
        <div className="px-8 md:container m-auto pt-10">
          <p className="text-[32px] font-[700] text-center mb-10">
            Social Media Optimisation
          </p>
          <div className="flex justify-center  mt-6 mb-8">
            <div className="bg-black text-white px-6 py-2">
              <p behavior="scroll" direction="right" className="m-0">
                Maximize Your Reach and Engagement on Social Media with Our
                Proven Strategies
              </p>
            </div>
          </div>
          <p style={{ marginBottom: "3rem" }} className="mt-6 text-center">
            Social media is a powerful tool for building brand awareness,
            engaging with customers, and driving conversions. Our team of
            experts specializes in social media optimization. It can help you
            achieve your marketing goals through page optimization, monthly
            content calendars, monthly social media analytics reports, and
            response management.
          </p>

          <div className="px-5 py-7 border-[1px] border-[#000] rounded-3xl m-auto">
            <div className="flex flex-wrap  justify-around py-6">
              <div className="relative md:order-last">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Page Optimization
                  </p>
                </div>
                <div className="w-[200px]">
                  <AnimtedImage url={"/assets/social/social1.png"} />
                </div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first self-center text-justify">
                For any social media plan to be successful, pages must be
                optimized. To discover areas for development, such as optimizing
                your profile image, cover photo, bio, and call-to-action
                buttons, we first conduct an analysis of your social network
                profiles. We also ensure that your pages adhere to your
                business's messaging and core values and remain unified across
                all platforms.
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
                  <p className="bg-black text-white px-6 py-2">
                    Monthly Calendars
                  </p>
                </div>
                <AnimtedImage url={"/assets/social/social2.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify">
                A well-thought-out content calendar is necessary for a
                successful social media strategy. Using the most recent trends
                and industry best practices, we collaborate with you to create a
                monthly content plan that supports the aims and objectives of
                your company. Our SEO professionals develop various content
                kinds, such as promotional material, instructive information,
                and captivating images, to keep your audience interested and
                engaged.
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
                    Monthly Social Media Analytics Report
                  </p>
                </div>
                <AnimtedImage url={"/assets/social/social3.png"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                We give you monthly social media analytics reports that break
                down your page's success data, such as follower growth,
                engagement rates, and website hits, to ensure your social media
                strategy is on track. Making decisions regarding your social
                media strategy after reading these reports can help you
                understand what is and is not working.
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
                  <p className="bg-black text-white px-6 py-2">
                    Response Management
                  </p>
                </div>
                <AnimtedImage url={"/assets/social/social4.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                Interacting with your audience is crucial to develop customer
                loyalty and trust. Our team of professionals offers response
                management services to ensure your followers' inquiries and
                feedback are handled promptly and expertly. Additionally, we
                watch your social media pages for any unfavorable comments, and
                we collaborate with you to develop solutions.
                <br />
                <br />
                Are you prepared to use social media optimization to advance
                your strategy? To arrange a meeting with one of our experts, get
                in touch with us right away. Call us right away!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Index;
