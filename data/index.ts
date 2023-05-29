import { ProjectsDataType } from "../types";

const projectsData: ProjectsDataType[] = [
  {
    id: crypto.randomUUID(),
    name: "Miaka - Ecommerce App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fecommerce.png&w=1920&q=75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec eros accumsan turpis.",
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
    name: "Learno - Video Library App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fvideo-library.png&w=1920&q=75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec eros accumsan turpis",
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
    name: "Snakes - Game",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fsnakes.png&w=1920&q=75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec eros accumsan turpis",
    techStack: [
      { id: crypto.randomUUID(), name: "React" },
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
    name: "Quizo - Quiz App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fquiz.png&w=1920&q=75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec eros accumsan turpis",
    techStack: [
      { id: crypto.randomUUID(), name: "React" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Css" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Tribble - Social Media App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Ftribble.png&w=1920&q=75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec eros accumsan turpis",
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
    name: "Notation - Notes App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fnotes.png&w=1920&q=75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec eros accumsan turpis",
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

const techSkills: { id: string; name: string }[] = [
  { id: crypto.randomUUID(), name: "Next.js" },
  { id: crypto.randomUUID(), name: "TypeScript" },
  { id: crypto.randomUUID(), name: "Tailwind.css" },
  { id: crypto.randomUUID(), name: "React Query" },
  { id: crypto.randomUUID(), name: "Zustand" },
  { id: crypto.randomUUID(), name: "Redux Toolkit" },
  { id: crypto.randomUUID(), name: "Node" },
  { id: crypto.randomUUID(), name: "Express" },
  { id: crypto.randomUUID(), name: "Mongo-db" },
  { id: crypto.randomUUID(), name: "Firebase" },
  { id: crypto.randomUUID(), name: "Supabase" },
];

export { projectsData, techSkills };
