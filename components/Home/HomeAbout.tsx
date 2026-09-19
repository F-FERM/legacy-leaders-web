const HomeAboutSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[90px]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-0
        "
      >
        <div
          className="
            grid
            items-center
            gap-10

            lg:grid-cols-[1fr_722px]
            lg:gap-12

            xl:gap-[60px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="w-full max-w-[590px]">
            {/* Company Profile */}
            <p
              className="
                mb-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#003896]
              "
            >
              Company Profile
            </p>

            {/* Heading */}
            <h2
              className="
                text-[34px]
                font-bold
                leading-[1.15]
                tracking-[-0.5px]
                text-[#0a1628]

                sm:text-[38px]

                lg:text-[40px]
              "
            >
              About Us
            </h2>

            {/* =================================================
                MAIN DESCRIPTION
                Poppins / SemiBold / 18px / 28px
            ================================================= */}
            <p
              className="
                mt-3
                max-w-[590px]
                text-[18px]
                font-semibold
                leading-[28px]
                tracking-normal
                text-[#252525]
              "
            >
              Legacy Leaders LLC is a professional accounting and bookkeeping
              firm based in the UAE, dedicated to helping businesses achieve
              financial clarity, maintain compliance, and drive sustainable
              growth.
            </p>

            {/* =================================================
                PARAGRAPH 2
            ================================================= */}
            <p
              className="
                mt-3
                max-w-[590px]
                text-[14px]
                font-normal
                leading-[22px]
                tracking-normal
                text-[#555555]
              "
            >
              We provide reliable accounting, taxation, and business support
              services tailored to startups, SMEs, and established enterprises
              across various industries. Our experienced professionals ensure
              every client receives accurate financial reporting, timely tax
              compliance, and personalized financial solutions.
            </p>

            {/* =================================================
                PARAGRAPH 3
            ================================================= */}
            <p
              className="
                mt-3
                max-w-[590px]
                text-[14px]
                font-normal
                leading-[22px]
                tracking-normal
                text-[#555555]
              "
            >
              Our mission is to simplify financial management so business owners
              can focus on growing their business with confidence.
            </p>

            {/* =================================================
                LEARN MORE
            ================================================= */}
            <a
              href="#about"
              className="
                mt-5
                inline-flex
                h-[40px]
                min-w-[111px]
                items-center
                justify-center
                rounded-[8px]
                bg-[#003896]
                px-6
                text-[11px]
                font-semibold
                text-white

                transition-all
                duration-300

                hover:bg-[#0F2256]
                hover:shadow-[0_6px_20px_rgba(0,56,150,0.25)]
              "
            >
              Learn More
            </a>
          </div>

          {/* =====================================================
              RIGHT IMAGE

              Desktop:
              Width  : 722px
              Height : 444px
              Radius : 30px
              Opacity: 1
          ===================================================== */}
          {/* =====================================================
    RIGHT IMAGE
===================================================== */}
          <div className="w-full">
            <div
              className="
      relative
      h-[300px]
      w-full
      overflow-hidden
      rounded-[30px]

      sm:h-[370px]

      lg:h-[444px]
    "
            >
              <img
                src="/about-us.jpg"
                alt="Professional accounting and bookkeeping"
                className="
        block
        h-full
        w-full
        object-cover
        object-center
      "
              />

              {/* Image Shade */}
              <div
                className="
        absolute
        inset-0
        rounded-[30px]
        bg-[#0000004D]
      "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
