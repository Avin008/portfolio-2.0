import { Intro } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pb-5 border border-transparent px-8 space-y-10">
      <Intro />
      <div className="grid grid-cols-8 gap-5">
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
        <div className="col-span-6">
          <h1 className="text-gray-300 font-medium text-end">
            PROJECTS
          </h1>
          <div className="h-full mt-3 grid grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
              <div className="border h-60"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
