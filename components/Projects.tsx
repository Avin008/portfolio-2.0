import { ProjectCard } from "./ProjectCard";

type ProjectsDataType = {
  id: string;
  name: string;
  img: string;
  description: string;
  techStack: { id: string; name: string }[];
  githubLink: string;
  liveLink: string;
};

const projectsData: ProjectsDataType[] = [
  {
    id: crypto.randomUUID(),
    name: "Picco - Social Media App",
    img: "",
    description:
      "lorem thar mor ma axu da par arau mora dat xioax",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Snakes - A Snake Game",
    img: "",
    description:
      "lorem thar mor ma axu da par arau mora dat xioax",
    techStack: [
      { id: crypto.randomUUID(), name: "React.js" },
      { id: crypto.randomUUID(), name: "Tailwind.css" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Miaka - Ecommerce App",
    img: "",
    description:
      "lorem thar mor ma axu da par arau mora dat xioax",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Learno - A Video Library App",
    img: "",
    description:
      "lorem thar mor ma axu da par arau mora dat xioax",
    techStack: [
      { id: crypto.randomUUID(), name: "Next.js" },
      { id: crypto.randomUUID(), name: "TypeScript" },
    ],
    githubLink: "",
    liveLink: "",
  },
];

export const Projects = (): React.ReactElement => {
  return (
    <div className="col-span-6">
      <h1 className="text-gray-300 font-medium text-end">
        PROJECTS
      </h1>
      <div className="h-full mt-3 grid grid-cols-2 gap-3">
        {projectsData?.map((x) => (
          <ProjectCard projectData={x} />
        ))}
      </div>
    </div>
  );
};
