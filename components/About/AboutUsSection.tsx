const AboutUsSection = () => {
  return (
    <section className="w-full bg-[#eef3ff] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <h2 className="text-center font-serif text-[28px] font-bold leading-tight text-[#14243a] sm:text-[30px]">
          About Us
        </h2>

        {/* Content */}
        <div className="mx-auto mt-2 max-w-[1000px] text-[10px] leading-[1.55] text-[#555] sm:text-[11px]">
          <p>
            We provide reliable accounting, taxation, and business support
            services tailored to startups, SMEs, and established enterprises
            across various industries.
          </p>

          <p className="mt-1">
            Our experienced professionals ensure every client receives accurate
            financial reporting, timely tax compliance, and personalized
            financial solutions.
          </p>

          <p className="mt-1">
            Our mission is to simplify financial management so business owners
            can focus on growing their business with confidence. We believe in
            building foundational processes that withstand regulatory scrutiny
            while providing clear insights for strategic decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
