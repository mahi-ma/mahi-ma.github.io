import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, Information, Service } from "../../components";

const Home = () => {
  return (
    <div className="home-parent lg:pt-16">
      <Banner />
      <Service />
      <Project />
      <Information />
      <Contact />
    </div>
  );
};

export default Home;
