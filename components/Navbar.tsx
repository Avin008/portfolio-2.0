import { Github, LinkedIn, Twitter } from "../icons";

const socialLinks = {
  github: "https://github.com/Avin008",
  twitter: "https://twitter.com/AvinashMahanan1",
  linkedIn:
    "https://www.linkedin.com/in/avinash-mahananda/",
};

export const Navbar = (): React.ReactElement => {
  return (
    <nav className="border-b fixed left-0 right-0 border-gray-700 shadow-sm h-14 flex justify-between px-8 items-center">
      <div className="">
        <span></span>
        <span className="text-xl">✨</span>
      </div>
      <ul className="flex gap-8 items-center text-gray-400 text-2xl">
        <li className="hover:text-gray-300 transition-all">
          <a href={socialLinks.linkedIn}>
            <LinkedIn />
          </a>
        </li>
        <li className="hover:text-gray-300 transition-all">
          <a href={socialLinks.twitter}>
            <Twitter />
          </a>
        </li>
        <li className="hover:text-gray-300 transition-all">
          <a href={socialLinks.github}>
            <Github />
          </a>
        </li>
      </ul>
    </nav>
  );
};
