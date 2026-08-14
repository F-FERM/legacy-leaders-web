import AboutHero from "@/components/About/AboutHero";
import AboutUsSection from "@/components/About/AboutUsSection";
import VisionMissionSection from "@/components/About/VisionMissionSection";
import React from "react";

const page = () => {
  return (
    <main>
      <AboutHero />
      <AboutUsSection />
      <VisionMissionSection />
    </main>
  );
};

export default page;
