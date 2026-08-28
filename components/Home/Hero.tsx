export default function Hero() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden pt-[310px]">
      {/* Background Image with Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[75px]
          bottom-0

          max-[820px]:top-[70px]
          max-[480px]:top-[65px]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(69, 148, 255, 0.58) 100%)",
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-[620px] pb-5">
          {/* =====================================================
              HEADING
          ===================================================== */}
          <h1 className="font-serif-custom text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[48px]">
            Your Numbers. Our
            <br />
            Commitment. Your
            <br />
            Success.
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <p className="mt-4 max-w-[580px] text-[18px] leading-6 text-white/85 sm:text-sm">
            Professional Accounting &amp; Bookkeeping Firm dedicated to helping
            businesses achieve financial clarity, maintain compliance, and drive
            sustainable growth in the UAE.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-10 min-w-[121px] items-center justify-center rounded-md bg-[#003896] px-6 text-xs font-semibold text-white transition hover:bg-[#0F2256]"
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
