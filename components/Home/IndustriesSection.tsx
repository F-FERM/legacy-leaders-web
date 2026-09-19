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
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[80px]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1300px]
          px-6
          sm:px-8
          lg:px-10
        "
      >
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
              mt-2
              text-[30px]
              font-bold
              leading-[1.2]
              tracking-[-0.5px]
              text-[#0A1628]

              sm:text-[34px]

              lg:text-[36px]
            "
          >
            Financial Support Across Industries
          </h2>

          {/* Description */}
          <p
            className="
              mt-2
              max-w-[800px]
              text-[18px]
              font-normal
              leading-[25.6px]
              tracking-[0px]
              text-[#555555]
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
            mt-6
            flex
            max-w-[1100px]
            flex-wrap
            items-center
            gap-[10px]
          "
        >
          {industries.map((industry, index) => {
            const isActive = "";

            return (
              <span
                key={industry}
                className={`
                  inline-flex
                  h-[36px]
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-full
                  border
                  px-[17px]

                  text-[13px]
                  font-medium
                  leading-none
                  tracking-[0px]

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-[#003896]
                        bg-[#EFF4FF]
                        text-[#003896]
                      `
                      : `
                        border-[#4A4A4A]
                        bg-white
                        text-[#333333]

                        hover:border-[#003896]
                        hover:bg-[#003896]
                        hover:text-white
                      `
                  }
                `}
              >
                {industry}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
