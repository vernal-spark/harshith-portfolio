"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionProps } from "@/types/types";

const Section: React.FC<SectionProps> = ({ id, header, children }) => {
  return (
    <motion.section
      id={id}
      className="relative py-24 px-8 max-xl:px-4 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {header && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl max-md:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{header}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full" />
        </motion.div>
      )}

      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
};

export default Section;
