"use client";
import Image from "next/image";
import React from "react";
import { ExperienceCardProps } from "@/types/types";

const ExperienceCard: React.FC<ExperienceCardProps> = React.memo(
  ({ experience }) => {
    return (
      <article className="mb-10 text-white flex flex-col gap-4">
        <header>
          <h3 className="text-2xl max-md:text-lg font-bold text-zinc-100 tracking-wider">
            {experience.title}
          </h3>
          <p className="text-green-500 block text-lg max-md:text-base">
            @{experience.company}
          </p>
        </header>

        <div className="text-zinc-400 text-sm tracking-widest flex items-center gap-2">
          <Image
            src="/assets/calendar.svg"
            alt="Duration"
            width={20}
            height={20}
            className="inline w-5 h-5"
            loading="lazy"
          />
          <time dateTime={experience.duration}>{experience.duration}</time>
        </div>

        <div className="text-zinc-400 text-sm flex items-center gap-2 tracking-widest">
          <Image
            src="/assets/location.svg"
            alt="Location"
            width={20}
            height={20}
            className="inline w-5 h-5"
            loading="lazy"
          />
          <address className="not-italic">{experience.location}</address>
        </div>

        <ul
          className="flex flex-col gap-4 text-justify text-zinc-400 text-sm tracking-normal"
          role="list"
        >
          {experience.description.map((description, index) => (
            <li key={`desc-${index}`} className="flex items-start gap-2">
              <Image
                src="/assets/arrow.svg"
                alt=""
                width={20}
                height={20}
                className="inline w-5 h-5 mt-0.5 flex-shrink-0"
                loading="lazy"
                aria-hidden="true"
              />
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
