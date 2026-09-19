import { Eye, FileText, Handshake, Landmark, TrendingUp } from "lucide-react";

const missionItems = [
  {
    icon: FileText,
    text: "Deliver accurate and timely accounting services.",
  },
  {
    icon: Landmark,
    text: "Help businesses remain fully compliant with UAE regulations.",
  },
  {
    icon: Handshake,
    text: "Build long-term relationships through integrity and professionalism.",
  },
  {
    icon: TrendingUp,
    text: "Support business growth with practical financial advice.",
  },
];

const VisionMissionSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
      <div
        className="
          mx-auto
          max-w-[1300px]
          px-6

          sm:px-8

          lg:px-10
        "
      >
        <div
          className="
            grid
            gap-5

            lg:grid-cols-[0.72fr_1.08fr]
            lg:gap-5
          "
        >
          {/* =========================================================
              VISION
          ========================================================= */}
          <div
            className="
              relative
              min-h-[250px]
              overflow-hidden
              rounded-[20px]
              bg-[#003896]
              px-8
              py-9

              sm:px-9
              sm:py-10

              lg:min-h-[250px]
              lg:px-10
              lg:py-10
            "
          >
            {/* =======================================================
                DECORATIVE EYE ICON
            ======================================================= */}
            <div
              className="
                pointer-events-none
                absolute
                right-4
                top-3
                text-[#5476bd]

                sm:right-5
                sm:top-3
              "
            >
              <Eye size={55} strokeWidth={1.7} />
            </div>

            {/* =======================================================
                VISION CONTENT
            ======================================================= */}
            <div
              className="
                relative
                z-10
                max-w-[390px]
              "
            >
              <h2
                className="
                  text-[22px]
                  font-semibold
                  leading-[1.2]
                  text-white

                  sm:text-[23px]

                  lg:text-[24px]
                "
              >
                Our Vision
              </h2>

              <p
                className="
                  mt-4
                  text-[16px]
                  font-normal
                  leading-[1.55]
                  tracking-[0px]
                  text-white/90

                  sm:text-[17px]

                  lg:text-[17px]
                  lg:leading-[26px]
                "
              >
                To become one of the UAE&apos;s most trusted accounting and tax
                advisory firms by delivering reliable, transparent, and
                innovative financial solutions.
              </p>
            </div>
          </div>

          {/* =========================================================
              MISSION
          ========================================================= */}
          <div
            className="
              min-h-[250px]
              rounded-[20px]
              border
              border-[#e1e3ec]
              bg-[#f8f9ff]
              px-8
              py-8

              sm:px-9

              lg:px-10
              lg:py-8
            "
          >
            {/* =======================================================
                MISSION HEADING
            ======================================================= */}
            <h2
              className="
                text-[22px]
                font-semibold
                leading-[1.2]
                text-[#14243a]

                sm:text-[23px]

                lg:text-[24px]
              "
            >
              Our Mission
            </h2>

            {/* =======================================================
                MISSION ITEMS
            ======================================================= */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-x-8
                gap-y-7

                sm:grid-cols-2
                sm:gap-x-10
                sm:gap-y-7
              "
            >
              {missionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    {/* =================================================
                        ICON
                    ================================================= */}
                    <div
                      className="
                        flex
                        h-[38px]
                        w-[38px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[8px]
                        bg-[#f8dfe5]

                        sm:h-[40px]
                        sm:w-[40px]
                      "
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className="text-[#ff3045]"
                      />
                    </div>

                    {/* =================================================
                        TEXT
                    ================================================= */}
                    <p
                      className="
                        pt-[1px]
                        text-[15px]
                        font-normal
                        leading-[1.5]
                        tracking-[0px]
                        text-[#555]

                        sm:text-[16px]

                        lg:text-[16px]
                        lg:leading-[24px]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
