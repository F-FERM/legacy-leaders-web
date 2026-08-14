import ServicesGrid from "@/components/Service/ServicesGrid";
import ServicesIntro from "@/components/Service/ServicesIntro";
import React from "react";

const page = () => {
  return (
    <main>
      <ServicesIntro />
      <ServicesGrid />
    </main>
  );
};

export default page;
