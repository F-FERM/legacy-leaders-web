export default function IndustriesSection() {
  const industries = [
    "Trading Companies",
    "Construction",
    "Real Estate",
    "Logistics",
    "Retail",
    "Manufacturing",
    "E-commerce",
    "Restaurants",
    "Healthcare",
    "Professional Services",
    "Startups & SMEs",
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* =========================================================
            SECTION HEADING
        ========================================================= */}
        <div className="text-left">
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
            INDUSTRIES WE SERVE
          </span>

          {/* Heading */}
          <h2
            className="
              mt-1
              font-serif-custom
              text-[30px]
              font-bold
              leading-[1.15]
              text-[#0a1628]

              sm:text-[34px]

              lg:text-[36px]
            "
          >
            Financial Support Across Industries
          </h2>

          {/* Description */}
          <p
            className="
              mt-1.5
              max-w-[620px]
              text-[14px]
              leading-[1.5]
              text-[#555]

              sm:text-[13px]

              lg:text-[16px]
              lg:leading-5
            "
          >
            Our services are tailored to the needs of businesses across diverse
            sectors.
          </p>
        </div>

        {/* =========================================================
            INDUSTRY PILLS
        ========================================================= */}
        <div
          className="
            mt-4
            flex
            flex-wrap
            items-center
            gap-[10px]
          "
        >
          {industries.map((industry) => (
            <span
              key={industry}
              className="
                inline-flex
                h-[60px]
                items-center
                justify-center

                rounded-[30px]

                border
                border-[#B8B8B8]

                bg-white

                px-[27px]
                py-4

                text-[12px]
                font-medium
                leading-none
                text-[#333]

                transition-all
                duration-300

                hover:border-[#003896]
                hover:bg-[#003896]
                hover:text-white
                hover:shadow-sm
              "
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
