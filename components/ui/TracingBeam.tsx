"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export const TracingBeam: React.FC<TracingBeamProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className={`relative w-full ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 to-emerald-600"
          style={{
            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          }}
        />
      </div>

      {/* Content */}
      <motion.div ref={contentRef} className="relative">
        {children}
      </motion.div>
    </motion.div>
  );
};
