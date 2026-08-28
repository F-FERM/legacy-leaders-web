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

            lg:grid-cols-[0.72fr_1fr]
            lg:gap-5
          "
        >
          {/* =========================================================
              VISION
          ========================================================= */}
          <div
            className="
              relative
              min-h-[270px]
              overflow-hidden
              rounded-[15px]
              bg-[#003896]
              px-10
              py-12

              sm:px-11

              lg:px-12
              lg:py-12
            "
          >
            {/* =======================================================
                EYE ICON
            ======================================================= */}
            <div
              className="
                absolute
                right-4
                top-3
                text-[#4d72c1]

                sm:right-5
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
                  font-serif-custom
                  text-[30px]
                  font-semibold
                  leading-[1.15]
                  text-white

                  sm:text-[31px]
                "
              >
                Our Vision
              </h2>

              <p
                className="
                  mt-4
                  text-[17px]
                  font-normal
                  leading-[1.5]
                  tracking-[0px]
                  text-white/90

                  sm:text-[18px]
                  sm:leading-[1.5]
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
              min-h-[270px]
              rounded-[15px]
              border
              border-[#cfd4df]
              bg-[#f8f9ff]
              px-10
              py-7

              sm:px-11

              lg:px-12
              lg:py-7
            "
          >
            {/* =======================================================
                MISSION HEADING
            ======================================================= */}
            <h2
              className="
                font-serif-custom
                text-[30px]
                font-semibold
                leading-[1.15]
                text-[#14243a]

                sm:text-[31px]
              "
            >
              Our Mission
            </h2>

            {/* =======================================================
                MISSION ITEMS
            ======================================================= */}
            <div
              className="
                mt-5
                grid
                gap-x-10
                gap-y-8

                sm:grid-cols-2
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
                        h-[42px]
                        w-[42px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[9px]
                        bg-[#dce9ff]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[#003896]"
                      />
                    </div>

                    {/* =================================================
                        TEXT
                    ================================================= */}
                    <p
                      className="
                        pt-[1px]
                        text-[16px]
                        font-normal
                        leading-[1.5]
                        tracking-[0px]
                        text-[#555]

                        sm:text-[16px]
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
