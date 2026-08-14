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
    <section className="w-full bg-white">
      {/* Blog Header */}
      <div className="w-full border-b border-[#d8deea] bg-[#eef3ff]">
        <div className="mx-auto flex min-h-[150px] max-w-[1300px] flex-col items-center justify-center px-6 py-10 text-center sm:px-8">
          <h1 className="font-serif text-[28px] font-bold leading-tight text-[#14243a] sm:text-[30px] lg:text-[32px]">
            Insights &amp; Updates
          </h1>

          <p className="mt-2.5 text-[9px] leading-[1.6] text-[#555] sm:text-[10px]">
            Stay informed on the latest UAE accounting, VAT, and corporate tax
            regulations.
          </p>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="w-full bg-white py-14 sm:py-16 lg:py-[68px]">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-[1.9fr_1fr]">
            {/* Featured Article */}
            <Link
              href={featuredPost.href}
              className="group relative block h-[300px] overflow-hidden rounded-[9px] sm:h-[330px] lg:h-[220px]"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b35]/95 via-[#071b35]/45 to-transparent" />

              {/* Featured Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="inline-flex rounded-[2px] bg-[#9a7a3a] px-2 py-1 text-[7px] font-semibold text-white">
                  {featuredPost.category}
                </span>

                <h2 className="mt-2 max-w-[620px] font-serif text-[19px] font-bold leading-[1.15] text-white sm:text-[21px]">
                  {featuredPost.title}
                </h2>

                <p className="mt-1.5 max-w-[620px] text-[8px] leading-[1.5] text-white/80 sm:text-[9px]">
                  {featuredPost.description}
                </p>
              </div>
            </Link>

            {/* Side Articles */}
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {sidePosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group flex min-h-[105px] flex-col justify-center rounded-[3px] border border-[#d7dbe2] bg-white px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-[7px] font-semibold uppercase tracking-[0.08em] text-[#967532]">
                    {post.category}
                  </span>

                  <h2 className="mt-1 text-[14px] font-bold leading-[1.15] text-[#14243a] transition-colors duration-300 group-hover:text-[#967532]">
                    {post.title}
                  </h2>

                  <p className="mt-1 text-[8px] leading-[1.4] text-[#666]">
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
