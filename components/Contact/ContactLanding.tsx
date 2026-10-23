import Image from "next/image";

const ContactLanding = () => {
  return (
    <section className="w-full overflow-hidden bg-[#EEEEEE] pt-[75px]">
      <div className="mx-auto w-full max-w-[1300px] px-5 py-[50px] sm:px-8 lg:px-10 lg:py-[75px]">
        <div className="relative mx-auto w-full max-w-[1140px] lg:h-[435px]">
          {/* IMAGE ON THE RIGHT */}
          <div className="relative ml-auto h-[240px] w-full overflow-hidden rounded-[20px] sm:h-[300px] lg:absolute lg:right-[35px] lg:top-0 lg:h-[335px] lg:w-[620px]">
            <Image
              src="/contact-hero.jpg"
              alt="Business leaders discussing financial strategy"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 620px"
              className="object-cover object-center"
            />
          </div>

          {/* TRANSLUCENT OVERLAPPING TEXT CARD */}
          <div className="relative z-10 -mt-[55px] w-full rounded-[25px] border border-white/60 bg-white/[0.78] px-5 py-6 backdrop-blur-[4px] sm:-mt-[70px] sm:px-7 sm:py-8 lg:absolute lg:left-0 lg:top-[115px] lg:mt-0 lg:h-[347px] lg:w-[605px] lg:rounded-[25px] lg:px-[30px] lg:py-[30px]">
            <h1 className="font-serif-custom text-[34px] font-bold leading-[1.3] tracking-[-1px] text-black sm:text-[42px] lg:text-[58px] lg:leading-[1.45]">
              Let&apos;s Discuss Your
              <br />
              Financial Future.
            </h1>

            <p className="mt-4 max-w-[480px] text-[14px] font-normal leading-[1.6] text-[#55545C] sm:text-[16px] lg:mt-[20px] lg:text-[16px] lg:leading-[1.5]">
              Connect with our expert accountants today. Whether you need
              comprehensive bookkeeping, tax advisory, or strategic financial
              planning, we&apos;re here to help your business thrive in the UAE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLanding;
