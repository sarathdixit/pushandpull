import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import React from "react";

const InfluencerMarketing = () => {
  return (
    <>
      <HomeHeader
        hide
        header="!bg-[#fff] border-b-2"
        logo="/assets/colorLogo.svg"
        menu="/assets/colorMenu.svg"
        heading="!text-[#462D81]"
      />
      <section
        style={{
          paddingTop: "8rem",
          fontFamily: "Helvetica",
          borderBottomLeftRadius: "125px",
          borderBottomRightRadius: "125px",
        }}
        className="relative z-10 bg-white pb-16"
        id="influencerMarketing"
      >
        <div className="container">
          <p className="text-[32px] font-[700] text-center mb-10">
            Content Marketing
          </p>
          <div className="flex justify-center  mt-6 mb-2">
            <div className="bg-black text-white px-6 py-2 flex">
              {/* <marquee behavior="scroll" direction="right">
                Utilise Influencer Marketing to Expand Your Business and Get
                Noticed!
              </marquee> */}
              <p className="m-0">
                Content That Captivate, Impress and Inspire. Let Us Help You
                Create Your Next Masterpiece
              </p>
            </div>
          </div>
          <p className=" mb-4 text-center mt-16">
            Content marketing effectively raises brand recognition, interacts
            with your target audience, and generates conversions. Our team of
            experts can write blogs, product descriptions, websites, social
            media platforms, marketplaces, Quora, and Reddit threads for your
            marketing goals.
          </p>
          <p className="mt-6  mb-20 text-center">
            Our skilled writing staff specializes in producing top-notch
            material that appeals to your target market. We employ the most
            current SEO strategies to create blog posts that are search
            engine-optimized, product descriptions that are persuasive,
            informative, and engaging, website copy that is informative,
            engaging, and optimized for search engines, social media content
            that is informative, engaging, and shareable, marketplace content
            that is optimized for search engines and intended to convert
            visitors into customers, and Quora and Reddit posts that address
            queries about your industry. We take the time to comprehend your
            brand, target audience, and marketing objectives to create a content
            plan tailored to your specific requirements. Any content marketing
            strategy must include blogs, and we use the most recent SEO
            techniques to make blog posts search-engine friendly. The initial
            point of contact between your business and your audience is
            frequently your website text, which is why product descriptions are
            crucial for turning visitors into consumers.
          </p>
          <div className="grid grid-cols-3 gap-4 items-center mb-12">
            <div className="col-span-1">
              <img src="/assets/IM1.svg" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/assets/IM2.svg" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/assets/IM3.svg" alt="" />
            </div>
          </div>

          <p className="mt-20  mb-4 text-center">
            Building brand recognition and interacting with your target audience
            may be accomplished using social media content. We use persuasive
            language, excellent photos, and other strategies to make your
            marketplace content stand out in a crowded market.
          </p>
          <p className="mt-6  mb-4 text-center">
            We at Push & Pull, a social media marketing agency and SEO experts
            in Chennai, are dedicated to providing top-notch content that draws
            in your audience and encourages conversions. Our writing staff has
            years of expertise in content marketing and is skilled at producing
            material that appeals to your target demographic. We are a creative
            agency in Chennai. We collaborate directly with you to create a
            tailored content strategy that satisfies your specific requirements
            and aids in accomplishing your marketing objectives.
          </p>
          <p className="mt-6   mb-4 text-center">
            Are you prepared to advance your content marketing? Contact us right
            now to arrange a meeting with one of our specialists. We look
            forward to hearing from you!
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default InfluencerMarketing;
