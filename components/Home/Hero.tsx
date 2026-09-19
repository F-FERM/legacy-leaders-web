export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* =========================================================
          GRADIENT OVERLAY
      ========================================================= */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[115px]
          bottom-0

          max-[820px]:top-[70px]
          max-[480px]:top-[65px]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.102) 0%, rgba(2, 39, 100, 0.6) 100%)",
        }}
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          items-center
          justify-center
          px-5
          pb-16
          pt-[115px]

          sm:px-8
          sm:pt-[100px]

          lg:px-10
          lg:pt-[115px]
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1250px]
            flex-col
            items-center
            justify-center
            text-center

            max-[820px]:max-w-[720px]
            max-[480px]:max-w-[95%]
          "
        >
          {/* =====================================================
              HEADING
          ===================================================== */}
          <h1
            className="
              w-full
              text-center
              font-semibold
              text-white

              text-[34px]
              leading-[1.25]
              tracking-[-0.8px]

              sm:text-[44px]
              sm:leading-[1.35]

              md:text-[52px]
              md:leading-[1.35]

              lg:text-[62px]
              lg:leading-[1.4]
              lg:tracking-[-1.2px]

              xl:text-[64px]
            "
          >
            Your Numbers. Our Commitment.
            <br />
            Your Success.
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <p
            className="
              mt-4
              w-full
              max-w-[1100px]
              text-center
              font-normal
              text-white/90

              text-[11px]
              leading-[1.6]

              sm:text-xs
              sm:leading-[1.7]

              md:text-sm
              md:leading-6

              lg:text-[15px]
              lg:leading-7
            "
          >
            Professional accounting, bookkeeping, taxation, and business support
            services designed to help businesses achieve financial clarity,
            <br className="hidden sm:block" />
            maintain compliance, and drive sustainable growth in the UAE.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-3

              sm:mt-8

              max-[480px]:mt-5
              max-[480px]:w-full
              max-[480px]:gap-2
            "
          >
            {/* ===================================================
                GET STARTED
            =================================================== */}
            <a
              href="#contact"
              className="
                inline-flex
                h-[52px]
                min-w-[196px]
                items-center
                justify-center
                rounded-[8px]
                bg-[#003896]
                px-8
                text-[15px]
                font-semibold
                tracking-[0.2px]
                text-white

                transition-all
                duration-300

                hover:bg-[#0F2256]
                hover:shadow-[0_8px_25px_rgba(0,56,150,0.4)]

                max-[820px]:h-11
                max-[820px]:min-w-[165px]
                max-[820px]:px-6
                max-[820px]:text-sm

                max-[480px]:h-9
                max-[480px]:min-w-[115px]
                max-[480px]:px-5
                max-[480px]:text-[11px]
              "
            >
              Get Started
            </a>

            {/* ===================================================
                LEARN MORE
            =================================================== */}
            <a
              href="#about"
              className="
                inline-flex
                h-[52px]
                min-w-[196px]
                items-center
                justify-center
                rounded-[8px]
                border
                border-[#ff3030]
                bg-transparent
                px-8
                text-[15px]
                font-semibold
                tracking-[0.2px]
                text-[#ff3030]

                transition-all
                duration-300

                hover:bg-[#ff3030]
                hover:text-white

                max-[820px]:h-11
                max-[820px]:min-w-[165px]
                max-[820px]:px-6
                max-[820px]:text-sm

                max-[480px]:h-9
                max-[480px]:min-w-[115px]
                max-[480px]:px-5
                max-[480px]:text-[11px]
              "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
