"use client";
import React, { useState, useCallback } from "react";
import Section from "../ui/PortfolioSection";
import ProjectCard from "../ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/projects";

const Projects: React.FC = () => {
  return (
    <Section id="projects" header="Projects">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        role="grid"
        aria-label="Project showcase"
      >
        {projects.map((project, index) => (
          <motion.a
            key={`project-${index}`}
            className="p-4"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} project`}
            role="gridcell"
            tabIndex={0}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
