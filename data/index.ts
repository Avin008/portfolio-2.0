import { ProjectsDataType } from "../types";

const projectsData: ProjectsDataType[] = [
  {
    id: crypto.randomUUID(),
    name: "Miaka - Ecommerce App",
    img: "/projects/ecommerce.webp",
    gif: "/projects/ecommerce.gif",
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
    name: "Picco - Social Media App",
    img: "/projects/social-media-picco.png",
    gif: "",
    description:
      "Tweet, Connect, Discover. A twitter like social media app",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
      { id: crypto.randomUUID(), name: "Zustand" },
      { id: crypto.randomUUID(), name: "React Query" },
      { id: crypto.randomUUID(), name: "Full-Stack" },
    ],
    githubLink:
      "https://github.com/Avin008/social-media-app",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Snakes - Game",
    img: "/projects/snake-game.webp",
    gif: "/projects/snake-game.gif",
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
    img: "/projects/video-library.webp",
    gif: "/projects/video-library.gif",
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
    img: "/projects/quiz.webp",
    gif: "/projects/quiz.gif",
    description:
      "Anime, Movies, Coding - A Simple Quiz App!",
    techStack: [
      { id: crypto.randomUUID(), name: "React" },
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
    img: "/projects/social-media.webp",
    gif: "/projects/social-media.gif",
    description:
      "Connect. Share. Discover. a social media app",
    techStack: [
      { id: crypto.randomUUID(), name: "React.js" },
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
    img: "/projects/notes.webp",
    gif: "/projects/notes.gif",
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
  {
    id: crypto.randomUUID(),
    name: "Webpack Starter",
    img: "/projects/webpack.webp",
    gif: "/projects/notes.gif",
    description:
      "A simple webpack starter project for basic modern web development needs.",
    techStack: [
      { id: crypto.randomUUID(), name: "Webpack" },
      { id: crypto.randomUUID(), name: "Node.js" },
    ],
    githubLink:
      "https://github.com/Avin008/webpack-starter",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Webpack Starter",
    img: "/projects/component-library.webp",
    gif: "/projects/notes.gif",
    description:
      "This is my Component Library, you can use the components of this library to make sites quickly.",
    techStack: [
      { id: crypto.randomUUID(), name: "Html" },
      { id: crypto.randomUUID(), name: "Css" },
    ],
    githubLink:
      "https://github.com/Avin008/saiyan-ui",
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
