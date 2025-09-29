export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  icon: string;
  description: string[];
  alias: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

export interface Project {
  name: string;
  image: string;
  description: string;
  url: string;
}

export interface NavItem {
  name: string;
  link: string;
  icon?: string;
}

export interface SectionProps {
  id: string;
  header?: string;
  children: React.ReactNode;
}

export interface LogoProps {
  source: string;
  alt?: string;
  className?: string;
}

export interface ExperienceCardProps {
  experience: ExperienceItem;
}

export interface ProjectCardProps {
  project: Project;
}

export interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export interface Technology {
  name: string;
  icon: string;
}
