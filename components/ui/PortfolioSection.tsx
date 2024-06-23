"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const Section = ({
  id,
  header,
  children,
}: {
  id: string;
  header?: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      id={id}
      className="my-20 mx-40 max-xl:my-1 max-xl:mx-1 flex flex-col justify-center items-center"
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="text-white text-5xl max-md:text-3xl font-medium tracking-tight ">
        {header}
      </div>
      <div className=" py-10 px-20 max-lg:px-1">{children}</div>
    </motion.div>
  );
};

export default Section;
