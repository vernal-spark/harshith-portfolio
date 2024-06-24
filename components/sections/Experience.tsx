"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceCard from "../ui/ExperienceCard";
import Section from "../ui/PortfolioSection";
import Logo from "../ui/Logo";

const experience = [
  {
    title: "Software Development Intern",
    company: "Rattle Software Pvt Ltd",
    duration: "Feb 2024 - Present",
    location: "Bengaluru, Karnataka, India",
    icon: "/assets/rattle.svg",
    description: [
      "Collaborated with the adoption team to develop scalable feature requests.",
      "Worked on a sandbox version of the Rattle app, owning the frontend.",
      "Created a new homepage for the sandbox version of the app.",
    ],
    alias: "Rattle",
  },
  {
    title: "Fronted Developer Intern",
    company: "Menubook",
    duration: "Jun 2023 - Sept 2023",
    location: "Remote, India",
    icon: "/assets/menubook.jpeg",
    description: [
      "Developed scalable mobile apps using JavaScript, React Native, and Redux.",
      "Contributed to the admin side for efficient app management.",
    ],
    alias: "Menubook",
  },
  {
    title: "Java Developer Intern",
    company: "Brane Enterprises Pvt Ltd",
    duration: "Oct 2022 - Dec 2022",
    location: "Bengaluru, Karnataka, India",
    icon: "/assets/brane.svg",
    description: [
      "Developed microservices with Spring Boot, MongoDB, Redis, and Kafka.",
      "Enhanced data access operation performance using Redis for caching.",
    ],
    alias: "Brane",
  },
  {
    title: "Full Stack Developer Trainee",
    company: "Crio.Do",
    duration: "Jun 2022 - Mar 2023",
    location: "Remote, India",
    icon: "/assets/crio.svg",
    description: [
      "Completed Full Stack Program, gaining MERN stack proficiency.",
      "Developed an e-commerce platform with authentication features.",
      "Built a video curator platform with search and bookmarking.",
    ],
    alias: "Crio",
  },
];

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Section id="experience" header="Experience">
      <div className="relative flex gap-10 max-md:flex-col">
        <div
          className="flex flex-row md:flex-col gap-2"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {experience.map((item, index) => (
            <button
              className={`px-4 py-2 text-zinc-300 relative z-20 min-w-28 max-md:min-w-1 max-md:w-fit w-full text-left rounded-md flex flex-row items-center group ${
                index === selectedIndex && "bg-zinc-900"
              }`}
              key={item.company}
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-zinc-900/[0.8] rounded-md"
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
              <Logo source={item.icon} />
              <span className="max-md:hidden z-10 ml-2">{item.alias}</span>
            </button>
          ))}
        </div>
        <ExperienceCard experience={experience[selectedIndex]} />
      </div>
    </Section>
  );
};

export default Experience;
