"use client";
import React from "react";
import Image from "next/image";
import { ProjectCardProps } from "@/types/types";

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project }) => {
  return (
    <article className="group relative rounded-2xl overflow-hidden glass-effect border border-white/10 hover:border-green-500/30 transition-all duration-500 card-hover">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Image container */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} project screenshot`}
          fill
          className="object-cover group-hover:scale-110 transition-transform ease-out duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Project name overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech stack indicator */}
        <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>View Project</span>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
