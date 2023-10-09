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
        <div className="page-title">
          <h1>Hello World!</h1>
          <p>
            I'm Fernando, a <span>Front-End Developer</span> and
            <span> UI/UX Designer</span> who loves building fun websites, apps
            and other digital stuff.
          </p>
          <div className="home-social">
            <a
              href="https://github.com/nandodani"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandGithub />
            </a>
            <a
              href="http://www.linkedin.com/in/fernando-apostolo"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TitleHome;
