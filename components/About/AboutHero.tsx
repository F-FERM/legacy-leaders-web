const AboutHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[500px] max-w-[1300px] items-center px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left Content */}
          <div className="max-w-[560px]">
            {/* Label */}
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a7a3a]">
              Company Profile
            </p>

            {/* Heading */}
            <h1 className="font-serif text-[40px] font-bold leading-[1.12] tracking-[-0.02em] text-black sm:text-[46px] lg:text-[48px]">
              Your Numbers.
              <br />
              Our Commitment.
              <br />
              Your Success.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-[11px] leading-[1.6] text-[#555] sm:text-xs">
              Legacy Leaders LLC is a professional accounting and bookkeeping
              firm based in the UAE, dedicated to helping businesses achieve
              financial clarity, maintain compliance, and drive sustainable
              growth.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[12px]">
              <img
                src="/about-hero.jpg"
                alt="Legacy Leaders professional accounting team"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[390px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
