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
            <a
              href="mailto:fernandodaniel.work@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "#c6c6c6" }}
            >
              <IconAt />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ContactsLinks;
