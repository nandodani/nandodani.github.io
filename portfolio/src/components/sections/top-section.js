import React from "react";
import myPhoto from "../../assets/images/my-photo.jpg";
import {
  DoubleArrowDownIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const TopSection = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    aboutMeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="bg-neutral-900 py-12 md:py-48 top-24 h-screen flex flex-col justify-center items-center"
      data-aos="fade-right"
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-3/6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white text-center">
            Hi, I'm Fernando! 👋🏼
          </h1>
          <p className="text-white text-lg text-center md:text-left">
            Front-End Developer recently graduated in Multimedia. Passionate
            about creating modern and impactful interfaces, always in search of
            new ideas. Explore my portfolio to learn more!
          </p>
          <div className="flex w-full justify-center mt-4 md:mt-8 space-x-6 ">
            <a
              href="https://github.com/nandodani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon
                className="text-white"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-apostolo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon
                className="text-white"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-3/6 flex justify-center mt-8 md:mt-0">
          <img
            src={myPhoto}
            alt="Fernando"
            className="rounded-lg h-auto max-w-md"
          />
        </div>
      </div>
      <div className="absolute bottom-0 mb-8 md:mb-24">
        <button
          onClick={scrollToAboutMe}
          className="text-white text-center cursor-pointer"
        >
          <DoubleArrowDownIcon
            className="text-white animate-bounce"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default TopSection;
