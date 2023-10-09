import React from "react";
import "./About.styles.css";
import TitleAbout from "./SubComponents/TitleAbout";
import Bio from "./SubComponents/Bio";
import TechStackAndSkills from "./SubComponents/TechStackAndSkills";

function About() {

  return (
    <>
        <div className="about main-content">
          <TitleAbout />
          <Bio />
          <TechStackAndSkills />
        </div>
    </>
  );
}

export default About;
