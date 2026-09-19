const AboutHero = () => {
  return (
    <section className="w-full bg-white pt-[75px]">
      <div
        className="
          mx-auto
          flex
          min-h-[560px]
          max-w-[1500px]
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

            lg:grid-cols-[minmax(0,1fr)_719px]
            lg:gap-[40px]
          "
        >
          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}
          <div
            className="
              w-full
              max-w-[720px]
            "
          >
            {/* =======================================================
                LABEL
            ======================================================= */}
            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#003896]

                sm:text-[11px]

                lg:text-[11px]
              "
            >
              About Legacy Leaders LLC
            </p>

            {/* =======================================================
                HEADING
            ======================================================= */}
            <h1
              className="
                text-[42px]
                font-semibold
                leading-[1.2]
                tracking-[-0.96px]
                text-black

                sm:text-[52px]
                sm:leading-[1.2]

                md:text-[60px]
                md:leading-[1.25]

                lg:text-[70px]
                lg:leading-[98px]
              "
            >
              <span className="block whitespace-nowrap">
                Building Financial
              </span>

              <span className="block whitespace-nowrap">
                Clarity. Supporting
              </span>

              <span className="block whitespace-nowrap">Business Growth.</span>
            </h1>

            {/* =======================================================
                DESCRIPTION
            ======================================================= */}
            <p
              className="
                mt-6
                max-w-[600px]
                text-[16px]
                font-normal
                leading-[25.6px]
                tracking-normal
                text-[#555]

                sm:text-[17px]
                sm:leading-[27px]

                lg:text-[18px]
                lg:leading-[28px]
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
          <div
            className="
              flex
              w-full
              justify-center

              lg:justify-end
            "
          >
            <div
              className="
                h-auto
                w-full
                max-w-[719px]
                overflow-hidden
                rounded-[30px]
                p-[10px]

                lg:h-[467.69px]
                lg:w-[719px]
                lg:max-w-[719px]
              "
            >
              <img
                src="/about-hero.jpg"
                alt="Legacy Leaders professional accounting team"
                className="
                  h-full
                  w-full
                  rounded-[20px]
                  object-cover
                  object-center
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
