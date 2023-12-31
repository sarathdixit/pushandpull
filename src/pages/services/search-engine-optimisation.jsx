import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { motion } from "framer-motion";
import { AnimtedImage } from "@/components/animatedImage";
import HomeHeader from "@/components/HomeHeader";
import ScrollText from "@/components/scrollText";
import MobileSection from "../../components/mobile-section";

const Index = () => {
  return (
    <>
      <HomeHeader
        hide
        header="!bg-[#fff] lg:border-b-2"
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
        <div className="mt-[64px] lg:hidden">
          <MobileSection
            heading={" Search Engine Optimization"}
            description={" Boost Your Online Presence"}
          />
        </div>
        <div className="px-8 md:container m-auto pt-10">
          <div className="hidden lg:block">
            <p className="text-[32px] font-[700] lg:text-center mb-10">
              Search Engine Optimization
            </p>
            <div className="flex justify-center  mt-6 mb-8">
              <ScrollText text=" Boost Your Online Presence" />
            </div>
          </div>
          <p style={{ marginBottom: "3rem" }} className="mt-6 lg:text-center">
            Are you ready to elevate your online presence and dominate the
            digital landscape? Look no further than Push&Pull Digital Marketing!
            With our expert team and cutting-edge strategies, we're here to help
            your business reach new heights through the power of Search Engine
            Optimization (SEO).
          </p>

          <div className="px-5 py-7 border-[1px] border-[#000] rounded-3xl m-auto">
            <div className="flex flex-wrap  justify-around py-6">
              <div className="relative md:order-last flex-auto">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Keyword Research and Analysis
                  </p>
                </div>
                <div className="w-[200px] m-auto">
                  <AnimtedImage url={"/assets/seo/image1.jpg"} />
                </div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first self-center text-justify flex-auto lg:p-16">
                Uncover the keywords your target audience is searching for and
                ensure your content aligns perfectly, driving organic traffic to
                your website
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
              <div className="relative flex-1">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    On-Page Optimization
                  </p>
                </div>
                <div className="w-[200px] m-auto">
                  <AnimtedImage url={"/assets/seo/image2.jpg"} />
                </div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify flex-1 lg:p-10">
                We'll fine-tune your website's structure, meta tags, and content
                to make sure search engines love what they see, resulting in
                higher rankings.
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
              <div className="relative md:order-last flex-1">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Content Creation and Optimization
                  </p>
                </div>
                <div className="w-[200px] m-auto">
                  <AnimtedImage url={"/assets/seo/image3.jpg"} />
                </div>
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black hidden lg:block"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first flex-1 self-center">
                Our skilled writers craft engaging, keyword-rich content that
                resonates with your audience while satisfying search engine
                algorithms.
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
                  <p className="bg-black text-white px-6 py-2">Link Building</p>
                </div>
                <AnimtedImage url={"/assets/seo/image4.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black hidden lg:block"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                Build a robust online presence with quality backlinks from
                authoritative sources, boosting your site's credibility and
                authority.
              </p>
            </div>
            {/* test */}

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
                  <p className="bg-black text-white px-6 py-2">Technical</p>
                </div>
                <AnimtedImage url={"/assets/seo/image5.jpg"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black hidden lg:block"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                From site speed optimization to mobile-friendliness, we'll
                handle the technical details that ensure your website is
                top-notch in the eyes of search engines.
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
                  <p className="bg-black text-white px-6 py-2">Local SEO</p>
                </div>
                <AnimtedImage url={"/assets/seo/image6.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                If you have a local business, we'll optimize your online
                presence to attract nearby customers, ensuring you appear in
                local searches and on Google Maps.
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
              <div className="relative md:order-last flex-1">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    {" "}
                    Performance Tracking and Reporting
                  </p>
                </div>
                <div className="w-[200px] m-auto">
                  <AnimtedImage url={"/assets/seo/image7.jpg"} />
                </div>
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black hidden lg:block"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first lg:p-10 flex-1">
                Stay informed with regular reports that outline your progress,
                keyword rankings, and the impact of our SEO efforts.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 md:container m-auto ">
          <p className="text-[28px] font-[700] lg:text-center mb-10 !my-20">
            Why Choose Push&Pull:
          </p>

          <div className="px-5 py-7 border-[1px] border-[#000] rounded-3xl m-auto">
            <div className="flex flex-wrap  justify-around py-6">
              <div className="relative md:order-last">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Proven Results
                  </p>
                </div>
                <div className="w-[200px]">
                  <AnimtedImage url={"/assets/seo/image8.jpg"} />
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
                Our track record speaks for itself. We've helped businesses of
                all sizes achieve remarkable SEO success and drive tangible
                results.
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
                    Experienced Team
                  </p>
                </div>
                <div className="w-[200px] m-auto">
                  <AnimtedImage url={"/assets/seo/image11.jpg"} />
                </div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify">
                Our skilled team of SEO experts stays updated with the latest
                industry trends and search engine algorithms, ensuring your
                strategies are always cutting-edge.
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
              <div className="relative md:order-last flex-1">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Customized Approach
                  </p>
                </div>
                <div className="m-auto w-[200px]">
                  <AnimtedImage url={"/assets/seo/image10.jpg"} />
                </div>
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black hidden lg:block"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first flex-1 lg:p-10">
                We understand that each business is unique. That's why we tailor
                our strategies to fit your specific goals, industry, and target
                audience.
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
              <div className="relative flex-1">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    Transparent Communication
                  </p>
                </div>
                <div className="w-[200px] m-auto">
                  <AnimtedImage url={"/assets/seo/image22.jpg"} />
                </div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black hidden lg:block"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] flex-1 lg:p-10">
                We believe in clear, open communication. You'll always know what
                we're working on, the progress we've made, and the impact it's
                having
              </p>
            </div>
            {/* test */}
          </div>
          <p className="lg:text-center text-[30px] font-helvetica font-[700] pt-10">
            Ready to Push Your SEO and Pull in Success?
          </p>
          <p className="lg:text-center font-helvetica mt-2">
            Don't let your competitors steal the spotlight. It's time to take
            control of your online destiny with Push&Pull Digital Marketing's
            SEO services. Contact us today to discuss how we can create a
            customized SEO strategy that propels your business to the top of
            search engine rankings. Let's start this journey together!
          </p>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Index;
