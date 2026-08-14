const ServicesIntro = () => {
  return (
    <section className="w-full bg-[#eef3ff] pt-[75px]">
      <div className="mx-auto flex min-h-[185px] max-w-[1300px] flex-col items-center justify-center px-6 py-10 text-center sm:px-8">
        {/* Heading */}
        <h1 className="font-serif text-[30px] font-bold leading-tight text-[#14243a] sm:text-[32px] lg:text-[34px]">
          Our Services
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[500px] text-[11px] leading-[1.6] text-[#555] sm:text-xs">
          Comprehensive financial solutions tailored for precision, compliance,
          and growth in the UAE.
        </p>
      </div>
    </section>
  );
};

export default ServicesIntro;
