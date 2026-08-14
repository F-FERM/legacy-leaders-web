import CoreServices from "@/components/Home/CoreServices";
import Hero from "@/components/Home/Hero";
import HomeAboutSection from "@/components/Home/HomeAbout";
import VisionMission from "@/components/Home/VisionMission";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <HomeAboutSection/>
      <VisionMission/>
      <CoreServices/>
    </main>
  );
};

export default Home;
