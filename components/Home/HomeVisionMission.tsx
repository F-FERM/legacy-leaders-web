const HomeVisionMission = () => {
  return (
    <section className="w-full bg-[#F3F3F3] py-16 sm:py-20 lg:py-[80px]">
      <div
        className="
            mx-auto
            w-full
            max-w-[1500px]
            px-6
            sm:px-8
            lg:px-10
            "
      >
        <div
          className="
                grid
                grid-cols-1
                gap-6

                lg:grid-cols-2
                lg:gap-6
            "
        >
          {/* =====================================================
                VISION
            ===================================================== */}
          <div
            className="
                flex
                min-h-[300px]
                flex-col
                rounded-[20px]
                bg-[#F8F8FF]
                p-8

                sm:p-10

                lg:min-h-[300px]
                lg:p-10
                "
          >
            {/* Icon */}
            <div
              className="
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    rounded-[7px]
                    bg-[#F8E8EB]
                "
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2.5 12C2.5 12 6 5.5 12 5.5C18 5.5 21.5 12 21.5 12C21.5 12 18 18.5 12 18.5C6 18.5 2.5 12 2.5 12Z"
                  stroke="#EF3340"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#EF3340"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              className="
                    mt-5
                    text-[20px]
                    font-semibold
                    leading-[28px]
                    text-[#111111]
                "
            >
              Vision
            </h3>

            {/* Description */}
            <p
              className="
                    mt-3
                    max-w-[600px]
                    text-[18px]
                    font-normal
                    leading-[25.6px]
                    tracking-[0px]
                    text-[#555555]
                "
            >
              To become one of the UAE&apos;s most trusted accounting and tax
              advisory firms by delivering reliable, transparent, and innovative
              financial solutions.
            </p>
          </div>

          {/* =====================================================
                MISSION
            ===================================================== */}
          <div
            className="
                flex
                min-h-[300px]
                flex-col
                rounded-[20px]
                bg-[#073477]
                p-8

                sm:p-10

                lg:min-h-[300px]
                lg:p-10
                "
          >
            {/* Icon */}
            <div
              className="
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    rounded-[7px]
                    bg-[#6683B4]
                "
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 21V4"
                  stroke="#073477"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M6 5H17L15 8L17 11H6"
                  stroke="#073477"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              className="
                    mt-5
                    text-[20px]
                    font-semibold
                    leading-[28px]
                    text-white
                "
            >
              Mission
            </h3>

            {/* Mission List */}
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-[6px] flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M8.5 12L10.8 14.3L15.5 9.7"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  className="
                        text-[18px]
                        font-normal
                        leading-[25.6px]
                        tracking-[0px]
                        text-white/90
                    "
                >
                  Deliver accurate and timely accounting services.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-[6px] flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M8.5 12L10.8 14.3L15.5 9.7"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  className="
                        text-[18px]
                        font-normal
                        leading-[25.6px]
                        tracking-[0px]
                        text-white/90
                    "
                >
                  Help businesses remain fully compliant with UAE regulations.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-[6px] flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M8.5 12L10.8 14.3L15.5 9.7"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  className="
                        text-[18px]
                        font-normal
                        leading-[25.6px]
                        tracking-[0px]
                        text-white/90
                    "
                >
                  Build long-term relationships through integrity and
                  professionalism.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-[6px] flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M8.5 12L10.8 14.3L15.5 9.7"
                    stroke="#4A8BD4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  className="
                        text-[18px]
                        font-normal
                        leading-[25.6px]
                        tracking-[0px]
                        text-white/90
                    "
                >
                  Support business growth with practical financial advice.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVisionMission;
