export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  category: "Web" | "ML" | "Games" | "Systems" | "Data";
  year?: string;
  links: LinkItem[];
};

export type SkillGroup = {
  title: string;
  skills: {
    name: string;
    level: "Basic" | "Intermediate" | "Advanced";
  }[];
};

export type ResumeEntry = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  links?: LinkItem[];
  tags: string[];
};

export const profile = {
  name: "Daniel Guo",
  role: "Software Engineer",
  location: "Los Angeles, CA",
  email: "dguo314@gmail.com",
  github: "https://github.com/DiiGii",
  linkedin: "https://www.linkedin.com/in/daniel-guo-122425241/",
  resumePath: "/Daniel_Guo_resume.pdf",
  intro:
    "Computer Science student at UCLA building across web, machine learning, games, systems, and data-heavy tools.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Basic" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Basic" },
      { name: "Flask", level: "Intermediate" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "C#", level: "Intermediate" },
      { name: "Bash", level: "Intermediate" },
      { name: "Java", level: "Basic" },
    ],
  },
  {
    title: "ML and Data",
    skills: [
      { name: "PyTorch", level: "Advanced" },
      { name: "Pandas", level: "Intermediate" },
      { name: "Dask", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "scikit-learn", level: "Intermediate" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "SolidWorks", level: "Intermediate" },
      { name: "Verilog", level: "Basic" },
      { name: "Three.js", level: "Intermediate" },
    ],
  },
];

export const resumeEntries: ResumeEntry[] = [
  {
    role: "B.S. Computer Science",
    organization: "UCLA",
    period: "Expected 2026",
    location: "Los Angeles, CA",
    summary:
      "Coursework and project work across software engineering, data science, machine learning, systems, and interactive graphics.",
    bullets: [
      "Built projects spanning full-stack apps, ML notebooks, games, systems tools, and hardware-adjacent work.",
      "Focused on practical engineering quality: readable interfaces, measurable behavior, and clean iteration.",
    ],
    tags: ["Education", "Computer Science"],
  },
  {
    role: "Full-Stack Project Developer",
    organization: "Bruin Bowl",
    period: "MERN stack",
    summary:
      "Interactive UCLA trivia game with a React frontend and backend services for gameplay flow.",
    bullets: [
      "Implemented user-facing gameplay screens and coordinated frontend/backend integration.",
      "Kept the product demo-friendly with a walkthrough and source repository links.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/david-sai/bruin-bowl" },
      {
        label: "Walkthrough",
        href: "https://www.youtube.com/watch?v=dEowXv8cbus&ab_channel=AndrewZheng",
      },
    ],
    tags: ["React", "MongoDB", "Express", "Node"],
  },
  {
    role: "Machine Learning Project Developer",
    organization: "Emoji GAN",
    period: "PyTorch",
    summary:
      "Adversarial neural network project for generating emoji-like images from learned distributions.",
    bullets: [
      "Built and iterated on a Python notebook using PyTorch, NumPy, and PIL.",
      "Packaged the work as a reproducible notebook for review and experimentation.",
    ],
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/dguo0261/gan111" },
    ],
    tags: ["PyTorch", "GAN", "Python"],
  },
  {
    role: "Systems Tool Builder",
    organization: "Terminal Emulator",
    period: "Go and Fyne",
    summary:
      "A simple UNIX-like terminal emulator built with Go, Fyne, bufio, and pty.",
    bullets: [
      "Explored shell process handling, UI state, and terminal-like interaction from scratch.",
      "Kept the project small enough to understand while still exercising real systems concepts.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/DiiGii/terminal-emulator" },
    ],
    tags: ["Go", "Fyne", "Systems"],
  },
];

export const projects: Project[] = [
  {
    title: "Bruin Bowl",
    description: "An interactive UCLA trivia game built on the MERN stack.",
    category: "Web",
    stack: ["MongoDB", "Express", "React", "Node"],
    links: [
      { label: "GitHub", href: "https://github.com/david-sai/bruin-bowl" },
      {
        label: "Walkthrough",
        href: "https://www.youtube.com/watch?v=dEowXv8cbus&ab_channel=AndrewZheng",
      },
    ],
  },
  {
    title: "Massature",
    description: "A 2D sci-fi platformer game made with Unity 2D and C#.",
    category: "Games",
    stack: ["Unity", "C#"],
    links: [
      { label: "GitHub", href: "https://github.com/Anthonyled/Project-Rudd" },
      { label: "Live Demo", href: "https://vlad-the-inhaler.itch.io/mass" },
    ],
  },
  {
    title: "Emoji GAN",
    description:
      "An adversarial neural network that uses machine learning to generate emojis.",
    category: "ML",
    stack: ["Python", "PyTorch", "NumPy", "PIL"],
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/dguo0261/gan111" },
    ],
  },
  {
    title: "Purrlicious Boba",
    description:
      "Responsive website for a local cat cafe and boba shop built with TypeScript and Tailwind CSS.",
    category: "Web",
    stack: ["TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/devanshkat/purrlicious-boba" },
      {
        label: "Demo",
        href: "https://purrlicious-boba.onrender.com/newsletter",
      },
    ],
  },
  {
    title: "Cup Phong",
    description:
      "A low-gravity 3D twist on Cup Pong built with JavaScript, HTML, and Three.js.",
    category: "Games",
    stack: ["JavaScript", "Three.js", "HTML"],
    links: [{ label: "GitHub", href: "https://github.com/Justin-Mealey/Cup-Phong" }],
  },
  {
    title: "Seven Segment Subway Surfers",
    description:
      "A fast-paced endless runner inspired by Subway Surfers, built in Verilog for the Basys3 board.",
    category: "Systems",
    stack: ["Verilog", "FPGA", "Basys3"],
    links: [{ label: "GitHub", href: "https://github.com/Justin-Mealey/Cup-Phong" }],
  },
  {
    title: "Beat Predictors",
    description:
      "Data science exploration of the Spotify Tracks Dataset with classical ML and neural methods.",
    category: "Data",
    stack: ["Python", "Pandas", "scikit-learn", "NumPy", "PyTorch"],
    links: [{ label: "GitHub", href: "https://github.com/zacharydesoto/beat-predictor" }],
  },
  {
    title: "Terminal Emulator",
    description:
      "A simple UNIX-like terminal emulator built in Go with Fyne, bufio, and pty.",
    category: "Systems",
    stack: ["Go", "Fyne", "pty"],
    links: [{ label: "GitHub", href: "https://github.com/DiiGii/terminal-emulator" }],
  },
  {
    title: "Blockchain From Scratch",
    description:
      "An implementation of blockchain mining and consensus from scratch with Python and Flask.",
    category: "Systems",
    stack: ["Python", "Flask", "Requests"],
    links: [{ label: "GitHub", href: "https://github.com/DiiGii/blockchain-scratch" }],
  },
  {
    title: "RecSys",
    description:
      "Exploration of recommendation systems with collaborative and content-based filtering.",
    category: "Data",
    stack: ["Python", "Pandas", "scikit-learn", "MovieLens"],
    links: [{ label: "GitHub", href: "https://github.com/DiiGii/recommendation-system" }],
  },
  {
    title: "GPT-2 From Scratch",
    description:
      "Implementation-oriented GPT-2 project built with PyTorch, pandas, and Hugging Face tooling.",
    category: "ML",
    stack: ["PyTorch", "Transformers", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/DiiGii/gpt2-scratch" }],
  },
  {
    title: "AutoRAG",
    description:
      "Streamlit app for autonomous retrieval-augmented generation using GPT-4o-mini and PgVector.",
    category: "ML",
    stack: ["Streamlit", "RAG", "PgVector", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/DiiGii/auto-rag" },
      { label: "Live Demo", href: "https://dii-gii-auto-rag.streamlit.app/" },
    ],
  },
  {
    title: "snakeVsnake",
    description:
      "A snake agent using reinforcement learning and Deep Q-Networks to compete with human players.",
    category: "ML",
    stack: ["Python", "RL", "DQN"],
    links: [{ label: "GitHub", href: "https://github.com/zacharydesoto/snakeVsnake" }],
  },
  {
    title: "Mike Birds",
    description: "Autoscroll game with boids-style flocking built with Three.js, HTML, and CSS.",
    category: "Games",
    stack: ["Three.js", "JavaScript", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/nouturnsign/mike-birds" }],
  },
];
