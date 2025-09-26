import Image from "next/image";
import React from "react";
import { LogoProps } from "@/types/types";

const Logo: React.FC<LogoProps> = ({
  source,
  alt = "Company logo",
  className = "",
}) => {
  return (
    <div
      className={`p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 z-10 ${className}`}
    >
      <Image
        src={source}
        alt={alt}
        width={15}
        height={15}
        className="rounded-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
