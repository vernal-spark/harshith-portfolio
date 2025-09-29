"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { experience } from "@/constants/experience";
import { projects as projectsData } from "@/constants/projects";
import { technologies as technologiesData } from "@/constants/technologies";
import { socialLinks as socialLinksData } from "@/constants/socialLink";
import { ExperienceItem, Project, Technology, SocialLink } from "@/types/types";

interface DataContextType {
  experiences: ExperienceItem[];
  projects: Project[];
  technologies: Technology[];
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
  isUsingFallback: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { data, loading, error } = usePortfolioData();

  // Use database data if available, otherwise fallback to static data
  const experiences =
    data.experiences.length > 0 ? data.experiences : experience;
  const projects = data.projects.length > 0 ? data.projects : projectsData;
  const technologies =
    data.technologies.length > 0 ? data.technologies : technologiesData;
  const socialLinks =
    data.socialLinks.length > 0 ? data.socialLinks : socialLinksData;

  const isUsingFallback = data.experiences.length === 0 && !loading;

  const contextValue: DataContextType = {
    experiences,
    projects,
    technologies,
    socialLinks,
    loading,
    error,
    isUsingFallback,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
