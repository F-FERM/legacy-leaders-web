import CoreServices from "@/components/Home/CoreServices";
import Hero from "@/components/Home/Hero";
import HomeAboutSection from "@/components/Home/HomeAbout";
import IndustriesSection from "@/components/Home/IndustriesSection";
import RecentArticles from "@/components/Home/RecentArticles";
import VisionMission from "@/components/Home/VisionMission";
import WhyLegacyLeaders from "@/components/Home/WhyLegacyLeaders";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <HomeAboutSection />
      <VisionMission />
      <CoreServices />
      <WhyLegacyLeaders />
      <IndustriesSection />
      <RecentArticles />
    </main>
  );
};

export default Home;
