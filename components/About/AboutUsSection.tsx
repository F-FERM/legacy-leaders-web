const AboutUsSection = () => {
  return (
    <section className="w-full bg-[#eef3ff] py-6 sm:py-7 lg:py-8">
      <div
        className="
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
            font-serif-custom
            text-[50px]
            font-semibold
            leading-[100%]
            tracking-[0px]
            text-[#14243a]
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
            mt-8
            max-w-[1168px]
            font-['Work_Sans']
            text-[17px]
            font-normal
            leading-[25.6px]
            tracking-[0px]
            text-[#555]
          "
        >
          {/* =======================================================
              PARAGRAPH 1
          ======================================================= */}
          <p>
            Legacy Leaders LLC is a professional accounting and bookkeeping firm
            based in the UAE, dedicated to helping businesses achieve financial
            clarity, maintain compliance, and drive sustainable growth.
          </p>

          {/* =======================================================
              PARAGRAPH 2
          ======================================================= */}
          <p className="mt-4">
            We provide reliable accounting, taxation, and business support
            services tailored to startups, SMEs, and established enterprises
            across various industries.
          </p>

          {/* =======================================================
              PARAGRAPH 3
          ======================================================= */}
          <p className="mt-4">
            Our experienced professionals ensure that every client receives
            accurate financial reporting, timely tax compliance, and
            personalized financial solutions.
          </p>

          {/* =======================================================
              PARAGRAPH 4
          ======================================================= */}
          <p className="mt-4">
            Our goal is to simplify financial management so business owners can
            focus on what matters most — growing their business with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
