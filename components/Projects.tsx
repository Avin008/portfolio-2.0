import { projectsData } from "@/data";
import { ProjectCard } from "./ProjectCard";

export const Projects = (): React.ReactElement => {
  return (
    <div className="col-span-6">
      <h1 className="text-gray-300 font-medium text-end">
        PROJECTS
      </h1>
      <div className="h-full mt-3 grid grid-cols-2 gap-3">
        {projectsData?.map((project) => (
          <ProjectCard
            key={project.id}
            projectData={project}
          />
        ))}
      </div>
    </div>
  );
};
