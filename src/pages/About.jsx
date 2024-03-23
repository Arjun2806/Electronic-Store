import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  const data = {
    about:
      "Welcome to Quick Buy, your ultimate destination for all your electronic needs! At Quick Buy, we're committed to providing you with a seamless online shopping experience, offering a wide range of high-quality electronic products at competitive prices.",
    img: "./images/hero.jpg"
  };
  return <HeroSection myData={data} />;
};

export default About;
