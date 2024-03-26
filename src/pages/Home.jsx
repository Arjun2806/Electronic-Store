import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProduct";


const Home = () => {
  const data = {
    about:
      "At Quick Buy, we're dedicated to providing you with the latest and greatest electronic gadgets and appliances to enhance your life. Whether you're looking for smartphones, laptops, home appliances, or accessories, we've got you covered.",
    img: "./images/hero1.svg",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
