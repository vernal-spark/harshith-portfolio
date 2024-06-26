"use client";
import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "../ui/background-boxes";
import { GlitchHandle, useGlitch } from "react-powerglitch";

const Hero: React.FC = () => {
  const glitch: GlitchHandle = useGlitch({
    shake: false,
  });

  return (
    <div className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-black rounded-lg overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black z-20 pointer-events-none [mask-image:radial-gradient(transparent,white)]" />
      <Boxes />
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="z-30"
      >
        <p className="text-7xl max-md:text-4xl text-center text-white font-medium tracking-wide md:tracking-tight">
          Hi! I am Harshith,
          <br /> a{" "}
          <span className="text-green-500" ref={glitch.ref}>
            Software Engineer
          </span>
          <br /> based in India.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
