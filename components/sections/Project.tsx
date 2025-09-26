"use client";
import React, { useState, useCallback } from "react";
import Section from "../ui/PortfolioSection";
import ProjectCard from "../ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/projects";

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <Section id="projects" header="Projects">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        onMouseLeave={handleMouseLeave}
        role="grid"
        aria-label="Project showcase"
      >
        {projects.map((project, index) => (
          <motion.a
            key={`project-${index}`}
            className="relative w-full h-full rounded-md hover:cursor-pointer overflow-hidden p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter(index)}
            aria-label={`View ${project.name} project`}
            role="gridcell"
            tabIndex={0}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800/50 rounded-md"
                  layoutId="projectHoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <ProjectCard project={project} />
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
