import React from "react";
import Section from "../ui/PortfolioSection";
import Image from "next/image";
import { technologies } from "@/constants/technologies";

const Technologies = () => {
  return (
    <Section id="tech" header="Tools and Technologies">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-10 gap-5 max-lg:grid-cols-6">
          {technologies.map(({ name, icon }) => (
            <div
              key={name}
              className="flex justify-center items-center bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-md p-2 relative"
            >
              {name === "React Native" && (
                <div className="absolute inset-x-0 top-0 text-xs text-zinc-100 bg-cyan-600 text-center rounded-sm">
                  Native
                </div>
              )}
              <Image
                src={icon}
                alt={name}
                width={20}
                height={20}
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Technologies;
