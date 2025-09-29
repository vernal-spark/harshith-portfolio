"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GlitchHandle, useGlitch } from "react-powerglitch";

const Hero: React.FC = () => {
  const glitch: GlitchHandle = useGlitch({
    shake: false,
  });

  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full blur-3xl"
          style={{
            left: "20%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-teal-500/15 to-cyan-600/15 rounded-full blur-3xl"
          style={{
            right: "15%",
            bottom: "25%",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-green-600/10 rounded-full blur-3xl"
          style={{
            left: "60%",
            top: "60%",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-small-white/[0.1] opacity-50" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <motion.span
            className="inline-block px-4 py-2 glass-effect rounded-full text-green-400 font-medium text-sm md:text-base tracking-wider uppercase border border-green-500/20"
            whileHover={{ scale: 1.05 }}
          >
            👋 Welcome to my digital space
          </motion.span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-6"
        >
          <motion.span
            className="block text-white mb-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Hi, I'm
          </motion.span>
          <motion.span
            className="block gradient-text font-extrabold relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Harshith
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.span>
        </motion.h1>

        {/* Role description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-3xl lg:text-4xl font-medium text-white/90 mb-4"
        >
          <span className="text-white/70">I build</span>{" "}
          <span
            className="gradient-text font-bold relative"
            ref={glitch.ref}
            aria-label="Software Engineer with glitch effect"
          >
            innovative solutions
          </span>
          <br />
          <span className="text-white/70">that bring ideas to</span>{" "}
          <span className="gradient-text font-bold">life</span>
        </motion.div>

        {/* Location and tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/60 mb-12"
        >
          <span className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-2">
              <span>📍</span>
              <span>Bangalore, India</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span>🚀</span>
              <span>Open to new opportunities</span>
            </span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>

          <motion.a
            href="#contact"
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 glass-effect text-white font-semibold rounded-full border border-white/20 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Let's Connect</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>
        </motion.div>
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
