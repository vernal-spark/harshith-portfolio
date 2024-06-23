"use client";
import React from "react";
import Image from "next/image";

interface Props {
  project: any;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded-md overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 to-zinc- border relative z-20 border-none">
      <div className="h-40 w-100 h-50 z-10">
        <Image
          src={project?.image}
          alt="image"
          width={1000}
          height={1000}
          className=" rounded-md h-full w-76 hover:scale-110 transition ease-in-out duration-1000 z-10"
        />
      </div>
      <div className="flex flex-col gap-1 p-4 z-10">
        <h4 className="text-md tracking-wide text-zinc-100 font-bold">
          {project?.name}
        </h4>
        <div className="text-sm text-zinc-400">{project?.description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
