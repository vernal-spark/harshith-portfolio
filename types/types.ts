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
