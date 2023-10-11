import React from "react";
import { motion } from "framer-motion";
import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function ContactsLinks() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="contacts-container">
          <h1>Connect with me!</h1>
          <div className="contacts-links">
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
              ></span>{" "}
              <span
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
            </div>{" "}
            <div className="pushable">
              <span class="shadow"></span>
              <span class="edge"></span>{" "}
              <span
                class="front"
                style={{ padding: "10px" }}
              >
                <a
                  href="mailto:fernandodaniel.work@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconAt />
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ContactsLinks;
