"use client";

import Link from "next/link";
import Image from "next/image";

const featuredPost = {
  category: "Corporate Tax",
  title: "Navigating the New UAE Corporate Tax Law: What SMEs Need to Know",
  description:
    "A comprehensive guide to understanding the implications of the newly implemented 9% corporate tax and how your business can ensure full compliance before the...",
  image: "/corporate-tax.jpg",
  href: "/blog/navigating-uae-corporate-tax-law",
};

const sidePosts = [
  {
    category: "VAT",
    title: "Common VAT Filing Errors and How to Avoid Them",
    description:
      "Ensure your quarterly returns are accurate. We break down the most frequent mistakes businesses make during VAT submission.",
    href: "/blog/common-vat-filing-errors",
  },
  {
    category: "COMPLIANCE",
    title: "Why Accurate Bookkeeping is Your Best Defense in an Audit",
    description:
      "Maintaining precise financial records isn't just good practice; it's essential for surviving regulatory scrutiny.",
    href: "/blog/accurate-bookkeeping-audit",
  },
];

const BlogLanding = () => {
  return (
    <section className="w-full bg-white pt-[90px]">
      {/* BLOG HERO HEADER */}
      <div className="relative w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/blog-hero.jpg')",
          }}
        />

        {/* BLUE GRADIENT OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(232.96deg, rgba(255, 255, 255, 0) 3.96%, #022764 100.99%)",
          }}
        />

        {/* HEADER CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[260px]
            w-full
            max-w-[1920px]
            flex-col
            items-center
            justify-center
            px-5
            py-16
            text-center
            sm:min-h-[300px]
            sm:px-8
            sm:py-20
            lg:min-h-[300px]
            lg:px-10
            lg:py-[70px]
          "
        >
          <h1
            className="
              text-[32px]
              font-semibold
              leading-[1.2]
              tracking-[-0.5px]
              text-white
              sm:text-[40px]
              lg:text-[50px]
              lg:leading-[57.6px]
              lg:tracking-[-0.96px]
            "
          >
            Insights &amp; Updates
          </h1>

          <p
            className="
              mt-4
              max-w-[650px]
              text-[14px]
              font-normal
              leading-[1.6]
              text-white
              sm:mt-5
              sm:text-[16px]
              lg:mt-7
              lg:text-[18px]
              lg:leading-[28.8px]
            "
          >
            Stay informed on the latest UAE accounting, VAT, and corporate tax
            regulations.
          </p>
        </div>
      </div>

      {/* FEATURED ARTICLES */}
      <div className="w-full bg-white py-14 sm:py-16 lg:py-[68px]">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.9fr_1fr]">
            {/* FEATURED ARTICLE */}
            <Link
              href={featuredPost.href}
              className="
                group
                relative
                block
                aspect-[1.8/1]
                w-full
                overflow-hidden
                rounded-[30px]
                sm:aspect-[2/1]
                lg:aspect-[2/1]
              "
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b35]/95 via-[#071b35]/45 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="inline-flex rounded-[4px] bg-[#9a7a3a] px-3 py-1.5 text-[14px] font-semibold text-white">
                  {featuredPost.category}
                </span>

                <h2 className="mt-3 max-w-[700px] text-[24px] font-semibold leading-[1.2] text-white sm:text-[30px]">
                  {featuredPost.title}
                </h2>

                <p className="mt-3 max-w-[700px] text-[14px] font-normal leading-[1.6] text-white/85 sm:text-[16px]">
                  {featuredPost.description}
                </p>
              </div>
            </Link>

            {/* SIDE ARTICLES */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {sidePosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="
                    group
                    flex
                    min-h-[180px]
                    flex-col
                    justify-center
                    rounded-[20px]
                    border
                    border-[#d7dbe2]
                    bg-white
                    px-6
                    py-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#967532]">
                    {post.category}
                  </span>

                  <h2 className="mt-2 text-[20px] font-semibold leading-[1.25] text-[#14243a] transition-colors duration-300 group-hover:text-[#967532] sm:text-[24px]">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-[14px] font-normal leading-[1.6] text-[#666] sm:text-[16px]">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLanding;
