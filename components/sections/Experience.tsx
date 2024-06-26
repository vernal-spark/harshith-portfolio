"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceCard from "../ui/ExperienceCard";
import Section from "../ui/PortfolioSection";
import Logo from "../ui/Logo";
import { experience } from "@/constants/experience";

const Experience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Section id="experience" header="Experience">
      <div className="relative flex gap-10 max-md:flex-col">
        <div
          className="flex flex-row md:flex-col gap-2"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {experience.map(({ company, icon, alias }, index) => (
            <button
              className={`px-4 py-2 text-zinc-300 relative z-20 min-w-28 max-md:min-w-1 max-md:w-fit w-full text-left rounded-md flex flex-row items-center group ${
                index === selectedIndex && "bg-zinc-900"
              }`}
              key={company}
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-zinc-900/[0.8] rounded-md"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Logo source={icon} />
              <span className="max-md:hidden z-10 ml-2">{alias}</span>
            </button>
          ))}
        </div>
        <ExperienceCard experience={experience[selectedIndex]} />
      </div>
    </Section>
  );
};

export default Experience;
