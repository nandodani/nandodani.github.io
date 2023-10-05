import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="bg-neutral-900 py-16 top-24 flex flex-col items-center"
      data-aos="fade-right"
    >
      <h2 className="text-5xl font-bold mb-8 text-white text-center">
        About Me
      </h2>
      <div className="max-w-3xl text-white text-left">
        <p className="mb-4">
          Hello! I'm Fernando Apóstolo, a passionate Front End developer
          dedicated to creating amazing digital experiences. I recently
          completed my degree in Multimedia, where I had my first encounter with
          programming and discovered my passion for web development.
        </p>
        <p className="mb-4">
          During my studies, I worked on projects that are available on my{" "}
          <a
            href="https://github.com/nandodani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white ml-1"
          >
            <GitHubLogoIcon className="mr-1" />
            <span className="underline-animation">GitHub</span>
          </a>
          . I have expertise in technologies such as HTML, CSS, and JavaScript,
          as well as frameworks like React, Bootstrap, and Tailwind. I also
          gained experience in server-side application development using Node.js
          and Firebase.
        </p>
        <p className="mb-4">
          As a Front End developer, my goal is to create appealing and
          functional interfaces that provide an excellent user experience. I am
          constantly learning and striving for excellence, always committed to
          delivering high-quality results.
        </p>
        <p>
          Thank you for visiting my portfolio, and I hope you can get a better
          understanding of what I can offer as a professional in the field of
          web development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
