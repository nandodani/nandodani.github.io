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
          <div className="home-links">
            <div className="pushable">
              <span class="shadow"></span>
              <span
                class="edge"
                style={{
                  backgroundColor: "#0065c9",
                  background:
                    "linear-gradient(to left, hsl(210, 100%, 39%) 0%, hsl(210, 100%, 30%) 8%, hsl(210, 100%, 30%) 92%, hsl(210, 100%, 39%) 100%)",
                }}
              ></span>
              <span
                class="front"
                style={{ backgroundColor: "#0065c9", padding: "10px" }}
              >
                <a
                  href="https://www.linkedin.com/in/fernando-apostolo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandLinkedin />
                </a>
              </span>
            </div>
            <div className="pushable">
              <span class="shadow"></span>
              <span
                class="edge"
                style={{
                  backgroundColor: "#0065c9",
                  background:
                    "linear-gradient(to left, hsl(210, 15%, 16%) 0%, hsl(210, 15%, 5%) 8%, hsl(210, 15%, 5%) 92%, hsl(210, 15%, 16%) 100%)",
                }}
              ></span>              <span
                class="front"
                style={{ backgroundColor: "#23292f", padding: "10px" }}
              >
                <a
                  href="https://github.com/nandodani"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandGithub />
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TitleHome;
