import React from "react";
import "./Home.styles.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFolder,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import TitleHome from "./SubComponents/TitleHome";

function Home() {
  return (
    <>
        <div className="home main-content">
          <TitleHome />
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
        </div>
    </>
  );
}

export default Home;
