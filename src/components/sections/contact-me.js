import React from "react";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const ContactMe = () => {
  return (
    <div id="contact-me" className="bg-neutral-900 py-16"                data-aos="fade-right">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">
          Let's Get in Touch!
        </h2>

        <p className="text-white text-center mb-6">
          I'm always open to new connections and opportunities. <br />
          Send me a message using the email link below.
        </p>

        <div className="flex justify-center space-x-8">
          <a
            href="mailto:fernandodaniel.work@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-white hover:underline transition duration-150 ease-in-out"
          >
            <EnvelopeClosedIcon className="mr-1 w-4 h-4" />
            fernandodaniel.work@gmail.com
          </a>
        </div>

        <p className="text-white text-center mt-8">Or connect with me on:</p>

        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/fernando-apostolo"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-white hover:underline transition duration-150 ease-in-out"
          >
            <LinkedInLogoIcon className="mr-1 w-4 h-4" />
            LinkedIn
          </a>

          <a
            href="https://github.com/nandodani"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-white hover:underline transition duration-150 ease-in-out"
          >
            <GitHubLogoIcon className="mr-1 w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
