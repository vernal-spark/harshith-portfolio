"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/PortfolioSection";
import Image from "next/image";
import { technologies } from "@/constants/technologies";

const Technologies = () => {
  return (
    <Section id="tech" header="Tools and Technologies">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4 max-w-6xl">
          {technologies.map(({ name, icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="flex flex-col justify-center items-center glass-effect rounded-xl p-2 md:p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300 card-hover min-h-[80px] md:min-h-[100px]">
                {name === "React Native" && (
                  <div className="absolute -top-2 -right-2 text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 rounded-full font-medium">
                    Native
                  </div>
                )}
                <div className="relative w-8 h-8 md:w-12 md:h-12 mb-1 md:mb-2">
                  <Image
                    src={icon}
                    alt={name}
                    fill
                    loading="lazy"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] md:text-xs text-white/70 text-center font-medium group-hover:text-green-400 transition-colors duration-300 leading-tight break-words px-1">
                  {name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          I work with a diverse range of technologies, from frontend frameworks
          to backend services, always staying up-to-date with the latest
          industry trends and best practices.
        </p>
      </motion.div>
    </Section>
  );
};

export default Technologies;
