"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionProps } from "@/types/types";

const Section: React.FC<SectionProps> = ({ id, header, children }) => {
  return (
    <motion.section
      id={id}
      className="my-20 mx-40 max-xl:my-1 max-xl:mx-1 flex flex-col justify-center items-center"
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {header && (
        <h2 className="text-white text-5xl max-md:text-3xl font-medium tracking-tight mb-8">
          {header}
        </h2>
      )}
      <div className="py-10 px-20 max-lg:px-1 w-full">{children}</div>
    </motion.section>
  );
};

export default Section;
