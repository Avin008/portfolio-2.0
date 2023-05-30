import { techSkills } from "@/data";

export const TechSkills = (): React.ReactElement => {
  return (
    <div className="sm:hidden md:block md:col-span-2 border-r border-gray-800">
      <h1 className="text-gray-300 font-medium">
        TECH SKILLS
      </h1>
      <ul className="flex mt-3 uppercase flex-col gap-3 text-gray-400 text-sm">
        {techSkills.map((skill) => (
          <li key={skill.id} className="w-fit">
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
