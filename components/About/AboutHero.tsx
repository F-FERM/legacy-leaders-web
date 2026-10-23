const AboutHero = () => {
  return (
    <section className="w-full overflow-hidden bg-white pt-[75px]">
      <div className="mx-auto w-full max-w-[1360px] px-5 pb-[70px] sm:px-8 lg:px-0">
        {/* HERO CONTAINER */}
        <div className="relative mx-auto w-full lg:h-[645px]">
          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              z-0
              ml-auto
              h-[280px]
              w-full
              overflow-hidden
              rounded-[22px]
              sm:h-[380px]
              sm:rounded-[28px]
              lg:absolute
              lg:right-[64px]
              lg:top-[53px]
              lg:h-[467.69px]
              lg:w-[719px]
              lg:rounded-[30px]
            "
          >
            <img
              src="/about-hero.jpg"
              alt="Professionals discussing business and financial strategy"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* OVERLAPPING GLASS CARD */}
          <div
            className="
              relative
              z-10
              -mt-8
              flex
              w-full
              flex-col
              gap-[18px]
              rounded-[24px]
              border
              border-transparent
              px-6
              py-6
              sm:-mt-12
              sm:px-8
              sm:py-8
              lg:absolute
              lg:left-[1px]
              lg:top-[128px]
              lg:mt-0
              lg:h-[507.69px]
              lg:w-[723px]
              lg:gap-[22px]
              lg:rounded-[30px]
              lg:px-[30px]
              lg:py-[20px]
            "
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)) padding-box, linear-gradient(230.89deg, #022764 -1.45%, rgba(4,79,202,0) 66.39%) border-box",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          >
            {/* LABEL */}
            <p className="shrink-0 text-[10px] font-semibold uppercase leading-[1.4] tracking-[0.15em] text-[#003896] sm:text-[11px]">
              About Legacy Leaders LLC
            </p>

            {/* HEADING */}
            <h1
              className="
                shrink-0
                text-[34px]
                font-semibold
                leading-[1.3]
                tracking-[-0.8px]
                text-black
                sm:text-[46px]
                sm:leading-[1.35]
                lg:text-[60px]
                lg:leading-[1.4]
                lg:tracking-[-1.5px]
              "
            >
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Building Financial
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Clarity. Supporting
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Business Growth.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-[550px] text-[14px] font-normal leading-[1.6] text-[#50505a] sm:text-[15px] lg:text-[16px]">
              Legacy Leaders LLC is a professional accounting and bookkeeping
              firm based in the UAE, helping businesses maintain financial
              clarity, meet compliance requirements, and build a stronger
              foundation for sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
