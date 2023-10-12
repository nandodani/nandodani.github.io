import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.styles.css";
import {
  IconFolder,
  IconFolderOpen,
  IconHome,
  IconHomeHeart,
  IconMail,
  IconMailOpened,
  IconUser,
  IconUserSquareRounded,
} from "@tabler/icons-react";

function Navbar() {
  const location = useLocation();
  /*
  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contacts";
      default:
        return "";
    }
  };*/

  const linkStyles = {
    color: "#a6a6a6",
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" style={linkStyles}>
            {location.pathname === "/" ? (
              <IconHomeHeart className="icon" />
            ) : (
              <IconHome className="icon" />
            )}
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyles}>
            {location.pathname === "/about" ? (
              <IconUserSquareRounded className="icon" />
            ) : (
              <IconUser className="icon" />
            )}
          </Link>
        </li>
        <li>
          <Link to="/projects" style={linkStyles}>
            {location.pathname === "/projects" ? (
              <IconFolderOpen className="icon" />
            ) : (
              <IconFolder className="icon" />
            )}
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyles}>
            {location.pathname === "/contact" ? (
              <IconMailOpened className="icon" />
            ) : (
              <IconMail className="icon" />
            )}
          </Link>
        </li>
      </ul>
{/*
      <div className="page-name">
        <h3>{getPageName()}</h3>
            </div>*/}
    </div> 
  );
}

export default Navbar;
