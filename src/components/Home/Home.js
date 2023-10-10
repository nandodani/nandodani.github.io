import React from "react";
import "./Home.styles.css";
import { IconFolder, IconMail, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import TitleHome from "./SubComponents/TitleHome";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="home main-content">
        <TitleHome />
      </div>
    </>
  );
}

export default Home;
