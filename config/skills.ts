import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // =========================
  // Core / Strong Skills
  // =========================
  {
    name: "TypeScript",
    description:
      "Build reliable and maintainable applications with static typing, modern JavaScript features, and strong developer tooling.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "Build interactive web applications using modern JavaScript, asynchronous programming, APIs, and browser technologies.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "React",
    description:
      "Build scalable and interactive user interfaces using components, hooks, state management, and modern React patterns.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Python",
    description:
      "Develop applications, scripts, and backend solutions using Python and its extensive ecosystem.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Next.js",
    description:
      "Build full-stack web applications with routing, layouts, server-side features, API routes, and modern React architecture.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Node.js",
    description:
      "Develop server-side applications and APIs using JavaScript, asynchronous programming, and the Node.js ecosystem.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "Build REST APIs and backend services using a lightweight and flexible Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Tailwind CSS",
    description:
      "Create responsive and modern interfaces using a utility-first CSS framework and reusable design patterns.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "HTML5",
    description:
      "Structure accessible, semantic, and modern web applications using HTML5 standards.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description:
      "Create responsive and polished interfaces using modern CSS, layouts, animations, and responsive design.",
    rating: 5,
    icon: Icons.css3,
  },

  // =========================
  // Backend / Databases
  // =========================
  {
    name: "MySQL",
    description:
      "Design and manage relational databases for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Supabase",
    description:
      "Build applications with PostgreSQL databases, authentication, Row Level Security, storage, and backend services.",
    rating: 4,
    icon: Icons.supabase,
  },
  {
    name: "MongoDB",
    description:
      "Work with flexible NoSQL data models and integrate document databases into full-stack applications.",
    rating: 4,
    icon: Icons.mongodb,
  },

  // =========================
  // Development Tools
  // =========================
  {
    name: "Git",
    description:
      "Manage source code, branches, commits, merges, and collaborative development workflows.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "GitHub",
    description:
      "Collaborate on software projects using repositories, branches, pull requests, issues, and Git-based workflows.",
    rating: 5,
    icon: Icons.github,
  },
  {
    name: "Vercel",
    description:
      "Deploy and host modern web applications with automated builds, Git integration, domains, and serverless features.",
    rating: 4,
    icon: Icons.vercel,
  },
  {
    name: "Docker",
    description:
      "Containerize applications and create consistent development and deployment environments.",
    rating: 3,
    icon: Icons.docker,
  },

  // =========================
  // Programming Languages
  // =========================
  {
    name: "Java",
    description:
      "Develop object-oriented applications while applying core programming and software engineering concepts.",
    rating: 3,
    icon: Icons.java,
  },
  {
    name: "C++",
    description:
      "Apply object-oriented programming, data structures, algorithms, and fundamental systems programming concepts.",
    rating: 3,
    icon: Icons.cpp,
  },

  // =========================
  // Frontend / UI
  // =========================
  {
    name: "Angular",
    description:
      "Build structured web applications using TypeScript, components, services, routing, and Angular's application architecture.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Redux",
    description:
      "Manage predictable application state using centralized state management and modern Redux patterns.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Material UI",
    description:
      "Build responsive React interfaces using reusable components based on Material Design.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Bootstrap",
    description:
      "Create responsive interfaces using a component-based CSS framework and responsive grid system.",
    rating: 3,
    icon: Icons.bootstrap,
  },

  // =========================
  // Mobile
  // =========================
  {
    name: "Flutter",
    description:
      "Build cross-platform mobile applications using Dart, reusable widgets, and responsive UI patterns.",
    rating: 3,
    icon: Icons.flutter,
  },
  {
    name: "React Native",
    description:
      "Build cross-platform mobile applications using React and native platform components.",
    rating: 3,
    icon: Icons.react,
  },

  // =========================
  // Cloud / Deployment
  // =========================
  {
    name: "AWS",
    description:
      "Develop foundational knowledge of cloud infrastructure, deployment, storage, compute, and application services.",
    rating: 3,
    icon: Icons.amazonaws,
  },

  // =========================
  // Currently Developing
  // =========================
  {
    name: "GraphQL",
    description:
      "Learn to design flexible APIs and efficiently query structured application data.",
    rating: 2,
    icon: Icons.graphql,
  },
  {
    name: "Socket.io",
    description:
      "Develop real-time applications using bidirectional communication between clients and servers.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Nest.js",
    description:
      "Learn to build scalable and maintainable backend applications using a structured Node.js framework.",
    rating: 2,
    icon: Icons.nestjs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);