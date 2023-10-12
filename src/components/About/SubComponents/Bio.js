import { IconDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

function About() {
  const onButtonClick = () => {
    fetch("./docs/Fernando Apóstolo - CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Fernando Apóstolo - CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="about-me">
          <div className="bio">
            <h2>About Me</h2>
            <p>
              Hello! I'm Fernando, and I have a true passion for front-end
              development and UI/UX design. My goal is to create digital
              products that are both visually appealing and highly functional.
            </p>
            <p>
              I first discovered my interest in combining design and technology
              as a teenager, when I started making small projects just for fun
              with friends. That early experience sparked a lifelong fascination
              in me.
            </p>
            <p>
              After high school, I took a web design course to build on my
              skills, then landed an internship as a graphic designer. This let
              me refine my design abilities and get firsthand experience in the
              industry, which lit a fire in me to learn more. Although I enjoyed
              graphic design, I felt compelled to push my creative boundaries
              further.
            </p>
            <p>
              My curiosity and desire for growth led me to pursue a bachelor's
              degree in multimedia. This diverse program allowed me to explore
              both design and programming - two of my greatest interests. But it
              was front-end development specifically that truly captured my
              passion. The ability to craft digital solutions that can improve
              people's daily lives, making them more functional and
              aesthetically pleasing, deeply resonated with me.
            </p>
            <p>
              Today, I aim to bridge the gap between design and technology.
              Whether crafting intuitive interfaces, building websites, or
              improving user experiences, I'm driven to unite creativity and
              practicality through my work.
            </p>
            <p>
              Outside of work, you might find me playing with new design trends,
              learning development techniques, or sketching ideas for my next
              project. For me, this field isn't just a career - it's what I
              genuinely love to do. So welcome to my little corner of the web,
              where innovation and aesthetics meet.
            </p>
            <p>
              Join me as we explore the possibilities at the intersection of
              design and technology, and work to make the digital world both
              beautiful and functional. There's so much awesome stuff we can
              build together!
            </p>
          </div>
          <button
            onClick={onButtonClick}
            download
            className="download pushable"
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
              <IconDownload /> <span>Download Resume</span>
            </span>
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default About;
