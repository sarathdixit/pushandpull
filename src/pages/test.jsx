/* eslint-disable react/no-unescaped-entities */
import { AnimtedImage } from "@/components/animatedImage";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

export default function Index() {
  return (
    <Layout>
      <div>
        <p className="text-[38px] font-[700] text-center">Creative</p>
        <div className="flex justify-center  mt-6">
          <p className="bg-black text-white px-6 py-2">
            Stand Out in the Digital Crowd with Our Eye-Catching Graphics
          </p>
        </div>
        <p className="mt-6 max-w-[1020px] m-auto text-center">
          To effectively convey a message to your target audience, graphic
          design is the art of producing visual information. Our team of skilled
          graphic designers specializes in producing captivating graphics that
          assist you in efficiently establishing your brand identity and
          promoting your goods or services. In addition, our branding and
          creative agency offers a wide range of services, which include :
        </p>
      </div>
      <div className="px-5 py-7 border-[1px] border-[#000] rounded-3xl mt-20 max-w-[1200px] m-auto">
        <div className="flex justify-around py-6">
          <p className="w-[450px]">
            We collaborate closely with you to comprehend your brand's
            personality, values, and objectives, and we utilize this knowledge
            to develop a distinctive and memorable brand identity that captures
            the soul of your company.
          </p>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            className="w-[0.82px] bg-black"
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <div className="relative">
            <div className="flex justify-center absolute bottom-[251px] mt-6 w-[100%]">
              <p className="bg-black text-white px-6 py-2">Brand Identity</p>
            </div>
            <AnimtedImage url={"/assets/test.png"} />
          </div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "auto" }}
          className=" h-[1px] bg-black my-6"
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        ></motion.div>
        <div className="flex justify-around py-6">
          <div className="relative">
            <div className="flex justify-center absolute bottom-[248px] mt-6 w-[100%]">
              <p className="bg-black text-white px-6 py-2">Print Design</p>
            </div>
            <AnimtedImage url={"/assets/test.png"} />
          </div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            className=" w-[0.82px] bg-black"
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="w-[450px]">
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
        <div className="flex justify-around py-6">
          <p className="w-[450px]">
            We collaborate closely with you to comprehend your brand's
            personality, values, and objectives, and we utilize this knowledge
            to develop a distinctive and memorable brand identity that captures
            the soul of your company.
          </p>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            className="w-[0.82px] bg-black"
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <div className="relative">
            <div className="flex justify-center absolute bottom-[251px] mt-6 w-[100%]">
              <p className="bg-black text-white px-6 py-2">Brand Identity</p>
            </div>
            <AnimtedImage url={"/assets/test.png"} />
          </div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "auto" }}
          className=" h-[1.5px] bg-black my-6"
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        ></motion.div>
        <div className="flex justify-around py-6">
          <div className="relative">
            <div className="flex justify-center absolute bottom-[248px] mt-6 w-[100%]">
              <p className="bg-black text-white px-6 py-2">Print Design</p>
            </div>
            <AnimtedImage url={"/assets/test.png"} />
          </div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            className=" w-[0.82px] bg-black"
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="w-[450px]">
            Building brand awareness and communicating with your audience
            through print design is beneficial. Our design team has years of
            expertise in producing eye-catching print designs for various
            materials, including flyers, business cards, and brochures.
          </p>
        </div>
      </div>
    </Layout>
  );
}
