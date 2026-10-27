/**
 * Portfolio Data — Saurabh Kumar
 * Single source of truth for portfolio content.
 */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  accentDim: string;
  technologies: string[];
  status: string;
  repoUrl: string;
  demoUrl?: string;
}

export interface Profile {
  name: string;
  education: string;
  institution: string;
  academicStage: string;
  headline: string;
  subheadline: string;
  bio: string[];
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  codeforces: string;
  codechef: string;
  resumePath: string;
}

export interface CompetitiveProgramming {
  platform: string;
  handle: string;
  url: string;
  focus: string;
  note: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

// ============================================
// PROFILE
// ============================================
export const profile: Profile = {
  name: "Saurabh Kumar",
  education: "Computer Science & Engineering",
  institution: "NIT Patna",
  academicStage: "Undergraduate",
  headline: "Building software with curiosity and care for fundamentals.",
  subheadline:
    "I'm Saurabh, a computer science student at NIT Patna interested in backend engineering, systems programming, networking, and algorithms. I enjoy understanding how software works beneath abstractions and building reliable systems.",
  bio: [
    "I'm a Computer Science & Engineering student at NIT Patna. My primary engineering interests are in backend development, systems programming, and understanding how networked software works — from TCP sockets and event loops to database design and API architecture.",
    "I've built projects across the stack: a Redis-inspired in-memory server in C++ using epoll and non-blocking sockets, an AI-oriented mock interview platform, and a collaborative DSA practice platform with a code execution engine. I also solve algorithmic problems regularly on LeetCode, Codeforces, and CodeChef.",
    "I'm drawn to engineering that requires thinking carefully about data structures, concurrency, network protocols, and modular architecture. I prefer building things that work reliably over things that merely look impressive.",
  ],
  email: "saurabhkumar1542007@gmail.com",
  github: "https://github.com/Saurabh-Kumar-071",
  linkedin: "https://linkedin.com/in/saurabh-kumar-254a50326",
  leetcode: "https://leetcode.com/u/AlgoForge_sk/",
  codeforces: "https://codeforces.com/profile/Saurabh-Kumar-071",
  codechef: "https://www.codechef.com/users/saurabh_yad1",
  resumePath: "/2406011_Saurabh_CSE.pdf",
};

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: "miniredis",
    name: "MiniRedis",
    tagline: "Asynchronous In-Memory Key-Value Server in C++",
    description:
      "A high-concurrency TCP key-value server written from scratch in C++17. Built with an event-driven reactor loop using Linux epoll, non-blocking sockets, RESP protocol compliance for core commands, and automated persistence.",
    accentColor: "var(--accent-redis)",
    accentDim: "var(--accent-redis-dim)",
    status: "Live Deployment",
    technologies: ["C++17", "Linux", "epoll", "POSIX Sockets", "RESP Protocol", "Docker"],
    repoUrl: "https://github.com/Saurabh-Kumar-071/Mini-redis",
    demoUrl: "https://miniredis-web.onrender.com/",
  },
  {
    id: "interviewpilot",
    name: "InterviewPilot AI",
    tagline: "AI-Driven Mock Interview & Career Preparation Platform",
    description:
      "A full-stack web application designed for technical interview preparation. Features AI-powered resume evaluations, ATS scoring, structured mock interview workflows, and atomic credit transactions.",
    accentColor: "var(--accent-interview)",
    accentDim: "var(--accent-interview-dim)",
    status: "Live Deployment",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Google Gemini AI", "Redis", "Tailwind CSS"],
    repoUrl: "https://github.com/Saurabh-Kumar-071/InterviewPilot-ai",
    demoUrl: "https://interview-pilot-ai-five.vercel.app/",
  },
  {
    id: "dsasaga",
    name: "DSA Saga",
    tagline: "Web-based DSA Practice & Code Execution Platform",
    description:
      "An interactive algorithmic practice platform with a custom multi-language code editor, live syntax highlighting, autocompletion, and a containerized Docker execution sandbox supporting multiple programming languages.",
    accentColor: "var(--accent-dsa)",
    accentDim: "var(--accent-dsa-dim)",
    status: "In Development",
    technologies: ["React", "Next.js", "TypeScript", "Docker", "Node.js", "MongoDB"],
    repoUrl: "https://github.com/Vivekkumar0995/DSAsaga",
  },
];

// ============================================
// COMPETITIVE PROGRAMMING (Clean, No Rating Numbers)
// ============================================
export const competitiveProgramming: CompetitiveProgramming[] = [
  {
    platform: "LeetCode",
    handle: "AlgoForge_sk",
    url: "https://leetcode.com/u/AlgoForge_sk/",
    focus: "Data Structures & Algorithms",
    note: "Practicing algorithmic patterns covering Dynamic Programming, Trees, Graphs, and Data Structures.",
  },
  {
    platform: "Codeforces",
    handle: "Saurabh-Kumar-071",
    url: "https://codeforces.com/profile/Saurabh-Kumar-071",
    focus: "Contest Problem Solving",
    note: "Competing in timed algorithmic contests focusing on speed, implementation, and mathematical reasoning.",
  },
  {
    platform: "CodeChef",
    handle: "saurabh_071",
    url: "https://www.codechef.com/users/saurabh_071",
    focus: "Algorithmic Challenges",
    note: "Participating in Starters and rated rounds testing data structures and problem-solving logic.",
  },
];

// ============================================
// TECHNICAL TOOLBOX (Complete & Well-Organized)
// ============================================
export const techStack: TechCategory[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Systems & Networking",
    items: ["TCP/IP Sockets", "epoll (Linux)", "Event-Driven I/O", "POSIX Sockets", "Docker", "CMake"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "Next.js", "RESTful APIs", "JWT Auth", "Redis"],
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS", "Modern CSS", "HTML5"],
  },
  {
    category: "Databases & Storage",
    items: ["MongoDB", "Mongoose", "In-Memory KV Stores", "Redis (RESP)"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Linux CLI", "VS Code", "Vite", "LaTeX"],
  },
];

// ============================================
// NAVIGATION
// ============================================
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "DSA & CP", href: "#dsa" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Résumé", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
