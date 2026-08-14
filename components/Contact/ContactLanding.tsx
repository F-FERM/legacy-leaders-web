import Image from "next/image";

const ContactLanding = () => {
  return (
    <section className="w-full bg-[#eef3ff] pt-[75px]">
      <div className="mx-auto flex min-h-[420px] max-w-[1300px] items-center px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left Content */}
          <div className="max-w-[540px]">
            <h1 className="font-serif text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-black sm:text-[42px] lg:text-[44px]">
              Let&apos;s Discuss Your
              <br />
              Financial Future.
            </h1>

            <p className="mt-4 max-w-[470px] text-[18px] leading-[1.6] text-[#555]">
              Connect with our expert accountants today. Whether you need
              comprehensive bookkeeping, tax advisory, or strategic financial
              planning, we&apos;re here to help your business thrive in the UAE.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="relative h-[260px] w-full overflow-hidden rounded-[12px] sm:h-[310px] lg:h-[350px]">
              <Image
                src="/contact-hero.jpg"
                alt="Business financial meeting"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLanding;
