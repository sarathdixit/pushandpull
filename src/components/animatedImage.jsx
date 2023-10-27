/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion } from "framer-motion";
export function AnimtedImage({ url }) {
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <section className="mb-4 md:mb-0">
      <motion.div
        // initial={false}
        // animate={
        //   isInView
        //     ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
        //     : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        // }
        // transition={{ duration: 0.8 }}
        initial={{ y: 120, opacity: 0.5 }} // Initial position and opacity
        whileInView={{ y: 0, opacity: 1 }} // Animation to move down and fade in
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img src={url} alt="" />
      </motion.div>
    </section>
  );
}
