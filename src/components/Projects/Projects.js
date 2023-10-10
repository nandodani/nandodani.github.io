import React from "react";
import "./Projects.styles.css";
import TitleProjects from "./SubComponents/TitleProjects";
import MyProjects from "./SubComponents/MyProjects";

function Projects() {
  return (
    <div className="projects main-content">
      <TitleProjects />
      <MyProjects />
    </div>
  );
}

export default Projects;
