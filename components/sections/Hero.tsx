"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GlitchHandle, useGlitch } from "react-powerglitch";
import { Boxes } from "../ui/background-boxes";

const Hero: React.FC = () => {
  const [isIOS, setIsIOS] = useState<boolean>(false);

  const glitch: GlitchHandle = useGlitch({
    shake: false,
  });

  const isIOSDevice = useMemo(() => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(ua);
  }, []);

  useEffect(() => {
    setIsIOS(isIOSDevice);
  }, [isIOSDevice]);

  return (
    <section
      className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-black rounded-lg overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 w-full h-full bg-black z-20 pointer-events-none [mask-image:radial-gradient(transparent,white)]" />
      {!isIOS && <Boxes />}
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="z-30 px-4"
      >
        <h1 className="text-7xl max-md:text-4xl text-center text-white font-medium tracking-wide md:tracking-tight">
          Hi! I am Harshith,
          <br /> a{" "}
          <span
            className="text-green-500"
            ref={glitch.ref}
            aria-label="Software Engineer with glitch effect"
          >
            Software Engineer
          </span>
          <br /> based in India.
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
