import React from "react";
import DownloadApp from "../components/DownloadApp";
import FeaturedOpp from "../components/FeaturedOpp";
import GetHired from "../components/GetHired";
import HomeHero from "../components/HomeHero";
import LPM from "../components/LPM";
import Opportunities from "../components/Opportunities";
import OurNumbers from "../components/OurNumbers";
import Showcase from "../components/Showcase";
import SlidingBrands from "../components/SlidingBrands";

const Home = () => {
  return (
    <>
      <HomeHero />
      <SlidingBrands
        small={"Top companies"}
        title={"trust us:"}
        type={"company"}
      />
      <SlidingBrands
        small={"Top colleges"}
        title={"trust us:"}
        type={"college"}
      />
      <SlidingBrands
        small={"Top clubs"}
        title={"trust us:"}
        type={"club"}
      />
      <Showcase type={"home"} />
      <LPM />
      <Opportunities />
      <GetHired />
      <FeaturedOpp type={"home"} />
      <OurNumbers />
      <DownloadApp />
    </>
  );
};

export default Home;
