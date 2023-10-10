import React from "react";
import "./Home.styles.css";
import {
  IconFolder,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import TitleHome from "./SubComponents/TitleHome";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
        <div className="home main-content">
        <TitleHome />
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
          <div className="links">
            <Link to="/about">
              <IconUser />
              <span>Find out more about me!</span>
            </Link>
            <Link to="/projects">
              <IconFolder />
              <span>Find out more about my projects!</span>
            </Link>
            <Link to="/contact">
              <IconMail />
              <span>Reach out to me!</span>
            </Link>
          </div>
        </motion.div>
        </div>
    </>
  );
}

export default Home;
