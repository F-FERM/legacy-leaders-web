const AboutUsSection = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        py-10
        sm:py-12
        lg:py-14
      "
      style={{
        backgroundImage: "url('/about-page.jpg')",
      }}
    >
      {/* =========================================================
          DARK IMAGE OVERLAY
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          bg-black/60
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1300px]
          px-6

          sm:px-8

          lg:px-10
        "
      >
        {/* =========================================================
            SECTION HEADING
        ========================================================= */}
        <h2
          className="
            text-center
            text-[38px]
            font-semibold
            leading-[1.15]
            tracking-[0px]
            text-white

            sm:text-[44px]

            lg:text-[50px]
            lg:leading-[100%]
          "
        >
          Your Trusted Financial Partner
        </h2>

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <div
          className="
            mx-auto
            mt-6
            max-w-[1168px]
          "
        >
          <ul
            className="
              space-y-3
              text-[15px]
              font-normal
              leading-[1.45]
              tracking-[0px]
              text-white/90

              sm:text-[16px]
              sm:leading-[1.5]

              lg:text-[17px]
              lg:leading-[25.6px]
            "
          >
            {/* =====================================================
                ITEM 1
            ===================================================== */}
            <li className="flex items-start gap-3">
              <span
                className="
                  mt-[8px]
                  h-[5px]
                  w-[5px]
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span>
                Legacy Leaders LLC is a professional accounting and bookkeeping
                firm based in the UAE, dedicated to helping businesses achieve
                financial clarity, maintain compliance, and drive sustainable
                growth.
              </span>
            </li>

            {/* =====================================================
                ITEM 2
            ===================================================== */}
            <li className="flex items-start gap-3">
              <span
                className="
                  mt-[8px]
                  h-[5px]
                  w-[5px]
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span>
                Legacy Leaders LLC is a professional accounting and bookkeeping
                firm based in the UAE, dedicated to helping businesses achieve
                financial clarity, maintain compliance, and drive sustainable
                growth.
              </span>
            </li>

            {/* =====================================================
                ITEM 3
            ===================================================== */}
            <li className="flex items-start gap-3">
              <span
                className="
                  mt-[8px]
                  h-[5px]
                  w-[5px]
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span>
                We provide reliable accounting, taxation, and business support
                services tailored to startups, SMEs, and established enterprises
                across various industries.
              </span>
            </li>

            {/* =====================================================
                ITEM 4
            ===================================================== */}
            <li className="flex items-start gap-3">
              <span
                className="
                  mt-[8px]
                  h-[5px]
                  w-[5px]
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span>
                Our experienced professionals ensure that every client receives
                accurate financial reporting, timely tax compliance, and
                personalized financial solutions.
              </span>
            </li>

            {/* =====================================================
                ITEM 5
            ===================================================== */}
            <li className="flex items-start gap-3">
              <span
                className="
                  mt-[8px]
                  h-[5px]
                  w-[5px]
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span>
                Our goal is to simplify financial management so business owners
                can focus on what matters most — growing their business with
                confidence.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
