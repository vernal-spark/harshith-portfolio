"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { FloatingNavProps, NavItem } from "@/types/types";

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState<boolean>(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto glass-effect shadow-2xl shadow-black/20 z-[5000] pr-2 pl-8 py-3 items-center justify-center space-x-4 px-5 rounded-2xl backdrop-blur-xl",
        className
      )}
    >
      {navItems.map((navItem: NavItem, idx: number) => (
        <Link
          key={`nav-link-${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-white/80 items-center flex space-x-1 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
          )}
          aria-label={`Navigate to ${navItem.name} section`}
        >
          <span className="block sm:hidden">
            <Image
              src={navItem.icon || ""}
              alt={`${navItem.name} icon`}
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
      <Link
        href="/assets/harshith_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium relative px-6 py-2 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
        aria-label="Download resume PDF"
      >
        <span className="block sm:hidden">
          <Image
            src="/assets/navIcons/resume.svg"
            alt="Resume download icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </span>
        <span className="hidden sm:block text-sm">Download Resume</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-green-500 to-transparent h-px" />
      </Link>
    </motion.nav>
  );
};
