import React from "react";
import myPhoto from "../../images/my-photo.jpg";

const AboutMe = () => {
  return (
    <div className="bg-neutral-900 py-48 h-screen top-24">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-3/6">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Hi, I'm Fernando! 👋🏼
          </h1>
          <p className="text-left text-white">
            Front-End Developer recently graduated in Multimedia. Passionate
            about creating modern and impactful interfaces, always in search of
            new ideas. Explore my portfolio to learn more!
          </p>
        </div>
        <div className="w-full md:w-3/6 flex justify-center">
          <img
            src={myPhoto}
            alt="Fernando"
            className="rounded-lg h-auto max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
