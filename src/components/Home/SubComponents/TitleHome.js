import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function TitleHome() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="home-title">
          <h1>Hello World!</h1>
          <p>
            I'm Fernando, a{" "}
            <span className="span-home">Front-End Developer</span> and
            <span className="span-home"> UI/UX Designer</span> who loves
            building fun websites, apps and other digital stuff.
          </p>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/fernando-apostolo"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "#0065c9" }}
            >
              <IconBrandLinkedin />
            </a>
            <a
              href="https://github.com/nandodani"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "#23292f" }}
            >
              <IconBrandGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TitleHome;
