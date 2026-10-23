const HomeAboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:min-h-[720px] lg:py-0">
      {/* BACKGROUND WATERMARK LOGO */}
      <img
        src="/home-about/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[3%] top-0 z-0 h-[320px] w-[350px] object-contain opacity-[11] sm:h-[400px] sm:w-[430px] lg:right-[4%] lg:top-0 lg:h-[460px] lg:w-[500px]"
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-5 lg:min-h-[720px] lg:px-0">
        <div className="relative flex flex-col gap-0 lg:block lg:h-[720px]">
          {/* LEFT IMAGE */}
          <div className="relative z-0 h-[300px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:absolute lg:left-[70px] lg:top-[110px] lg:h-[465px] lg:w-[672px] lg:rounded-[25px]">
            <img
              src="/home-about/about-us.jpg"
              alt="Legacy Leaders team working together"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* ABOUT CONTENT CARD */}
          <div className="relative z-10 -mt-6 rounded-[20px] border border-[#d9deea] bg-white/95 px-6 py-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:px-8 lg:absolute lg:left-[578px] lg:top-[230px] lg:mt-0 lg:min-h-[425px] lg:w-[700px] lg:rounded-[25px] lg:px-[26px] lg:py-[22px]">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#003896] sm:text-xs lg:text-[12px]">
              Company Profile
            </p>

            <h2 className="text-[34px] font-bold leading-[1.15] tracking-[-0.6px] text-[#101d30] sm:text-[40px] lg:text-[42px]">
              About Us
            </h2>

            <p className="mt-4 text-[14px] font-semibold leading-[1.6] text-[#41414a] sm:text-base lg:text-[16px] lg:leading-[1.55]">
              Legacy Leaders LLC is a professional accounting and bookkeeping
              firm based in the UAE, dedicated to helping businesses achieve
              financial clarity, maintain compliance, and drive sustainable
              growth.
            </p>

            <p className="mt-3 text-[13px] font-normal leading-[1.7] text-[#55555e] sm:text-sm lg:text-[14px] lg:leading-[1.65]">
              We provide reliable accounting, taxation, and business support
              services tailored to startups, SMEs, and established enterprises
              across various industries. Our experienced professionals ensure
              every client receives accurate financial reporting, timely tax
              compliance, and personalized financial solutions.
            </p>

            <p className="mt-3 text-[13px] font-normal leading-[1.7] text-[#55555e] sm:text-sm lg:text-[14px] lg:leading-[1.65]">
              Our mission is to simplify financial management so business owners
              can focus on growing their business with confidence.
            </p>

            <a
              href="/about"
              className="mt-4 inline-flex h-[42px] min-w-[150px] items-center justify-center rounded-[12px] bg-[#062e70] px-6 text-[13px] font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-[#003896] sm:h-[46px] lg:text-[14px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
