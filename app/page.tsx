import CoreServices from "@/components/Home/CoreServices";
import Hero from "@/components/Home/Hero";
import HomeAboutSection from "@/components/Home/HomeAbout";
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
      <RecentArticles />
    </main>
  );
};

export default Home;
