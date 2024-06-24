"use client";
import React, { useState } from "react";
import Image from "next/image";
import Section from "../ui/PortfolioSection";
import ProjectCard from "../ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "XFlix",
    image: "/assets/xflix.png",
    description:
      "Created a video bookmark website with features for search, bookmarking, and categorization using ReactJS, NodeJS, ExpressJS, and MongoDB.",
    url: "https://graceful-sunflower-1683a0.netlify.app/",
  },
  {
    name: "QKart",
    image: "/assets/qkart.png",
    description:
      "Developed an e-commerce website with core functionalities like authentication, shopping cart, checkout, and a Stripe payment gateway using ReactJS, NodeJS, ExpressJS, and MongoDB.",
    url: "https://qkart-frontend-harshit.netlify.app/",
  },
  {
    name: "QTrip",
    image: "/assets/qtrip.png",
    description:
      "Built a travel website with three different web pages from wireframe layout using HTML and CSS, and extensively used Bootstrap for responsive design.",
    url: "https://harshith-qtrip-dynamic.netlify.app/",
  },
];

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
            className="relative w-full max-w-84 max-md:max-w-88 h-full rounded-md hover:cursor-pointer overflow-hidden p-4"
            href={project?.url}
            target="_blank"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800 rounded-md"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
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
