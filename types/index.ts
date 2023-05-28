export type ProjectsDataType = {
  id: string;
  name: string;
  img: string;
  description: string;
  techStack: { id: string; name: string }[];
  githubLink: string;
  liveLink: string;
};
