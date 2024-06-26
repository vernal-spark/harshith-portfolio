"use client";
import React, { useState } from "react";
import Image from "next/image";
import Section from "../ui/PortfolioSection";
import ProjectCard from "../ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/projects";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="projects" header="Projects">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            className="relative w-full h-full rounded-md hover:cursor-pointer overflow-hidden p-4"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800 rounded-md"
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
            <ProjectCard project={project} />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
