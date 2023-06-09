import Image from "next/image";

export const Intro = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-2 h-80 mt-20">
      <div className="border-white flex-col gap-3 flex px-5 justify-center">
        <h1 className="text-gray-400 font-light flex flex-col text-xl leading-normal tracking-wide">
          <span>
            HELLO THERE,{" "}
            <span className="font-medium text-gray-300">
              I&apos;M AVINASH
            </span>
          </span>
          <span className="">
            A{" "}
            <span className="text-gray-300 font-medium">
              FULL-STACK
            </span>{" "}
            DEVELOPER
          </span>
        </h1>
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          src="/rocket.svg"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};
