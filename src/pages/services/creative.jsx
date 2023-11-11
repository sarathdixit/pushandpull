import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { motion } from "framer-motion";
import { AnimtedImage } from "@/components/animatedImage";
import HomeHeader from "@/components/HomeHeader";
import ScrollText from "@/components/scrollText";

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
        <div className="px-8 md:container m-auto pt-10">
          <p className="text-[32px] font-[700] text-center">Creative</p>

          <div className="flex justify-center mb-16 mt-10">
            <ScrollText text="Stand Out in the Digital Crowd with Our Eye-Catching Graphics" />{" "}
          </div>
          <p style={{ marginBottom: "3rem" }} className="text-center">
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
                    Website Design
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image5.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>

              <p className="w-[450px] md:order-first">
                Your website should make a fantastic first impression because it
                is frequently the initial point of contact between your brand
                and potential clients. Our design team develops unique website
                layouts that are aesthetically pleasing but also practical and
                user-friendly.
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
                    Video Production
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image6.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                With a robust marketing tool like video, you can establish a
                closer connection with your target audience. Our team of
                professionals specializes in producing high-quality videos that
                tell your company's narrative and present your goods or services
                in the best possible way.
                <br />
                Push & Pull, a branding agency in Chennai, is committed to
                delivering high-quality graphic design services that help you
                achieve your marketing goals. We work closely with you to
                understand your business and create custom designs tailored to
                your needs. Our team of experts has years of experience in
                graphic design and knows how to create designs that make an
                impact.
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
                  <p className="bg-black text-white px-6 py-2">Photography</p>
                </div>
                <p className="text-center">
                  At Push and Pull, we offer professional and high-quality
                  photography services to cater to the diverse needs of our
                  clients. Our experienced team of photographers possesses the
                  skills and creativity to capture stunning visuals that
                  effectively communicate your brand's message. So we have you
                  covered whether you require product photography, corporate
                  headshots, lifestyle photography, or event coverage. Our
                  photography services include the following:
                </p>
              </div>
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
                    Product Photography
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image7.jpg"} />
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
                    Corporate Photography
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image7.jpg"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                We understand the importance of presenting a professional image
                for your business. Our corporate photography services include
                capturing executive portraits, team photos, office interiors,
                and any other visuals that reflect your company's ethos and
                values.
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
                    Event Photography
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image9.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                From corporate events and conferences to trade shows and product
                launches, we have the expertise to capture the essence of your
                special occasions. Our skilled photographers will document the
                key moments, interactions, and emotions, creating a visual
                narrative that encapsulates the atmosphere and excitement of
                your event.
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
                    TVC (Television Commercial) Services
                  </p>
                </div>
                <p className="text-center">
                  Push and Pull is equipped to handle all aspects of TVC
                  production, from conceptualization to execution. We understand
                  the power of television commercials to convey your brand's
                  message to a broader audience. Our TVC services encompass the
                  following:
                </p>
              </div>
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
                    Concept Development
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image11.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify">
                Our creative professionals will collaborate with you to develop
                a fascinating TVC concept that aligns with your brand's identity
                and resonates with your target audience.
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
                  <p className="bg-black text-white px-6 py-2">Scriptwriting</p>
                </div>
                <AnimtedImage url={"/assets/creative/image12.jpg"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                Our experienced copywriters will craft compelling scripts that
                effectively communicate your brand message while capturing the
                viewers' attention within the limited time frame of a TVC.
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
                    Storyboarding and Pre-production
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image13.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                We meticulously plan each shot, creating storyboards and
                organizing the necessary resources, such as locations, actors,
                props, and equipment, to ensure a seamless production process.
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
                    Filming and Editing
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image14.jpg"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                Our skilled crew will handle the filming, ensuring high-quality
                visuals and audio. Post-production, our expert editors will
                bring the footage to life by seamlessly weaving together the
                shots, adding special effects, and optimizing the final TVC for
                broadcast.
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
                    Reels Services
                  </p>
                </div>
                <p className="text-center">
                  In today's digital landscape, short-form videos have become
                  helpful in interacting with and establishing a relationship
                  with your audience. Push and Pull offers comprehensive reels.
                  In addition, we offer services that can help your brand
                  thrive. The fast-paced world of social media. Our reel
                  services include:
                </p>
              </div>
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
                    Concept Development
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image15.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black cust_invisible cust_md_visible"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] self-center text-justify">
                We collaborate to create a content plan that perfectly matches
                your objectives. Brand's goals and resonates with your target
                audience on platforms like Instagram Reels and TikTok.
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
                    Creative Ideation
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image16.jpg"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                Our team of creative experts will generate innovative ideas and
                concepts that captivate viewers in the short and
                attention-grabbing format of Reels.
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
                    Video Production
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image17.jpg"} />
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className=" w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px]">
                From shooting and editing to adding engaging visual effects and
                background music, our team will handle every aspect of video
                production to ensure your reels stand out.
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
                    Optimization and Promotion
                  </p>
                </div>
                <AnimtedImage url={"/assets/creative/image18.jpg"} />
              </div>

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                className="w-[0.82px] bg-black"
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="w-[450px] md:order-first">
                We will optimize your reels for maximum reach and engagement by
                leveraging relevant hashtags, engaging captions, and strategic
                posting schedules. Additionally, we can assist you in promoting
                your reels through targeted advertising campaigns to reach a
                wider audience.
                <br />
                With Push and Pull's comprehensive services for photography,
                TVC, and Reels, you can leverage the power of visual
                storytelling to enhance your brand's visibility, engage your
                audience, and drive meaningful results. If you need assistance
                with your digital marketing needs, do not hesitate to contact us
                today. Our team is committed to ensuring that your business
                goals are precisely met.
                <br />
                Ready to take your brand to the next level with custom graphic
                design services? Contact us today to schedule a consultation
                with one of our experts. We look forward to hearing from you!
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
