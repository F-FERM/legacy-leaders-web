const VisionMission = () => {
  return (
    <section className="w-full bg-[#eef3ff] py-8 sm:py-10">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-3">
          {/* Vision Card */}
          <div className="min-h-[176px] rounded-[10px] border border-[#d8deea] bg-white px-6 py-6 sm:px-7">
            {/* Icon */}
            <div className="mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-[5px] bg-[#f0f0f0]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 12 5.5 6 12 6C18.5 6 22 12 22 12C22 12 18.5 18 12 18C5.5 18 2 12 2 12Z"
                  stroke="#7c642e"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.5"
                  stroke="#7c642e"
                  strokeWidth="1.7"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="font-serif text-[24px] font-bold text-[#101010]">
              Vision
            </h3>

            {/* Description */}
            <p className="mt-1.5 max-w-[500px] text-[18px] leading-[1.5] text-[#555] sm:text-[18px]">
              To become one of the UAE&apos;s most trusted accounting and tax
              advisory firms by delivering reliable, transparent, and innovative
              financial solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div className="min-h-[176px] rounded-[10px] bg-[#25364d] px-6 py-6 text-white sm:px-7">
            {/* Icon */}
            <div className="mb-2 flex h-[26px] w-[26px] items-center justify-center rounded-[5px] bg-[#34485f]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21V4"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M5 5H17L15 8L17 11H5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="font-serif text-[24px] font-bold text-white">
              Mission
            </h3>

            {/* Mission List */}
            <ul className="mt-1.5 space-y-1">
              <li className="flex items-start gap-1.5 text-[18px] leading-[1.5] text-white/85">
                <span className="mt-[2px] shrink-0 text-[#f5d78e]">⊙</span>
                <span>Deliver accurate and timely accounting services.</span>
              </li>

              <li className="flex items-start gap-1.5 text-[18px] leading-[1.5] text-white/85">
                <span className="mt-[2px] shrink-0 text-[#f5d78e]">⊙</span>
                <span>
                  Help businesses remain fully compliant with UAE regulations.
                </span>
              </li>

              <li className="flex items-start gap-1.5 text-[18px] leading-[1.5] text-white/85">
                <span className="mt-[2px] shrink-0 text-[#f5d78e]">⊙</span>
                <span>
                  Build long-term relationships through integrity and
                  professionalism.
                </span>
              </li>

              <li className="flex items-start gap-1.5 text-[18px] leading-[1.5] text-white/85">
                <span className="mt-[2px] shrink-0 text-[#f5d78e]">⊙</span>
                <span>
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

export default VisionMission;
