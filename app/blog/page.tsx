import BlogLanding from "@/components/Blog/BlogLanding";
import RecentArticles from "@/components/Home/RecentArticles";
import React from "react";

const page = () => {
  return (
    <main>
      <BlogLanding />
      <RecentArticles />
    </main>
  );
};

export default page;
