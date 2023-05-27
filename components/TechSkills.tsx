export const TechSkills = (): React.ReactElement => {
  return (
    <div className="col-span-2 border-r border-gray-800">
      <h1 className="text-gray-300 font-medium">
        TECH SKILLS
      </h1>
      <ul className="flex mt-3 flex-col gap-3 text-gray-400 text-sm">
        <li className="w-fit">NEXT.JS</li>
        <li className="w-fit">TYPESCRIPT</li>
        <li className="w-fit">TAILWIND CSS</li>
        <li className="w-fit">NODE</li>
        <li className="w-fit">EXPRESS</li>
        <li className="w-fit">MONGODB</li>
        <li className="w-fit">FIREBASE</li>
        <li className="w-fit">SUPABASE</li>
      </ul>
    </div>
  );
};
