type ProjectDataType = {
  name: string;
  img: string;
  description: string;
  techStack: { id: string; name: string }[];
  githubLink: string;
  liveLink: string;
};

export const ProjectCard = ({
  projectData,
}: {
  projectData: ProjectDataType;
}): React.ReactElement => {
  return (
    <div className="border border-gray-600 hover:shadow-[#13141b] hover:shadow-md hover:cursor-pointer transition-all h-fit shadow-md rounded-md">
      <div className="h-40 rounded-t-md relative bg-transparent"></div>
      <div className="text-gray-300 p-2 py-4 h-44 flex flex-col gap-3">
        <h2 className="font-medium">{projectData.name}</h2>
        <p className="text-sm text-gray-400">
          {projectData.description}
        </p>
        <ul className="flex gap-2 flex-wrap items-center">
          {projectData.techStack.map((x) => (
            <li
              key={x.id}
              className="text-xs py-1 px-4 rounded-md text-gray-300 border border-gray-400 w-fit"
            >
              {x.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
