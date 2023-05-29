import { ProjectsDataType } from "../types";

const projectsData: ProjectsDataType[] = [
  {
    id: crypto.randomUUID(),
    name: "Miaka - Ecommerce App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fecommerce.png&w=1920&q=75",
    gif: "",
    description:
      "Elevate Your Style, Discover the Best in Men's Fashion.",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Zustand" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink:
      "https://github.com/Avin008/miaka-ecommerce-app",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Snakes - Game",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fsnakes.png&w=1920&q=75",
    gif: "",
    description:
      "Slither and Eat, Experience the old Snake Game!",
    techStack: [
      { id: crypto.randomUUID(), name: "React" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
    ],
    githubLink:
      "https://github.com/Avin008/roc8-moonshot-snake-assignment",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Learno - Video Library App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fvideo-library.png&w=1920&q=75",
    gif: "",
    description:
      "Your Go-To Video Library for Inspiration and Skills!",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Zustand" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink:
      "https://github.com/Avin008/learno-video-library",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Quizo - Quiz App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fquiz.png&w=1920&q=75",
    gif: "",
    description:
      "Anime, Movies, Coding - A Simple Quiz App!",
    techStack: [
      { id: crypto.randomUUID(), name: "React" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Css" },
      { id: crypto.randomUUID(), name: "Redux Toolkit" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink: "https://github.com/Avin008/Quizo-quiz-app",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Tribble - Social Media App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Ftribble.png&w=1920&q=75",
    gif: "",
    description:
      "Connect. Share. Discover. a social media app",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Redux Toolkit" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink:
      "https://github.com/Avin008/Tribble-social-media-app-typescript",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Notation - Notes App",
    img: "https://avinashmahananda.vercel.app/_next/image?url=%2Fnotes.png&w=1920&q=75",
    gif: "",
    description:
      "Notes made simple. Easy and efficient note-taking app",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Zustand" },
      { id: crypto.randomUUID(), name: "Firebase" },
      { id: crypto.randomUUID(), name: "React Query" },
    ],
    githubLink:
      "https://github.com/Avin008/notation-notes-app",
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
