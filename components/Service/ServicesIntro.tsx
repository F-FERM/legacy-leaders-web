const InsightsIntro = () => {
  return (
    <section className="w-full bg-[#f1f1f1]">
      <div
        className="
          mx-auto
          flex
          min-h-[350px]
          max-w-[1300px]
          flex-col
          items-center
          justify-center
          px-6
          text-center

          sm:px-8
          lg:px-10
        "
      >
        {/* =========================================================
            HEADING
        ========================================================= */}
        <h1
          className="
            text-[42px]
            font-semibold
            leading-[1.15]
            tracking-[-0.96px]
            text-[#14243a]

            sm:text-[50px]

            lg:text-[50px]
            lg:leading-[57.6px]
          "
        >
          Insights &amp; Updates
        </h1>

        {/* =========================================================
            DESCRIPTION
        ========================================================= */}
        <p
          className="
            mt-7
            max-w-[650px]
            font-['Work_Sans']
            text-[17px]
            font-normal
            leading-[1.6]
            tracking-[0px]
            text-[#555]

            sm:text-[18px]
            sm:leading-[28.8px]

            lg:text-[18px]
            lg:leading-[28.8px]
          "
        >
          Stay informed on the latest UAE accounting, VAT, and corporate tax
          regulations.
        </p>
      </div>
    </section>
  );
};

export default InsightsIntro;
