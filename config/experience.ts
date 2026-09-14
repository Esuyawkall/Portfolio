import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "digital-lifelines",
    position: "Mobile App & Web Developer",
    company: "Digital Lifelines (Startup)",
    location: "Potsdam, NY",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    description: [
      "Developing mobile and web applications as part of a startup focused on digital lifeline and emergency information.",
      "Designing responsive user interfaces and implementing application features across mobile and web platforms.",
      "Working collaboratively on application architecture, data management, and deployment workflows.",
    ],
    achievements: [
      "Contributed to the development of Digital Lifelines as a Mobile & Web Developer.",
      "Developed cross-platform mobile functionality using Flutter and contributed to the web application.",
      "Implemented JSON import and export functionality for application data.",
      "Worked with Git and GitHub throughout the development lifecycle.",
      "Built and tested Android release builds for application distribution.",
    ],
    skills: [
      "Flutter",
      "Typescript",
      "Javascript",
      "React",
      "Git",
      "Github",
    ],
  },

  {
    id: "clarkson-university",
    position: "Software Engineer",
    company: "Clarkson University",
    location: "Potsdam, NY",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    description: [
      "Collaborated with faculty and staff to redesign user flows and improve the usability of Clarkson University's Sponsored Research Services website.",
      "Organized and updated digital documentation storage systems to improve information access and management.",
      "Conducted regular audits and provided recommendations to improve accuracy, accessibility, and user engagement.",
    ],
    achievements: [
      "Redesigned user flows for Clarkson University's Sponsored Research Services website in collaboration with faculty and staff.",
      "Improved the organization and accessibility of digital documentation systems.",
      "Conducted audits to identify opportunities for improving accuracy, accessibility, and user engagement.",
    ],
    skills: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Git",
      "Github",
    ],
  },

  {
    id: "elihu-software",
    position: "Software Engineer Intern",
    company: "Elihu Software",
    location: "Addis Ababa, Ethiopia",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-11-01"),
    description: [
      "Designed and developed a student portal providing access to blogs, research articles, and inter-office communication.",
      "Developed and maintained backend systems and databases supporting the student portal.",
      "Analyzed and improved existing data systems under the guidance of senior developers.",
    ],
    achievements: [
      "Designed a student portal website providing access to blogs, research articles, and inter-office communication.",
      "Developed and maintained backend systems and database functionality for the platform.",
      "Analyzed existing data systems and implemented improvements under the guidance of senior developers.",
    ],
    skills: [
      "React",
      "Javascript",
      "Node.js",
      "SQL",
      "Git",
      "Github",
    ],
  },
];