const HomeAboutSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-[590px]">
            {/* Small Label */}
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a7a3a]">
              Company Profile
            </p>

            {/* Heading */}
            <h2 className="font-serif text-[34px] font-bold leading-tight text-[#0a1628] sm:text-[38px] lg:text-[40px]">
              About Us
            </h2>

            {/* Main Description */}
            <p className="mt-2.5 text-[18px] font-semibold leading-[1.55] text-[#252525] sm:text-m">
              Legacy Leaders LLC is a professional accounting and bookkeeping
              firm based in the UAE, dedicated to helping businesses achieve
              financial clarity, maintain compliance, and drive sustainable
              growth.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-2.5 text-[16px] leading-[1.65] text-[#555] sm:text-s">
              We provide reliable accounting, taxation, and business support
              services tailored to startups, SMEs, and established enterprises
              across various industries. Our experienced professionals ensure
              every client receives accurate financial reporting, timely tax
              compliance, and personalized financial solutions.
            </p>

            {/* Paragraph 3 */}
            <p className="mt-2.5 text-[16px] leading-[1.65] text-[#555] sm:text-s">
              Our mission is to simplify financial management so business owners
              can focus on growing their business with confidence.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[10px]">
              <img
                src="/about-us.jpg"
                alt="Professional accounting and bookkeeping"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;