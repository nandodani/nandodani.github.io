import React, { useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-neutral-900 py-4 px-6 md:px-24 navbar">
      <div className="text-white text-xl font-bold">{"<"} nandodani {"/>"}</div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <div
            className="transition-transform"
            style={{
              transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {isMobileMenuOpen ? (
              <Cross2Icon
                className="w-6 h-6"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            ) : (
              <HamburgerMenuIcon
                className="w-6 h-6"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            )}
          </div>
        </button>
      </div>

      <ul className={`hidden md:flex space-x-12 text-white ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <li>
          <button
            onClick={() => scrollToSection("about-me")}
            className="hover:text-gray-300 focus:outline-none"
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("my-projects")}
            className="hover:text-gray-300 focus:outline-none"
          >
            My Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact-me")}
            className="hover:text-gray-300 focus:outline-none"
          >
            Contact Me
          </button>
        </li>
      </ul>

      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900 text-white space-y-4 px-6 py-3 mt-0">
          <li>
            <button
              onClick={() => scrollToSection("about-me")}
              className="hover:text-gray-300 focus:outline-none"
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("my-projects")}
              className="hover:text-gray-300 focus:outline-none"
            >
              My Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact-me")}
              className="hover:text-gray-300 focus:outline-none"
            >
              Contact Me
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
