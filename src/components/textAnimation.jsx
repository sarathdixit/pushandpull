import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function TextAnimation() {
  return (
    <div>
      <div className="section">
        <div className="wrapper">
          <div className="homeSec3">
            <p>
              PUSH&PULL NICHE INCLUDES THE QUALITY <br />
              SERVICES WE PUSH THAT PULL CUSTOMERS <br />
              TOWARDS US ARE
            </p>
            <p>
              We offer a wide range of digital marketing services to help
              businesses of all sizes achieve their growth objectives. Our
              services are designed to be flexible,customizable, and scalable to
              meet your unique needs and budget
            </p>
          </div>

          {/* <div className="citebox js-karaoke">
            <div className="citebox-content js-karaoke-content">
              <span>PUSH&PULL NICHE INCLUDES THE QUALITY </span>
              <br />
              <span>SERVICES WE PUSH THAT PULL CUSTOMERS </span>
              <br />
              <span>TOWARDS US ARE </span>
            </div>
            <div className="citebox-mask js-karaoke-mask">
              <motion.span
                initial={{ width: "100%" }}
                whileInView={{ width: 0, marginRight: 0 }}
                transition={{
                  //   delay: 1,
                  duration: 2, // Adjust the duration to make it very slow
                  ease: [0.42, 0, 0.58, 1], // You can keep the custom easing values
                }}
                viewport={{ once: false }}
              >
                PUSH&PULL NICHE INCLUDES THE QUALITY{" "}
              </motion.span>
              <br />
              <motion.span
                initial={{ width: "100%", marginLeft: 0 }}
                whileInView={{ width: 0 }}
                transition={{
                  //   delay: 1,
                  duration: 2, // Adjust the duration to make it very slow
                  ease: [0.42, 0, 0.58, 1], // You can keep the custom easing values
                }}
                viewport={{ once: false }}
              >
                SERVICES WE PUSH THAT PULL CUSTOMERS{" "}
              </motion.span>
              <br />
              <motion.span
                initial={{ width: "100%" }}
                whileInView={{ width: 0, marginRight: 0 }}
                transition={{
                  //   delay: 1,
                  duration: 2, // Adjust the duration to make it very slow
                  ease: [0.42, 0, 0.58, 1], // You can keep the custom easing values
                }}
                viewport={{ once: false }}
              >
                TOWARDS US ARE{" "}
              </motion.span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
