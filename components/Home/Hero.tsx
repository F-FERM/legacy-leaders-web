export default function Hero() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#071b2f]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-[620px] pb-5">
          {/* Heading */}
          <h1 className="font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[48px]">
            Your Numbers. Our
            <br />
            Commitment. Your
            <br />
            Success.
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[580px] text-[13px] leading-6 text-white/85 sm:text-sm">
            Professional Accounting &amp; Bookkeeping Firm dedicated to helping
            businesses achieve financial clarity, maintain compliance, and drive
            sustainable growth in the UAE.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-10 min-w-[121px] items-center justify-center rounded-md bg-[#0047ab] px-6 text-xs font-semibold text-white transition hover:bg-[#0058d0]"
            >
              Get Started
            </a>

            <a
              href="#about"
              className="inline-flex h-10 min-w-[121px] items-center justify-center rounded-md border border-white/60 px-6 text-xs font-semibold text-white transition hover:bg-white hover:text-[#071b2f]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
