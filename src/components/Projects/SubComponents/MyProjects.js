import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconExternalLink,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandBootstrap,
  IconBrandFirebase,
  IconSchool,
} from "@tabler/icons-react";
import projectsData from "../../../utils/projects";

function MyProjects() {
  const renderTechStackIcons = (techStack) => {
    const skillIcons = {
      HTML5: (
        <div
          className="techStack-icons"
          style={{
            padding: "3px",
            background: "linear-gradient(-120deg, #e54c27, #f0652a)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
          }}
        >
          <IconBrandHtml5 size={24} strokeWidth={2} />
        </div>
      ),
      CSS3: (
        <div
          className="techStack-icons"
          style={{
            padding: "3px",
            background: "linear-gradient(-120deg, #0685c6, #2ab8e7)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
          }}
        >
          <IconBrandCss3 size={24} strokeWidth={2} />
        </div>
      ),
      JavaScript: (
        <div
          className="techStack-icons"
          style={{
            padding: "3px",
            background: "linear-gradient(-120deg, #ebb430, #f6ce35)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
          }}
        >
          <IconBrandJavascript size={24} strokeWidth={2} />
        </div>
      ),
      "React.js": (
        <div
          className="techStack-icons"
          style={{
            padding: "3px",
            background: "linear-gradient(-120deg, #21252c, #129fca)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
          }}
        >
          <IconBrandReact size={24} strokeWidth={2} />
        </div>
      ),
      "Node.js": (
        <div
          className="techStack-icons"
          style={{
            padding: "3px",
            background: "linear-gradient(-120deg, #71ba53, #3f853e)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
          }}
        >
          <IconBrandNodejs size={24} strokeWidth={2} />
        </div>
      ),
      Bootstrap: (
        <div
          className="techStack-icons"
          style={{
            padding: "3px",
            background: "linear-gradient(-120deg, #8e80ec, #6e10ee)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
          }}
        >
          <IconBrandBootstrap size={24} strokeWidth={2} />
        </div>
      ),
      Firebase: (
        <div
          className="techStack-icons"
          style={{
            padding: "3px",
            background: "linear-gradient(-120deg, #ffcb2b, #f5800c)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
          }}
        >
          <IconBrandFirebase size={24} strokeWidth={2} />
        </div>
      ),
    };

    return techStack.map((tech, index) => (
      <span key={index} className="icon">
        {skillIcons[tech]}
      </span>
    ));
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="projects-container">
          {" "}
          <h2>My Projects</h2>
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              style={{
                backgroundColor: project.bgColor,
                backgroundImage: `radial-gradient(
    at 43% 98%, ${project.color1} 0px, transparent 50%
  ),
  radial-gradient(
    at 10% 80%, ${project.color2} 0px, transparent 50%
  ),
  radial-gradient(
    at 46% 10%, ${project.color1} 0px, transparent 50%
  ),
  radial-gradient(
    at 80% 13%, ${project.color2} 0px, transparent 50%
  ),
  radial-gradient(
    at 47% 2%, ${project.color1} 0px, transparent 50%
  ),
  radial-gradient(
    at 91% 44%, ${project.color2} 0px, transparent 50%
  ),
  radial-gradient(
    at 48% 30%, ${project.color1} 0px, transparent 50%
  )`,
              }}
              key={index}
            >
              <div className="project-content">
                <div className="project-header">
                  {project.academicProject ? (
                    <span className="project-academic">
                      <IconSchool /> Academic Project
                    </span>
                  ) : (
                    ""
                  )}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                    />
                  ) : (
                    <img
                      src="/images/placeholder.png"
                      className="project-img"
                      alt="Placeholder"
                    />
                  )}
                </div>
                <h4 className="project-title">{project.title}</h4>
                <div className="project-made-with">
                  {renderTechStackIcons(project.techStack)}
                </div>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-footer">
                  <div className="project-social-links github">
                    <a href={project.githubLink}>
                      <IconBrandGithub />
                    </a>
                  </div>
                  <div className="project-external-link external">
                    <a href={project.externalLink}>
                      <IconExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default MyProjects;
