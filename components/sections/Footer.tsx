"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/constants/socialLink";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20" id="contact">
      <div className="relative z-10 glass-effect border-t border-white/10 p-12 rounded-t-3xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, creative
              projects, or just having a chat about technology.
            </p>

            <div className="flex justify-center items-center gap-4 mb-8">
              {socialLinks.map(({ name, icon, link }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/5 hover:bg-green-500/20 p-3 border rounded-xl border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                    aria-label={`Connect on ${name}`}
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src={icon}
                        alt={`${name} link`}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/50 text-sm">
                © 2024 Harshith. Built with Next.js, TypeScript, and Tailwind
                CSS.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
