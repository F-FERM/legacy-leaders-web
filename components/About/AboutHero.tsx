const AboutHero = () => {
  return (
    <section className="w-full bg-white pt-[75px]">
      <div
        className="
          mx-auto
          flex
          min-h-[430px]
          max-w-[1300px]
          items-center
          px-6
          py-12

          sm:px-8
          sm:py-14

          lg:px-10
          lg:py-16
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-14
          "
        >
          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}
          <div
            className="
              max-w-[520px]

              lg:max-w-[500px]
            "
          >
            {/* =======================================================
                LABEL
            ======================================================= */}
            <p
              className="
                mb-4
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#003896]

                sm:text-[9px]
              "
            >
              About Legacy Leaders LLC
            </p>

            {/* =======================================================
                HEADING
            ======================================================= */}
            <h1
              className="
                font-serif-custom
                text-[38px]
                font-bold
                leading-[1.32]
                tracking-[-0.02em]
                text-black

                sm:text-[44px]

                lg:text-[46px]
              "
            >
              Building Financial
              <br />
              Clarity. Supporting
              <br />
              Business Growth.
            </h1>

            {/* =======================================================
                DESCRIPTION
            ======================================================= */}
            <p
              className="
                mt-5
                max-w-[500px]
                text-[12px]
                leading-[1.55]
                text-[#555]

                sm:text-[13px]

                lg:max-w-[510px]
                lg:text-[12px]
                lg:leading-[1.55]
              "
            >
              Legacy Leaders LLC is a professional accounting and bookkeeping
              firm based in the UAE, helping businesses maintain financial
              clarity, meet compliance requirements, and build a stronger
              foundation for sustainable growth.
            </p>
          </div>

          {/* =========================================================
              RIGHT IMAGE
          ========================================================= */}
          <div className="w-full">
            <div
              className="
                w-full
                overflow-hidden
                rounded-[14px]

                lg:rounded-[14px]
              "
            >
              <img
                src="/about-hero.jpg"
                alt="Legacy Leaders professional accounting team"
                className="
                  h-[280px]
                  w-full
                  object-cover
                  object-center

                  sm:h-[320px]

                  lg:h-[316px]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
