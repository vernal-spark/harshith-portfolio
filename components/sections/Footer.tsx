import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "linkedIn",
    icon: "/assets/social/linkedIn.svg",
    link: "https://www.linkedin.com/in/harshith-h-d-050841211/",
  },
  {
    name: "email",
    icon: "/assets/social/email.svg",
    link: "mailto:arshith1234@gmail.com",
  },
  {
    name: "instagram",
    icon: "/assets/social/insta.svg",
    link: "https://www.instagram.com/harshith1717",
  },
  {
    name: "github",
    icon: "/assets/social/github.svg",
    link: "https://github.com/vernal-spark",
  },
];
const Footer = () => {
  return (
    <div className="relative left-0 right-0 bottom-0 bg-gradient-to-br from-zinc-800 to-zinc-950 p-5 rounded-t-xl flex flex-col justify-center items-center gap-2">
      <div className="text-md text-zinc-400">Connect with me:</div>
      <div className="flex items-center gap-5">
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.link} target="_blank">
            <Image src={link.icon} alt="link" width={30} height={30} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
