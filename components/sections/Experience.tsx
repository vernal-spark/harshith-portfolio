"use client";
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceCard from "../ui/ExperienceCard";
import Section from "../ui/PortfolioSection";
import Logo from "../ui/Logo";
import { TracingBeam } from "../ui/TracingBeam";
import TimelineCard from "../ui/TimelineCard";
import { useData } from "@/components/providers/DataProvider";

const Experience: React.FC = () => {
  const { experiences, loading, error } = useData();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleCompanySelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  if (loading) {
    return (
      <Section id="experience" header="Experience">
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="experience" header="Experience">
        <div className="text-center py-16">
          <p className="text-red-400 mb-4">Failed to load experience data</p>
          <p className="text-white/60">Using fallback data</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="experience" header="Experience">
      <div className="relative">
        {/* Mobile: Horizontal scroll tabs */}
        <div className="md:hidden mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {experiences.map(({ company, icon, alias }, index) => (
              <motion.button
                key={`mobile-company-${company}`}
                className={`flex-shrink-0 px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
                onClick={() => handleCompanySelect(index)}
                whileTap={{ scale: 0.95 }}
              >
                <Logo
                  source={icon}
                  alt={`${company} logo`}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  {alias}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop: Tracing Beam Timeline */}
        <div className="hidden md:block">
          <TracingBeam>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <TimelineCard
                  key={`timeline-${exp.company}`}
                  experience={exp}
                  index={index}
                  isActive={index === selectedIndex}
                  onClick={() => handleCompanySelect(index)}
                />
              ))}
            </div>
          </TracingBeam>
        </div>

        {/* Mobile: Experience content */}
        <motion.div
          key={`mobile-${selectedIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden"
        >
          <ExperienceCard experience={experiences[selectedIndex]} />
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;
