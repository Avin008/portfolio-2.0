import { ProjectsDataType } from "../types";
import Image from "next/image";

export const ProjectCard = ({
  projectData,
}: {
  projectData: ProjectsDataType;
}): React.ReactElement => {
  return (
    <a href={projectData.githubLink} target="_blank">
      <div className="border border-gray-600 hover:shadow-[#13141b] hover:shadow-md hover:cursor-pointer transition-all h-fit shadow-md rounded-md">
        <div className="h-40 rounded-t-md relative bg-transparent">
          {/* <Image
          className="aspect-video rounded-t-md object-cover"
          src={projectData.img}
          alt=""
          fill
        /> */}
        </div>
        <div className="text-gray-300 p-2 py-4 min-h-[245px] flex flex-col gap-3">
          <h2 className="font-medium">
            {projectData.name}
          </h2>
          <p className="text-base text-gray-400">
            {projectData.description}
          </p>
          <ul className="flex gap-2 flex-wrap items-center">
            {projectData.techStack.map((x) => (
              <li
                key={x.id}
                className="text-xs py-1 px-3 rounded-md text-gray-400 border border-gray-400 w-fit"
              >
                {x.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};
