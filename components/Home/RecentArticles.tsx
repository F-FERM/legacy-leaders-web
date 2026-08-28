import Link from "next/link";

const articles = [
  {
    category: "Business Strategy",
    date: "Oct 24, 2023",
    title: "Choosing the Right Free Zone for Your Startup",
    description:
      "Evaluating the benefits, costs, and compliance requirements of various UAE Free Zones to optimize your operational...",
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
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-0">
        {/* =========================================================
            SECTION HEADING
        ========================================================= */}
        <div className="text-center">
          {/* Eyebrow */}
          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#003896]
            "
          >
            LATEST INSIGHTS
          </span>

          {/* Heading */}
          <h2
            className="
              mt-2
              font-serif-custom
              text-[32px]
              font-bold
              leading-[1.15]
              text-[#14243a]

              sm:text-[36px]

              lg:text-[40px]
            "
          >
            Stay Informed. Stay Compliant.
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-3
              max-w-[680px]
              text-[12px]
              leading-[1.55]
              text-[#555]

              sm:text-[13px]

              lg:text-[14px]
            "
          >
            Use this space for future articles and updates on accounting, VAT,
            Corporate Tax, AML compliance, financial reporting, and business
            advisory.
          </p>
        </div>

        {/* =========================================================
            ARTICLES GRID
        ========================================================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >
          {articles.map((article) => (
            <article
              key={article.title}
              className="
                overflow-hidden
                rounded-[9px]
                border
                border-[#d8dce3]
                bg-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* =====================================================
                  ARTICLE IMAGE
              ===================================================== */}
              <div className="px-3 pt-3">
                <div
                  className="
                    h-[134px]
                    overflow-hidden
                    rounded-[8px]

                    sm:h-[140px]
                    lg:h-[134px]
                  "
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-500

                      hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* =====================================================
                  ARTICLE CONTENT
              ===================================================== */}
              <div className="px-3 pb-4 pt-3">
                {/* ===================================================
                    CATEGORY + DATE
                =================================================== */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="
                      truncate
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.06em]
                      text-[#003896]
                    "
                  >
                    {article.category}
                  </span>

                  <span
                    className="
                      shrink-0
                      text-[10px]
                      text-[#555]
                    "
                  >
                    {article.date}
                  </span>
                </div>

                {/* ===================================================
                    TITLE
                =================================================== */}
                <h3
                  className="
                    mt-2
                    text-[19px]
                    font-bold
                    leading-[1.18]
                    text-[#14243a]
                  "
                >
                  {article.title}
                </h3>

                {/* ===================================================
                    DESCRIPTION
                =================================================== */}
                <p
                  className="
                    mt-2
                    min-h-[42px]
                    text-[12px]
                    leading-[1.45]
                    text-[#666]
                  "
                >
                  {article.description}
                </p>

                {/* ===================================================
                    READ MORE
                =================================================== */}
                <Link
                  href={""}
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-1.5

                    text-[11px]
                    font-bold
                    text-[#111]

                    transition-colors
                    duration-300

                    hover:text-[#003896]
                  "
                >
                  Read More

                  <span
                    className="
                      text-[15px]
                      leading-none
                    "
                  >
                    →
                  </span>
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