import React from "react";
import Nav from "../components/layout/nav";
import TopSection from "../components/sections/top-section";
import AboutMe from "../components/sections/about-me";
import Disclaimer from "../components/layout/disclaimer";
import MyProjects from "../components/sections/my-projects";
import ContactMe from "../components/sections/contact-me";

const Home = () => {
  return (
    <div>
      <Nav />
      <Disclaimer />
      <TopSection />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

export default Home;
