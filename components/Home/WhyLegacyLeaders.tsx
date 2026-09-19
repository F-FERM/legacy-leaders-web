export default function WhyLegacyLeaders() {
  const features = [
    {
      title: "Why Choose Legacy Leaders LLC?",
      description:
        "Our team has extensive knowledge of UAE accounting, VAT, and Corporate Tax regulations.",
    },
    {
      title: "Accuracy You Can Trust",
      description:
        "We maintain precise financial records to help you make informed business decisions.",
    },
    {
      title: "Personalized Service",
      description:
        "Every business is unique. Our solutions are tailored to your specific business requirements.",
    },
    {
      title: "Complete Compliance",
      description:
        "We help businesses meet UAE tax laws and financial reporting requirements.",
    },
    {
      title: "Confidentiality",
      description:
        "Your financial information remains secure and confidential.",
    },
    {
      title: "Affordable Solutions",
      description:
        "Professional accounting services designed to fit your business budget.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
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
          backgroundImage: "url('/why-legacy-leaders.jpg')",
        }}
      />

      {/* =========================================================
          DARK OVERLAY
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          bg-black/45
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
          w-full
          max-w-[1300px]
          px-6
          py-14

          sm:px-8
          sm:py-16

          lg:px-10
          lg:py-[28px]
        "
      >
        {/* =======================================================
            SECTION HEADING
        ======================================================= */}
        <div className="text-left">
          {/* Small Label */}
          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#003896]
            "
          >
            WHY LEGACY LEADERS
          </span>

          {/* Heading */}
          <h2
            className="
              mt-2
              text-[30px]
              font-bold
              leading-[1.2]
              tracking-[-0.5px]
              text-white

              sm:text-[34px]

              lg:text-[36px]
            "
          >
            Why Choose Legacy Leaders LLC?
          </h2>

          {/* Description */}
          <p
            className="
              mt-2
              max-w-[650px]
              text-[18px]
              font-normal
              leading-[25.6px]
              tracking-[0px]
              text-white/90
            "
          >
            Professional support designed around accuracy, compliance,
            confidentiality, and your business requirements.
          </p>
        </div>

        {/* =======================================================
            FEATURES GRID
        ======================================================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2

            lg:mt-6
            lg:gap-3
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                min-h-[150px]
                rounded-[18px]
                border
                border-white/40
                bg-white/70
                px-8
                py-5
                backdrop-blur-[3px]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-white/80
              "
            >
              {/* Card Heading */}
              <h3
                className="
                  text-[18px]
                  font-semibold
                  leading-[25.6px]
                  tracking-[0px]
                  text-[#082D70]
                "
              >
                {feature.title}
              </h3>

              {/* Card Description */}
              <p
                className="
                  mt-1.5
                  text-[18px]
                  font-normal
                  leading-[25.6px]
                  tracking-[0px]
                  text-[#444444]
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
