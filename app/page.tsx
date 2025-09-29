import React from "react";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Technologies from "@/components/sections/Technologies";
import { FloatingNav } from "@/components/ui/floating-navbar";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { DataProvider } from "@/components/providers/DataProvider";
import { NavItem } from "@/types/types";

export default function Home(): React.JSX.Element {
  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "/",
      icon: "/assets/navIcons/home.svg",
    },
    {
      name: "Experience",
      link: "#experience",
      icon: "/assets/navIcons/user.svg",
    },
    {
      name: "Project",
      link: "#projects",
      icon: "/assets/navIcons/projects.svg",
    },
    {
      name: "Technologies",
      link: "#tech",
      icon: "/assets/navIcons/technology.svg",
    },
  ];

  return (
    <ErrorBoundary>
      <DataProvider>
        <main>
          <FloatingNav navItems={navItems} className="w-100 h-100" />
          <Hero />
          <Experience />
          <Project />
          <Technologies />
          <Footer />
        </main>
      </DataProvider>
    </ErrorBoundary>
  );
}
