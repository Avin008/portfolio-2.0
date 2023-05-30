"use client";
import { useState } from "react";
import { ProjectsDataType } from "../types";
import Image from "next/image";

export const ProjectCard = ({
  projectData,
}: {
  projectData: ProjectsDataType;
}): React.ReactElement => {
  const [animate, setAnimate] = useState<boolean>(false);

  const toggleAnimate = (value: boolean) => {
    setAnimate(value);
  };

  return (
    <a href={projectData.githubLink} target="_blank">
      <div
        onMouseEnter={() => toggleAnimate(true)}
        onMouseLeave={() => toggleAnimate(false)}
        className="border border-gray-600 hover:shadow-[#13141b] hover:shadow-md hover:cursor-pointer transition-all h-fit shadow-md rounded-md"
      >
        <div className="bg-transparent h-36 rounded-t-md relative">
          <Image
            loading="lazy"
            className="aspect-video transition-all rounded-t-md object-fill"
            src={
              animate ? projectData.img : projectData.img
            }
            alt=""
            fill
          />
        </div>
        <div className="text-gray-300 px-3 py-4 min-h-[230px] flex flex-col gap-4">
          <h2 className="font-semibold">
            {projectData.name}
          </h2>
          <p className="font-light text-gray-300">
            {projectData.description}
          </p>
          <ul className="flex gap-2 flex-wrap items-center">
            {projectData.techStack.map((x) => (
              <li
                key={x.id}
                className="text-xs px-3 py-1 rounded-md text-gray-300 border border-gray-400 w-fit"
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
