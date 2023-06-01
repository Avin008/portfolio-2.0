import { Intro, Projects, TechSkills } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pb-5 border border-transparent px-8 space-y-10">
      <Intro />
      <div className="grid grid-cols-8 gap-5">
        <TechSkills />
        <Projects />
      </div>
    </main>
  );
}
