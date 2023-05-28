import { ProjectsDataType } from "../types";

const projectsData: ProjectsDataType[] = [
  {
    id: crypto.randomUUID(),
    name: "Picco - Social Media",
    img: "",
    description: "",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "React Query" },
      { id: crypto.randomUUID(), name: "full-stack" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Snakes - Retro Game",
    img: "",
    description: "",
    techStack: [
      { id: crypto.randomUUID(), name: "React.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
    ],
    githubLink:
      "https://github.com/Avin008/roc8-moonshot-snake-assignment",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Miaka - Ecommerce",
    img: "",
    description: "",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Learno - Video Library",
    img: "",
    description: "",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Quizo - Quiz",
    img: "",
    description: "",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "Redux Toolkit" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Tribble - Instagram clone",
    img: "",
    description: "",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink: "",
    liveLink: "",
  },
];

export { projectsData };
