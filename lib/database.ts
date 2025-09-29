import { getDatabase } from "./mongodb";
import { ExperienceItem, Project, SocialLink, Technology } from "@/types/types";

// Experience data service
export async function getExperiences(): Promise<ExperienceItem[]> {
  try {
    const db = await getDatabase();
    const experiences = await db.collection("experiences").find({}).toArray();
    return experiences.map((doc) => ({
      title: doc.title,
      company: doc.company,
      duration: doc.duration,
      location: doc.location,
      description: doc.description,
      icon: doc.icon,
      alias: doc.alias,
    })) as ExperienceItem[];
  } catch (error) {
    console.error("Error fetching experiences:", error);
    // Fallback to static data if database fails
    return [];
  }
}

// Projects data service
export async function getProjects(): Promise<Project[]> {
  try {
    const db = await getDatabase();
    const projects = await db.collection("projects").find({}).toArray();
    return projects.map((doc) => ({
      name: doc.name,
      description: doc.description,
      image: doc.image,
      url: doc.url,
    })) as Project[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

// Technologies data service
export async function getTechnologies(): Promise<Technology[]> {
  try {
    const db = await getDatabase();
    const technologies = await db.collection("technologies").find({}).toArray();
    return technologies.map((doc) => ({
      name: doc.name,
      icon: doc.icon,
    })) as Technology[];
  } catch (error) {
    console.error("Error fetching technologies:", error);
    return [];
  }
}

// Social links data service
export async function getSocialLinks(): Promise<SocialLink[]> {
  try {
    const db = await getDatabase();
    const socialLinks = await db.collection("socialLinks").find({}).toArray();
    return socialLinks.map((doc) => ({
      name: doc.name,
      icon: doc.icon,
      link: doc.link,
    })) as SocialLink[];
  } catch (error) {
    console.error("Error fetching social links:", error);
    return [];
  }
}

// Portfolio data service (gets all data at once)
export async function getPortfolioData() {
  try {
    const [experiences, projects, technologies, socialLinks] =
      await Promise.all([
        getExperiences(),
        getProjects(),
        getTechnologies(),
        getSocialLinks(),
      ]);

    return {
      experiences,
      projects,
      technologies,
      socialLinks,
    };
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return {
      experiences: [],
      projects: [],
      technologies: [],
      socialLinks: [],
    };
  }
}
