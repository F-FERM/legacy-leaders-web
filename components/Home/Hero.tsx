import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
});

export default function Hero() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden pt-[310px]">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* =========================================================
          GRADIENT OVERLAY
          
          Starts below the desktop navbar so the navbar area
          remains clean and shows the original hero image.
      ========================================================= */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[75px]
          bottom-0

          max-[820px]:top-[70px]
          max-[480px]:top-[65px]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(69, 148, 255, 0.58) 100%)",
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div
          className="
            flex
            w-full
            max-w-[1100px]
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
            className={`
    ${ibmPlexSerif.className}

    w-full
    font-semibold
    text-white
    text-center

    text-[34px]
    leading-[48px]
    tracking-[-0.7px]

    sm:text-[44px]
    sm:leading-[62px]

    md:text-[52px]
    md:leading-[73px]

    lg:text-[62px]
    lg:leading-[87px]
  `}
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
              max-w-[1000px]
              text-[11px]
              font-normal
              leading-[1.55]
              text-white/90

              sm:text-xs

              md:text-sm

              lg:text-[14px]
              lg:leading-6
            "
          >
            Professional accounting, bookkeeping, taxation and business support
            services designed to help businesses achieve financial
            <br className="hidden sm:block" />
            clarity, maintain compliance, and drive sustainable growth in the
            UAE.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-3

              max-[480px]:mt-5
              max-[480px]:w-full
              max-[480px]:gap-2
            "
          >
            {/* Get Started */}
            <a
              href="#contact"
              className="
                inline-flex
                h-10
                min-w-[121px]
                items-center
                justify-center
                rounded-md
                bg-[#003896]
                px-6
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300

                hover:bg-[#0F2256]
                hover:shadow-[0_6px_20px_rgba(0,56,150,0.35)]

                max-[480px]:h-9
                max-[480px]:min-w-[115px]
                max-[480px]:px-5
                max-[480px]:text-[11px]
              "
            >
              Get Started
            </a>

            {/* Learn More */}
            <a
              href="#about"
              className="
                inline-flex
                h-10
                min-w-[121px]
                items-center
                justify-center
                rounded-md
                border
                border-white/60
                bg-transparent
                px-6
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300

                hover:bg-white
                hover:text-[#071b2f]

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
