import Link from "next/link";

const articles = [
  {
    category: "Business Strategy",
    date: "Oct 24, 2023",
    title: "Choosing the Right Free Zone for Your Startup",
    description:
      "Evaluating the benefits, costs, and compliance requirements of various UAE Free Zones to optimize your operational.",
    image: "/article-free-zone.jpg",
    href: "/blog/choosing-the-right-free-zone",
  },
  {
    category: "Corporate Tax",
    date: "Oct 18, 2023",
    title: "Transfer Pricing Rules Explained",
    description:
      "An overview of the new transfer pricing regulations and documentation requirements for businesses with related-...",
    image: "/article-transfer-pricing.jpg",
    href: "/blog/transfer-pricing-rules",
  },
  {
    category: "Real Estate",
    date: "Oct 12, 2023",
    title: "VAT Implications for Real Estate Developers",
    description:
      "Clarifying the zero-rating and exemption rules applied to commercial and residential real estate transactions in the UAE.",
    image: "/article-real-estate.jpg",
    href: "/blog/vat-real-estate-developers",
  },
];

const RecentArticles = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <h2 className="font-serif text-[30px] font-bold leading-tight text-[#14243a] sm:text-[32px] lg:text-[34px]">
          Recent Articles
        </h2>

        {/* Articles */}
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-[9px] border border-[#d8dce3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="px-3 pt-3">
                <div className="h-[134px] overflow-hidden rounded-[8px] sm:h-[140px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-3 pb-3 pt-3">
                {/* Category + Date */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#9a7a3a]">
                    {article.category}
                  </span>

                  <span className="text-[8px] text-[#555]">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-[17px] font-bold leading-[1.2] text-[#14243a]">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 min-h-[43px] text-[10px] leading-[1.45] text-[#666]">
                  {article.description}
                </p>

                {/* Read More */}
                <Link
                  href={article.href}
                  className="mt-2 inline-flex items-center gap-2 text-[11px] font-bold text-[#111] transition-colors duration-300 hover:text-[#9a7a3a]"
                >
                  Read More
                  <span className="text-[15px] leading-none">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
