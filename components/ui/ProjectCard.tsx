"use client";
import React from "react";
import Image from "next/image";
import { ProjectCardProps } from "@/types/types";

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project }) => {
  return (
    <article className="rounded-md overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 border relative z-20 border-zinc-700 hover:border-zinc-600 transition-colors duration-300">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} project screenshot`}
          fill
          className="object-cover rounded-t-md hover:scale-110 transition-transform ease-in-out duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 z-10">
        <h3 className="text-lg tracking-wide text-zinc-100 font-bold">
          {project.name}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
