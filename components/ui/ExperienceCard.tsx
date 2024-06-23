"use client";
import Image from "next/image";
import React from "react";

type Experience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  icon: string;
  description: string;
  alias: string;
};

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="mb-10 text-white flex flex-col gap-4">
      <div className="text-2xl max-md:text-lg font-bold text-zinc-100 tracking-wider">
        {experience?.title + " "}
        <div className="text-green-500 block">@{experience?.company}</div>
      </div>
      <div className="text-zinc-400 text-sm tracking-widest flex items-center gap-1">
        <Image
          src={"assets/calendar.svg"}
          alt="arrow"
          width={20}
          height={20}
          className="inline"
        />
        {experience.duration}
      </div>
      <div className="text-zinc-400 text-sm flex items-center gap-1 tracking-widest">
        <Image
          src={"assets/location.svg"}
          alt="arrow"
          width={20}
          height={20}
          className="inline"
        />
        {experience.location}
      </div>
      <ul className="flex flex-col gap-4 text-justify text-zinc-400 text-sm tracking-normal">
        <li className="flex items-center gap-1">
          <Image
            src={"assets/arrow.svg"}
            alt="arrow"
            width={20}
            height={20}
            className="inline"
          />
          Developed and maintained multiple features for the company's flagship
        </li>
        <li className="flex items-center gap-1">
          <Image
            src={"assets/arrow.svg"}
            alt="arrow"
            width={20}
            height={20}
            className="inline"
          />
          Collaborated with cross-functional teams to identify and prioritize
        </li>
        <li className="flex items-center gap-1">
          <Image
            src={"assets/arrow.svg"}
            alt="arrow"
            width={20}
            height={20}
            className="inline"
          />
          Implemented automated testing and deployment scripts using Jenkins
        </li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
