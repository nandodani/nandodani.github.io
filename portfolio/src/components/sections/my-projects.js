import { useState, useEffect } from "react";
import axios from "axios";
import { Link2Icon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const res = await axios.get(
        "https://api.github.com/users/nandodani/repos"
      );
      setProjects(res.data);
    } catch (error) {
      console.error("Error fetching GitHub projects:", error);
    }
  };

  const getTechnologies = (technologies) => {
    return technologies.map((technology) => {
      let icon = null;

      switch (technology) {
        case "React":
          icon = <FaReact className="w-4 h-4 mr-1" />;
          break;
        case "Bootstrap":
          icon = <FaBootstrap className="w-4 h-4 mr-1" />;
          break;
        case "Tailwind":
          icon = <BiLogoTailwindCss className="w-4 h-4 mr-1" />;
          break;
        default:
          break;
      }

      return (
        <div className="flex items-center" key={technology}>
          {icon}
          <span>{technology}</span>
        </div>
      );
    });
  };

  const getProjectsInfo = (projectName) => {
    switch (projectName) {
      case "2GamerGuys":
        return {
          imageSrc:
            "https://dropovercl-t.s3.amazonaws.com/7235f717-96b4-406f-994e-5b656e8a15f1/8b5725b5-4938-4707-a95c-f3c583084998/large/20c4c1f6-a814-4596-bfc2-a0cef5f7a417.png",
          technologies: ["React", "Bootstrap"],
        };
      case "SmartOwl":
        return {
          imageSrc:
            "https://dropovercl-t.s3.amazonaws.com/464e3409-d2db-430c-b732-27cd92ac5338/c6b54a94-c5d4-4487-8410-fc6c4bbcec2f/large/5710569f-bd20-45a3-93bd-24008b6719ab.png",
          technologies: ["React", "Bootstrap"],
        };
      case "nandodani.github.io":
        return {
          imageSrc:
            "https://dropovercl-t.s3.amazonaws.com/34eae665-2fac-4a71-98da-22d8d976f3fc/e3d56b7a-32a6-4b86-b6be-094842cf2672/large/e82119e2-8b5c-4e5a-bbab-634c88b73195.png",
          technologies: ["React", "Tailwind"],
          title: "My Portfolio",
          description:
            "Yes, this is my portfolio and it's open source. Check all the code on the Github link below.",
        };
      default:
        return {
          imageSrc: "",
          technologies: [],
        };
    }
  };

  return (
    <div
      id="my-projects"
      className="bg-neutral-900 py-16"
      data-aos="fade-right"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">
          My Projects
        </h2>

        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectInfo = getProjectsInfo(project.name);

            return (
              <div
                key={project.id}
                loading="lazy"
                className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-150 ease-in-out flex flex-col overflow-hidden m-4"
              >
                <img
                  src={projectInfo.imageSrc}
                  alt={project.name}
                  className="w-100 h-52 mx-2 my-2 object-cover rounded-lg"
                />

                <div className="p-6 flex-1">
                  <h3 className="text-lg font-medium mb-2">
                    {projectInfo.title || project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {projectInfo.description || project.description}
                  </p>
                  <div className="flex space-x-2 mb-2">
                    {getTechnologies(projectInfo.technologies)}
                  </div>
                </div>

                <div className="flex justify-between px-6 py-4">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-neutral-900 hover:underline transition duration-150 ease-in-out"
                  >
                    <GitHubLogoIcon className="mr-1 w-4 h-4" />
                    GitHub
                  </a>

                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-neutral-900 hover:underline transition duration-150 ease-in-out"
                    >
                      <Link2Icon className="mr-1 w-4 h-4" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
