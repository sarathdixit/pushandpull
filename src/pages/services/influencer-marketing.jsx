import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/footer";
import ScrollText from "@/components/scrollText";
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
        }}
        className="relative z-10 bg-white pb-16"
      >
        <div className="container mt-10">
          <p className="text-[32px] font-[700] text-center mb-10">
            Influencer Marketing
          </p>
          <ScrollText text="Utilise Influencer Marketing to Expand Your Business and Get Noticed!" />

          <p className=" mb-4 text-center mt-16">
            In the current digital era, social media has become a potent tool
            for businesses to advertise their goods and services. Influencer
            marketing is one of the best strategies for accomplishing this.
          </p>
          <p className="mt-6  mb-20 text-center">
            Influencer marketing is an advertising approach involving
            collaborating with people with a significant following on social
            media sites like Instagram, YouTube, and TikTok to promote your
            business or product. By consistently sharing content relevant to
            their interests, hobbies, or niche, these people—known as
            influencers—have developed a reputation and an ardent following.
          </p>
          <div className="grid grid-cols-3 gap-4 items-center mb-12">
            <div className="col-span-1">
              {/* <img src="/assets/IM1.svg" alt="" /> */}
              <video src="/assets/videos/Kaaviya Video.mp4" controls></video>
            </div>
            <div className="col-span-1">
              <video src="/assets/videos/Vikram Video.mp4" controls></video>
            </div>
            <div className="col-span-1">
              <video src="/assets/videos/Kanmani Video.mp4" controls></video>
            </div>
          </div>

          <p className="mt-20  mb-4 text-center">
            We at Push & Pull are experts in influencer marketing services and
            have a successful track record. We collaborate with our network of
            influencers across a range of markets and sectors to develop unique
            campaigns that support the goals and objectives of your business.
          </p>
          <p className="mt-6  mb-4 text-center">
            Our industry professionals will collaborate with you to create a
            thorough influencer marketing strategy that involves choosing the
            appropriate influencers, creating exciting content, and gauging the
            campaign's effectiveness. We are dedicated to maximizing the return
            on your investment and delivering quantifiable outcomes.
          </p>
          <p className="mt-6   mb-4 text-center">
            Are you ready to use influencer marketing to advance your brand? To
            arrange a meeting with one of our experts, get in touch with our
            marketing team right away. We anticipate hearing from you!
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default InfluencerMarketing;
