"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExperienceItem } from "@/types/types";
import Image from "next/image";

interface TimelineCardProps {
  experience: ExperienceItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  experience,
  index,
  isActive,
  onClick,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative mb-16 last:mb-0"
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute -left-12 top-8 w-4 h-4 rounded-full border-2 z-10 cursor-pointer ${
          isActive
            ? "bg-green-500 border-green-500 shadow-lg shadow-green-500/50"
            : "bg-white/10 border-white/30 hover:border-green-400"
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: isActive ? 1.1 : 1,
          boxShadow: isActive
            ? "0 0 20px rgba(34, 197, 94, 0.5)"
            : "0 0 0px rgba(34, 197, 94, 0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card */}
      <motion.div
        className={`ml-8 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
          isActive
            ? "glass-effect border-green-500/30 bg-green-500/5"
            : "glass-effect border-white/10 hover:border-white/20 hover:bg-white/5"
        }`}
        onClick={onClick}
        whileHover={{ x: 8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          x: isActive ? 8 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-2">
            <Image
              src={experience.icon}
              alt={`${experience.company} logo`}
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-green-400 font-semibold">
              <span>@{experience.company}</span>
              {isActive && (
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Duration and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-white/70">
            <Image
              src="/assets/calendar.svg"
              alt="Duration"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="text-sm">{experience.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Image
              src="/assets/location.svg"
              alt="Location"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="text-sm">{experience.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          {experience.description.map((desc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="flex items-start gap-2 text-white/80 text-sm"
            >
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              <span>{desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineCard;
