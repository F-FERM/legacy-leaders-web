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
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 lg:px-10">
        {/* =========================================================
            SECTION HEADING
        ========================================================= */}
        <div className="text-center">
          {/* Eyebrow */}
          <span
            className="
              text-[11px]
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
              mt-3
              text-[36px]
              font-bold
              leading-[1.2]
              tracking-[-0.5px]
              text-[#14243A]

              sm:text-[42px]

              lg:text-[48px]
            "
          >
            Stay Informed. Stay Compliant.
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-[850px]
              text-[18px]
              font-normal
              leading-[25.6px]
              tracking-[0px]
              text-[#555555]
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
            mx-auto
            mt-[45px]
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-[30px]

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {articles.map((article) => (
            <article
              key={article.title}
              className="
                group
                relative
                h-[500px]
                w-full
                max-w-[461px]
                overflow-hidden
                rounded-[30px]
                border
                border-[#606060]
                bg-[#0000004D]
              "
            >
              {/* =====================================================
                  BACKGROUND IMAGE
              ===================================================== */}
              <img
                src={article.image}
                alt={article.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover

                  transition-transform
                  duration-500

                  group-hover:scale-105
                "
              />

              {/* =====================================================
                  IMAGE SHADE
              ===================================================== */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#0000004D]
                "
              />

              {/* =====================================================
                  ARTICLE CONTENT
              ===================================================== */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                  justify-end

                  px-[20px]
                  pb-[30px]
                  pt-[30px]
                "
              >
                {/* ===================================================
                    CATEGORY + DATE
                =================================================== */}
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      text-[13px]
                      font-semibold
                      uppercase
                      tracking-[0.05em]
                      text-[#003896]
                    "
                  >
                    {article.category}
                  </span>

                  <span
                    className="
                      shrink-0
                      text-[13px]
                      font-normal
                      text-white
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
                    max-w-[420px]
                    text-[30px]
                    font-semibold
                    leading-[1.2]
                    tracking-[0px]
                    text-white
                  "
                >
                  {article.title}
                </h3>

                {/* ===================================================
                    DESCRIPTION
                =================================================== */}
                <p
                  className="
                    mt-4
                    max-w-[420px]
                    text-[16px]
                    font-normal
                    leading-[25.6px]
                    tracking-[0px]
                    text-white/90
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
                    mt-5
                    inline-flex
                    w-fit
                    items-center
                    gap-2

                    text-[16px]
                    font-semibold
                    leading-[25.6px]
                    text-white

                    transition-all
                    duration-300

                    hover:gap-3
                    hover:text-[#BFD4FF]
                  "
                >
                  Read More
                  <span className="text-[20px] leading-none">→</span>
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
