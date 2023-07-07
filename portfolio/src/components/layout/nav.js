import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-neutral-900 py-4 px-6">
      <div className="text-white text-xl font-bold">{"<"} nandodani {"/>"}</div>
      <ul className="flex space-x-4 text-white">
        <li>
          <a href="#" className="hover:text-gray-300">About Me</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">My Projects</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
