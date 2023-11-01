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
          <p className="text-[32px] font-[700] text-center mb-10">Paid Media</p>
          <div className="flex justify-center  mt-6 mb-8">
            <div className="bg-black text-white px-6 py-2">
              <p behavior="scroll" direction="right" className="m-0">
                Maximize Brand Awareness, Visibility, Lead Generation, and Sales
                with Our Customized Paid Media Campaign
              </p>
            </div>
          </div>
          <p style={{ marginBottom: "3rem" }} className="mt-6 text-center">
            Paid media is a successful technique to raise brand recognition,
            visibility, lead generation, and revenue. To assist you in achieving
            your marketing objectives, our team of professionals specializes in
            market research, user persona analysis, and executing Meta, Google,
            DV 360, and Snapchat Ads.
            <br />
            <br />
            We provide a variety of paid media services to assist you in
            reaching your marketing objectives, such as:
          </p>

          <div className="px-5 py-7 border-[1px] border-[#000] rounded-3xl m-auto">
            <div className="flex flex-wrap  justify-around py-6">
              <div className="relative md:order-last">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Brand Awareness
                  </p>
                </div>
                <div className="w-[200px]">
                  <AnimtedImage url={"/assets/paid/paid1.png"} />
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
                Using a combination of display, search, and social media ads,
                our brand awareness campaigns are made to expand the visibility
                of your business and connect with more people.
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
                  <p className="bg-black text-white px-6 py-2">Visibility</p>
                </div>
                <AnimtedImage url={"/assets/paid/paid2.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify">
                We use selected keywords and other optimization strategies to
                increase your website's visibility in search results. This helps
                you rank higher in the results
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
                    Lead Generation
                  </p>
                </div>
                <AnimtedImage url={"/assets/paid/paid3.png"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                Our lead generation campaigns use customized landing pages and
                persuasive ad copy to motivate consumers to take action to
                gather leads and boost conversions.
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
                  <p className="bg-black text-white px-6 py-2">Sales</p>
                </div>
                <AnimtedImage url={"/assets/paid/paid4.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                We utilize a combination of retargeting, display, and search
                advertisements to reach people at various phases of the buying
                cycle as part of our sales efforts, which are focused on
                generating sales and income.
              </p>
            </div>
          </div>
          <p className="text-center !mt-20">
            Our goal at Push & Pull, a PPC agency in Chennai, is to maximize
            your investment's return while delivering measurable results. With
            years of paid media experience, our team of professionals knows how
            to develop programs that produce results. We are committed to
            offering our customers individualized service and support, and we
            collaborate closely with you to create a tailored plan that caters
            to your particular requirements.
          </p>
          <p className="text-center mt-4">
            Are you prepared to use paid media to establish your brand further?
            Then, please make an appointment with our PPC advertising company
            right away. We're eager to hear from you!
          </p>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Creative;
