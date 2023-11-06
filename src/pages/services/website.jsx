import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { motion } from "framer-motion";
import { AnimtedImage } from "@/components/animatedImage";
import HomeHeader from "@/components/HomeHeader";
import ScrollText from "@/components/scrollText";

const Website = () => {
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
          <p className="text-[32px] font-[700] text-center mb-10">Website</p>
          <div className="flex justify-center  mt-6 mb-8">
            <ScrollText text=" Get Noticed, Drive Traffic, and Boost Your Business." />{" "}
          </div>
          <p style={{ marginBottom: "3rem" }} className="mt-6 text-center">
            Welcome to Push &Pull, a web design company in Chennai is your
            one-stop shop for all your website needs. Whether you're looking to
            set up an e-commerce site, develop a dynamic website, or need
            full-stack web development services, we have the expertise and
            experience to help you achieve your goals.
            <br />
            <br />
            Here are some of the services we offer
          </p>

          <div className="px-5 py-7 border-[1px] border-[#000] rounded-3xl m-auto">
            <div className="flex flex-wrap  justify-around py-6">
              <div className="relative md:order-last">
                <div className="flex justify-center absolute -top-[90px] mt-6 w-[100%]">
                  <p className="bg-black text-white px-6 py-2">
                    E-Commerce Sites
                  </p>
                </div>
                <AnimtedImage url={"/assets/website/website1.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first self-center text-justify">
                E-commerce sites are a great way to sell your products or
                services online. We specialize in developing e-commerce sites
                that are easy to navigate, user-friendly, and optimized for
                conversions. In addition, our team of experts can help you set
                up your online store, integrate payment gateways, and provide
                ongoing support and maintenance to ensure your site runs
                smoothly.
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
                    Static & Dynamic Sites
                  </p>
                </div>
                <AnimtedImage url={"/assets/website/website2.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify">
                We offer static and dynamic website development services to suit
                your business needs. Static websites are ideal for businesses
                that need a simple, low-cost website that is easy to maintain.
                In contrast, dynamic websites are perfect for companies that
                require more complex functionality, such as online bookings,
                interactive forms, and custom features.
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
                    Full Stack Web Development
                  </p>
                </div>
                <AnimtedImage url={"/assets/website/website3.png"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                Our team of full-stack developers has years of experience
                building custom web applications from scratch. We use the latest
                technologies and development frameworks to create
                high-performance, scalable web applications that meet your
                business needs.
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
                    Web Maintenance
                  </p>
                </div>
                <AnimtedImage url={"/assets/website/website4.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                Maintaining a website can be time-consuming, so we offer web
                maintenance services to ensure your site is always up-to-date,
                secure, and running smoothly. In addition, we provide regular
                backups, security updates, and performance optimization to
                ensure your site is always performing at its best.
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
                    Website Customization
                  </p>
                </div>
                <AnimtedImage url={"/assets/website/website5.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>

              <p className="w-[450px] md:order-first">
                Need a website that stands out from the crowd? We offer website
                customization services to help you create a unique, personalized
                website that reflects your brand's personality and values. Our
                designers and developers will work closely with you to
                understand your needs and create a customized solution that
                meets your requirements.
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
                    Responsive Website
                  </p>
                </div>
                <AnimtedImage url={"/assets/website/website6.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                In today's mobile-first world, responsive websites are
                essential. We develop responsive websites that look great on any
                device, from desktops to smartphones. In addition, our designers
                and developers will ensure your website is optimized for all
                screen sizes, providing a seamless browsing experience.
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
                    Server Integrations
                  </p>
                </div>
                <AnimtedImage url={"/assets/website/website7.png"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>

              <p className="w-[450px] md:order-first">
                Need a website that stands out from the crowd? We offer website
                customization services to help you create a unique, personalized
                website that reflects your brand's personality and values. Our
                designers and developers will work closely with you to
                understand your needs and create a customized solution that
                meets your requirements.
                <br />
                <br />
                Known for its high-quality website development services, Push &
                Pull is a reliable website development company in Chennai. Our
                team of experts has extensive experience in website development,
                maintenance, and customization, and we implement the latest
                technologies and development frameworks. To ensure your website
                meets your business goals, we work closely with you to provide
                personalized service and support.
                <br />
                <br />
                Are you interested in boosting your website's performance?
                Contact us today to schedule a consultation with one of our
                experts. We look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Website;
