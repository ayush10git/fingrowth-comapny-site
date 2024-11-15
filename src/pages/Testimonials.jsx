"use client";
import TestimonialCard from "@/components/TestimonialCard";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="bg-[#EAE8E1] py-10">
      <h1 className="hor-grad font-denton text-[36px] xl:text-[60px] lg:text-[54px] md:text-[48px] sm:text-[38px] text-center mb-10 md:mt-7 xs:mt-[-3rem]">
        Trusted By Leading Software Companies
      </h1>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-5 mb-5"
          initial={{ x: 20 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Repeat cards for continuous scrolling */}
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </React.Fragment>
            ))}
        </motion.div>
      </div>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-5 mb-5"
          initial={{ x: "-100%" }}
          animate={{ x: 20 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Repeat cards for continuous scrolling */}
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </React.Fragment>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
