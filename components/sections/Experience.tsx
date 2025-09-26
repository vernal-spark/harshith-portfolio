"use client";
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceCard from "../ui/ExperienceCard";
import Section from "../ui/PortfolioSection";
import Logo from "../ui/Logo";
import { experience } from "@/constants/experience";

const Experience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleCompanySelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <Section id="experience" header="Experience">
      <div className="relative flex gap-10 max-md:flex-col">
        <nav
          className="flex flex-row md:flex-col gap-2"
          onMouseLeave={handleMouseLeave}
          role="tablist"
          aria-label="Experience companies"
        >
          {experience.map(({ company, icon, alias }, index) => (
            <button
              className={`px-4 py-2 text-zinc-300 relative z-20 min-w-28 max-md:min-w-1 max-md:w-fit w-full text-left rounded-md flex flex-row items-center group transition-colors duration-200 ${
                index === selectedIndex
                  ? "bg-zinc-900 text-white"
                  : "hover:text-white"
              }`}
              key={`company-${company}`}
              onClick={() => handleCompanySelect(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              role="tab"
              aria-selected={index === selectedIndex}
              aria-controls={`experience-panel-${index}`}
              id={`company-tab-${index}`}
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
              <Logo source={icon} alt={`${company} logo`} className="z-10" />
              <span className="max-md:hidden z-10 ml-2">{alias}</span>
            </button>
          ))}
        </nav>
        <div
          role="tabpanel"
          id={`experience-panel-${selectedIndex}`}
          aria-labelledby={`company-tab-${selectedIndex}`}
        >
          <ExperienceCard experience={experience[selectedIndex]} />
        </div>
      </div>
    </Section>
  );
};

export default Experience;
