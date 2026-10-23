const InsightsIntro = () => {
  return (
    <section className="relative w-full overflow-hidden pt-[155px]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/services-hero.jpg')",
        }}
      />

      {/* BLUE GRADIENT OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(232.96deg, rgba(255, 255, 255, 0) 3.96%, #022764 100.99%)",
        }}
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[260px]
          w-full
          max-w-[1920px]
          flex-col
          items-center
          justify-center
          px-5
          py-16
          text-center
          sm:min-h-[300px]
          sm:px-8
          sm:py-20
          lg:min-h-[300px]
          lg:px-[40px]
          lg:py-[70px]
        "
      >
        <h1
          className="
            text-[32px]
            font-semibold
            leading-[1.2]
            tracking-[-0.5px]
            text-white
            sm:text-[40px]
            lg:text-[50px]
            lg:leading-[57.6px]
            lg:tracking-[-0.96px]
          "
        >
          Our Services
        </h1>

        <p
          className="
            mt-4
            max-w-[650px]
            text-[14px]
            font-normal
            leading-[1.6]
            text-white
            sm:mt-5
            sm:text-[16px]
            lg:mt-7
            lg:text-[18px]
            lg:leading-[28.8px]
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
