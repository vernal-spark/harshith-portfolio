"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ExperienceCardProps } from "@/types/types";

const ExperienceCard: React.FC<ExperienceCardProps> = React.memo(
  ({ experience }) => {
    return (
      <article className="relative p-8 rounded-2xl glass-effect border border-white/10 hover:border-green-500/30 transition-all duration-500 group">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <header className="mb-6">
            <h3 className="text-3xl max-md:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-green-400 transition-colors duration-300">
              {experience.title}
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full" />
              <p className="text-green-400 text-xl max-md:text-lg font-semibold">
                @{experience.company}
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Image
                  src="/assets/calendar.svg"
                  alt="Duration"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-green-400"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  Duration
                </p>
                <time
                  dateTime={experience.duration}
                  className="text-white font-medium"
                >
                  {experience.duration}
                </time>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <Image
                  src="/assets/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-emerald-400"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  Location
                </p>
                <address className="not-italic text-white font-medium">
                  {experience.location}
                </address>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Key Achievements
            </h4>
            <ul className="space-y-3" role="list">
              {experience.description.map((description, index) => (
                <motion.li
                  key={`desc-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-white/80 leading-relaxed">
                    {description}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
