import { projectsData } from "@/data";
import { ProjectCard } from "./ProjectCard";

export const Projects = (): React.ReactElement => {
  return (
    <div className="sm:col-span-8 md:col-span-6">
      <h1 className="text-gray-300 font-medium text-end">
        PROJECTS
      </h1>
      <div className="h-full mt-3 grid md:grid-cols-1 lg:grid-cols-2 gap-3">
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
