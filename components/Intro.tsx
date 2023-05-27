import Image from "next/image";

export const Intro = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-2 h-80 mt-20">
      <div className="border-white flex-col gap-3 flex px-5 justify-center">
        <h1 className="text-gray-400 font-light flex flex-col text-4xl leading-normal tracking-wide">
          <span>
            HELLO THERE,{" "}
            <span className="font-medium text-gray-300">
              I'M AVINASH
            </span>
          </span>
          <span className="">A FULL-STACK DEVELOPER</span>
        </h1>
      </div>
      <div className="relative">
        <Image src="/rocket.svg" alt="" fill />
      </div>
    </div>
  );
};
