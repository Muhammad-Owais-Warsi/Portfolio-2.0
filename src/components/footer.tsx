import GitHub from "../icons/GitHub";
import Twitter from "../icons/twitter";
import LinkedIn from "../icons/linkedIn";
import Hashnode from "../icons/hashnode";
import Instagram from "../icons/instagram";
import Heart from "../icons/heart";
import { useContext } from "react";
import { toggleMode } from "../context/toggle";

const Footer = () => {

  const {mode} = useContext(toggleMode)

  return (
    <footer className={`${mode == "dark" ? "bg-gray-800" : "bg-gray-100"} mt-20`}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-gray-500">
          <strong className="text-purple-600">Connect</strong> with me on the following social media platforms.
        </p>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://hashnode.com/@Owais78"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-purple-600"
            >
              <Hashnode className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/owaiswarsi2/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-purple-600"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/MO_warsi786"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-purple-600"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Muhammad-Owais-Warsi"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-purple-600"
            >
              <span className="sr-only">GitHub</span>
              <GitHub className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-owais-warsi-318987276/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-purple-600"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedIn className="w-6 h-6" />
            </a>
          </li>
        </ul>

        <p className="mx-auto mt-11 max-w-md flex flex-col sm:flex-row items-center justify-center text-center leading-relaxed text-gray-500">
          Made with <Heart className="h-6 w-6 mx-1 text-red-500" /> by <a href="https://github.com/Muhammad-Owais-Warsi"><strong className="ml-1 text-purple-600">Muhammad Owais Warsi</strong></a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
