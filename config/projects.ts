import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio",
    companyName: "Portfolio Website",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "A responsive developer portfolio for showcasing projects, experience, skills, and contact information with a modern Next.js experience.",
    websiteLink: "https://esuyawkal.xyz.vercel.app",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Framer Motion", "Vercel", "Git"],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2026-08-31"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Portfolio Experience",
        description:
          "A polished personal brand site built to present projects, background, and technical work in a clean, responsive layout.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This portfolio was built as a personal web presence to present my work, technical skills, project experience, and contact information in a polished, modern format.",
        "The app uses a component-driven Next.js architecture, strong typography, motion, and responsive layout patterns to create a professional portfolio experience.",
      ],
      bullets: [
        "Built a responsive developer portfolio with project and experience sections.",
        "Used Next.js, React, TypeScript, and Tailwind CSS for a modern UI system.",
        "Focused on performance, branding, and a polished presentation for technical work.",
      ],
    },
  },
  {
    id: "ai-meeting-summarizer",
    companyName: "AI Meeting Summarizer",
    type: "Personal",
    category: [ "AI", "Full Stack", "Web Dev"],
    shortDescription:
      "AI-powered meeting assistant for generating concise summaries and key takeaways from conversation data.",
      websiteLink: "https://ai-meeting-summarizer-xyz.vercel.app",
    githubLink: "https://github.com/Esuyawkall/ai-meeting-summarizer",
    techStack: ["Next.js", "React", "Typescript", "Node.js", "Tailwind CSS", "MongoDB"],
    startDate: new Date("2025-12-21"),
    endDate: new Date("2026-01-14"),
    companyLogoImg: "/projects/ai-meeting-summarizer/home_light.png",
    pagesInfoArr: [
      {
        title: "Summary Workflow",
        description:
          "Captures meeting context and turns it into useful notes, action items, and summary snapshots.",
        imgArr: ["/projects/ai-meeting-summarizer/home_light.png", "/projects/ai-meeting-summarizer/upload_light.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project explores a practical AI workflow where large amounts of meeting context are condensed into actionable summaries.",
        "The goal is to reduce time spent manually documenting conversations while keeping the most important notes clear and accessible.",
      ],
      bullets: [
        "Built an AI-assisted summarization workflow for meeting content.",
        "Focused on concise notes, highlights, and action-oriented output.",
        "Designed for productivity and post-meeting follow-up workflows.",
      ],
    },
  },
  {
    id: "clarkson-marketplace",
    companyName: "Clarkson Marketplace",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "A campus-focused marketplace for buying and selling goods, resources, and essentials within a student community.",
    githubLink: "https://github.com/Esuyawkall/Campus-Marketplace",
    techStack: ["Python", "Flask", "HTML 5", "CSS 3", "MySQL", "SQL"],
    startDate: new Date("2026-03-21"),
    endDate: new Date("2026-04-28"),
    companyLogoImg: "/projects/clarkson-marketplace/marketplace_home.png",
    pagesInfoArr: [
      {
        title: "Marketplace Experience",
        description:
          "A student marketplace experience for browsing listings, managing posts, and simplifying campus commerce.",
        imgArr: ["/projects/clarkson-marketplace/marketplace_home.png", "/projects/clarkson-marketplace/marketplace_profile.png", "/projects/clarkson-marketplace/marketplace_orders.png"
          , "/projects/clarkson-marketplace/marketplace_messages.png", "/projects/clarkson-marketplace/marketplace_admin_control.png"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Campus Marketplace is designed around a real student need: connecting people on campus to buy, sell, and exchange useful items in a simple and trusted way.",
        "The project emphasizes a clean user experience, modular product listing flows, and practical utility for everyday student life.",
      ],
      bullets: [
        "Created a student marketplace for trading campus-related goods and services.",
        "Designed for simple listing, browsing, and community-driven discovery.",
        "Focused on a clean, user-friendly experience for a college environment.",
      ],
    },
  },
  {
    id: "children-learning-ground",
    companyName: "Children Learning Ground",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Educational web project for children with simple, engaging interfaces and learning-focused content.",
    githubLink: "https://github.com/Esuyawkall/Children-Learning-Ground",
    techStack: ["HTML 5", "CSS 3", "Javascript", "PHP"],
    startDate: new Date("2025-10-31"),
    endDate: new Date("2025-10-31"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Learning Experience",
        description:
          "An accessible, beginner-friendly learning interface tailored for children and early-age education.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project is focused on making learning more engaging and approachable for children through a clear, playful digital experience.",
        "The idea is to create a way for educational content to feel interactive, intuitive, and easy for young users to understand.",
      ],
      bullets: [
        "Built an educational interface for children and early learners.",
        "Prioritized friendly design, readability, and low-friction navigation.",
        "Focused on intuitive, learning-first interactions.",
      ],
    },
  },
  {
    id: "digital-lifelines-website",
    companyName: "Digital Lifelines Website",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Website version of the Digital Lifelines project, focused on digital support resources and clear service discovery experience.",
    websiteLink: "https://digitallifelines.com",
    githubLink: "https://github.com/jeannamatthews-classes/group-project-digital-lifelines",
    techStack: ["Flutter", "Dart", "HTML 5", "CSS 3"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-05-01"),
    companyLogoImg: "/projects/digital-lifelines-web/logo.png",
    pagesInfoArr: [
      {
        title: "Website Experience",
        description:
          "A landing and informational experience designed to make community resources easy to explore and understand.",
        imgArr: ["/projects/digital-lifelines-web/home.png", "/projects/digital-lifelines-web/explore.png", "/projects/digital-lifelines-web/profile.png"
          , "/projects/digital-lifelines-web/home_extra.png", "/projects/digital-lifelines-web/login.png", "/projects/digital-lifelines-web/template.png"
          , "/projects/digital-lifelines-web/upload.png", "/projects/digital-lifelines-web/trending.png"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Digital Lifelines is a community-focused project designed to connect people with helpful resources and support information in a simple and accessible way.",
        "The website version presents the project through a clean, discoverable interface that highlights the service and user journey clearly.",
      ],
      bullets: [
        "Built the website version of the Digital Lifelines concept.",
        "Focused on accessiblity, clarity, and a positive user journey.",
        "Connected the digital experience to the project’s broader support-focused mission.",
      ],
    },
  },
  {
    id: "digital-lifelines-app",
    companyName: "Digital Lifelines App",
    type: "Professional",
    category: ["Mobile Dev", "UI/UX"],
    shortDescription:
      "App version of the Digital Lifelines project, focused on resource discovery and support through a mobile-friendly experience.",
    githubLink: "https://github.com/jeannamatthews-classes/group-project-digital-lifelines",
    techStack: ["Flutter", "Dart"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-05-01"),
    companyLogoImg: "/projects/digital-lifelines-app/logo.png",
    pagesInfoArr: [
      {
        title: "App Experience",
        description:
          "A mobile-first experience designed to deliver accessible help and resources directly through a user-friendly app interface.",
        imgArr: ["/projects/digital-lifelines-app/home.jpg", "/projects/digital-lifelines-app/discovery.jpg", "/projects/digital-lifelines-app/party_mode.jpg"
          , "/projects/digital-lifelines-app/info.jpg", "/projects/digital-lifelines-app/questions.jpg"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The app version extends the Digital Lifelines idea into a mobile experience focused on convenience, accessibility, and practical support.",
        "It is intended to make resources easier to reach when users need them quickly and in a simpler format.",
      ],
      bullets: [
        "Built the app version of the Digital Lifelines project.",
        "Aimed for mobile accessibility and a smooth support-seeking experience.",
        "Aligned the app with the same community-centric mission as the website version.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
