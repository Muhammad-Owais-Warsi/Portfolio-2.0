import { Card, CardHeader } from "@nextui-org/react";
import GitHub from "../icons/GitHub";
import Link from "../icons/link";
import { useContext } from "react";
import { toggleMode } from "../context/toggle";

type ProjectProp = {
  project: {
    name: string;
    stack: string;
    overview: string;
    github: string;
    link: string;
  };
};

export default function ProjectCard({ project }: ProjectProp) {
  const { mode } = useContext(toggleMode);

  return (
    <Card className={`${mode === "dark" ? "bg-gray-800" : "bg-gray-200"} py-4 mt-10 w-full md:w-80 relative transform transition duration-500 hover:scale-105 hover:shadow-xl`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start relative">
        <div className="flex justify-between items-center w-full">
          <div>
            {/* Heading: black in light mode, white in dark mode */}
            <h4 className={`${mode === "dark" ? "text-white" : "text-black"} font-bold text-2xl mb-1`}>
              {project.name}
            </h4>
          </div>
          <div className="flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 p-2 rounded-full `}
            >
              <GitHub />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 p-2 rounded-full hover:bg-white transition`}
            >
              <Link />
            </a>
          </div>
        </div>

        {/* Overview */}
        <p className={`text-sm ${mode === "dark" ? "text-white" : "text-gray-600"} font-semibold mt-4 mb-2`}>Overview:</p>
        <p className={`text-sm ${mode === "dark" ? "text-white" : "text-gray-600"} mb-4`}>{project.overview}</p>

        {/* Stack */}
        <p className={`text-sm ${mode === "dark" ? "text-white" : "text-gray-600"} font-semibold mb-2`}>Stack:</p>
        <small className={`text-sm ${mode === "dark" ? "text-white" : "text-default-500"}`}>{project.stack}</small>
      </CardHeader>
    </Card>
  );
}
