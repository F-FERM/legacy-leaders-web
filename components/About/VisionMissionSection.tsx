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
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-3 lg:grid-cols-[0.72fr_1fr]">
          {/* Vision */}
          <div className="relative min-h-[175px] overflow-hidden rounded-[6px] bg-[#121b30] px-8 py-10 sm:px-9">
            {/* Eye Icon */}
            <div className="absolute right-4 top-3 text-[#53648e]">
              <Eye size={43} strokeWidth={1.8} />
            </div>

            <div className="relative z-10 max-w-[330px]">
              <h2 className="font-serif text-[19px] font-bold text-white sm:text-[20px]">
                Our Vision
              </h2>

              <p className="mt-2 text-[10px] leading-[1.7] text-white/75 sm:text-[11px]">
                To become one of the UAE&apos;s most trusted accounting and tax
                advisory firms by delivering reliable, transparent, and
                innovative financial solutions.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="min-h-[175px] rounded-[6px] border border-[#d7dce5] bg-[#f8f9ff] px-7 py-5 sm:px-8">
            <h2 className="font-serif text-[19px] font-bold text-[#14243a] sm:text-[20px]">
              Our Mission
            </h2>

            <div className="mt-3 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {missionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-start gap-2.5">
                    {/* Icon */}
                    <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-[5px] bg-[#dce9ff]">
                      <Icon
                        size={13}
                        strokeWidth={1.8}
                        className="text-[#7d6835]"
                      />
                    </div>

                    {/* Text */}
                    <p className="pt-[1px] text-[9px] leading-[1.55] text-[#555] sm:text-[10px]">
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
