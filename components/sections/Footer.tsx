import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socialLinks } from "@/constants/socialLink";

const Footer: React.FC = () => {
  return (
    <div className="relative left-0 right-0 bottom-0 bg-gradient-to-br from-zinc-800 to-zinc-950 p-5 rounded-t-xl flex flex-col justify-center items-center gap-2">
      <div className="text-md text-zinc-400">Connect with me:</div>
      <div className="flex items-center gap-5">
        {socialLinks.map(({ name, icon, link }) => (
          <Link
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon} alt={`${name} link`} width={30} height={30} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
