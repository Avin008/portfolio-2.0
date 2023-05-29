import { Github, LinkedIn, Twitter } from "../icons";

const socialLinks = {
  github: "https://github.com/Avin008",
  twitter: "https://twitter.com/AvinashMahanan1",
  linkedIn:
    "https://www.linkedin.com/in/avinash-mahananda/",
};

export const Navbar = (): React.ReactElement => {
  return (
    <nav className="fixed w-[60%] z-50 mx-auto left-0 right-0 h-14 flex justify-between items-center">
      <div className="">
        <span></span>
        <span className="text-xl">✨</span>
      </div>
      <ul className="flex gap-8 bg-background bg-opacity-60 items-center border shadow-md border-gray-700 py-2 px-4 rounded-full text-gray-300 text-lg">
        <li className="hover:text-gray-50 transition-all">
          <a target="_blank" href={socialLinks.linkedIn}>
            <LinkedIn />
          </a>
        </li>
        <li className="hover:text-gray-50 transition-all">
          <a target="_blank" href={socialLinks.twitter}>
            <Twitter />
          </a>
        </li>
        <li className="hover:text-gray-50 transition-all">
          <a target="_blank" href={socialLinks.github}>
            <Github />
          </a>
        </li>
      </ul>
    </nav>
  );
};
