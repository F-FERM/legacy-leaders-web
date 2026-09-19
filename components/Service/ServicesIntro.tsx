const InsightsIntro = () => {
  return (
    <section
      className="
        w-full
        border-b
        border-[#D9D9D9]
        bg-[#EDEDED]
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[518px]
          w-full
          max-w-[1920px]
          flex-col
          items-center
          justify-center
          px-[40px]
          py-[128px]
          text-center
        "
      >
        {/* =========================================================
            HEADING
        ========================================================= */}
        <h1
          className="
            text-[50px]
            font-semibold
            leading-[57.6px]
            tracking-[-0.96px]
            text-[#0F1E32]
          "
        >
          Our Services
        </h1>

        {/* =========================================================
            DESCRIPTION
        ========================================================= */}
        <p
          className="
            mt-7
            max-w-[650px]
            text-[18px]
            font-normal
            leading-[28.8px]
            tracking-[0px]
            text-[#555555]
          "
        >
          Comprehensive financial solutions tailored for precision, compliance,
          and growth in the UAE.
        </p>
      </div>
    </section>
  );
};

export default InsightsIntro;
