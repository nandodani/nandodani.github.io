import React from "react";
import {
  IconBrandAdobe,
  IconBrandFigma,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandBootstrap,
  IconBrandTailwind,
  IconApi,
  IconDevices,
  IconBrandGit,
  IconTemplate,
  IconBrowser,
  IconSeo,
  IconHourglass,
  IconAccessible,
  IconPuzzle,
  IconUsers,
  IconSpeakerphone,
  IconNotebook,
  IconArtboard,
  IconBrandMysql,
  IconShape,
  IconBrandFirebase,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

function About() {
  const frontEndSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Bootstrap",
    "Tailwind",
    "API Integration",
    "Responsive Web Design",
  ];

  const uiUxSkills = [
    "Adobe Creative Suite (Photoshop, Illustrator, XD)",
    "Figma",
    "User Research and Prototyping",
    "Wireframing and Mockups",
  ];

  const additionalSkills = [
    "MySQL",
    "Firebase",
    "Visual Design Principles",
    "Version Control (Git)",
    "Cross-Browser Compatibility",
    "Web Accessibility (WCAG)",
    "SEO Best Practices",
    "Time Management",
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Fast Learner",
  ];

  const skillIcons = {
    HTML5: <IconBrandHtml5 size={"1.2vw"} strokeWidth={2} />,
    CSS3: <IconBrandCss3 size={"1.2vw"} strokeWidth={2} />,
    JavaScript: <IconBrandJavascript size={"1.2vw"} strokeWidth={2} />,
    "React.js": <IconBrandReact size={"1.2vw"} strokeWidth={2} />,
    "Node.js": <IconBrandNodejs size={"1.2vw"} strokeWidth={2} />,
    Bootstrap: <IconBrandBootstrap size={"1.2vw"} strokeWidth={2} />,
    Tailwind: <IconBrandTailwind size={"1.2vw"} strokeWidth={2} />,
    "API Integration": <IconApi size={"1.2vw"} strokeWidth={2} />,
    "Responsive Web Design": <IconDevices size={"1.2vw"} strokeWidth={2} />,
    "Adobe Creative Suite (Photoshop, Illustrator, XD)": (
      <IconBrandAdobe size={"1.2vw"} strokeWidth={2} />
    ),
    Figma: <IconBrandFigma size={"1.2vw"} strokeWidth={2} />,
    "User Research and Prototyping": <IconShape size={"1.2vw"} strokeWidth={2} />,
    "Wireframing and Mockups": <IconArtboard size={"1.2vw"} strokeWidth={2} />,
    MySQL: <IconBrandMysql size={"1.2vw"} strokeWidth={2} />,
    Firebase: <IconBrandFirebase size={"1.2vw"} strokeWidth={2} />,
    "Visual Design Principles": <IconTemplate size={"1.2vw"} strokeWidth={2} />,
    "Version Control (Git)": <IconBrandGit size={"1.2vw"} strokeWidth={2} />,
    "Cross-Browser Compatibility": <IconBrowser size={"1.2vw"} strokeWidth={2} />,
    "Web Accessibility (WCAG)": <IconAccessible size={"1.2vw"} strokeWidth={2} />,
    "SEO Best Practices": <IconSeo size={"1.2vw"} strokeWidth={2} />,
    "Time Management": <IconHourglass size={"1.2vw"} strokeWidth={2} />,
    "Problem Solving": <IconPuzzle size={"1.2vw"} strokeWidth={2} />,
    Teamwork: <IconUsers size={"1.2vw"} strokeWidth={2} />,
    Communication: <IconSpeakerphone size={"1.2vw"} strokeWidth={2} />,
    "Fast Learner": <IconNotebook size={"1.2vw"} strokeWidth={2} />,
  };

  const renderSkillsWithIcons = (skills) => {
    return skills.map((skill, index) => (
      <li key={index}>
        {skillIcons[skill] && <span className="icon">{skillIcons[skill]}</span>}{" "}
        {skill}
      </li>
    ));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="about-tech-stack">
          <h2>My Tech Stack</h2>
          <div>
            <h3>Front-End Development</h3>
            <ul>{renderSkillsWithIcons(frontEndSkills)}</ul>
          </div>
          <div>
            <h3>UI/UX Design Tools</h3>
            <ul>{renderSkillsWithIcons(uiUxSkills)}</ul>
          </div>
          <div className="last-div">
            <h3>Additional Skills</h3>
            <ul>{renderSkillsWithIcons(additionalSkills)}</ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
