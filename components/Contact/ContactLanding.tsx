import Image from "next/image";

const ContactLanding = () => {
  return (
    <section className="w-full bg-[#C6C6CD] pt-[75px]">
      <div
        className="
          mx-auto
          flex
          min-h-[420px]
          max-w-[1300px]
          items-center
          px-6
          py-16

          sm:px-8
          sm:py-20

          lg:px-10
          lg:py-20
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10

            lg:grid-cols-[1fr_1fr]
            lg:gap-16
          "
        >
          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}
          <div className="max-w-[560px]">
            <h1
              className="
                font-serif-custom
                text-[44px]
                font-bold
                leading-[1.2]
                tracking-[-0.96px]
                text-black

                sm:text-[48px]

                lg:text-[50px]
              "
            >
              Let&apos;s Discuss Your
              <br />
              Financial Future.
            </h1>

            <p
              className="
                mt-6
                max-w-[520px]
                text-[18px]
                font-normal
                leading-[28.8px]
                text-[#555555]

                sm:text-[19px]

                lg:text-[20px]
                lg:leading-[32px]
              "
            >
              Connect with our expert accountants today. Whether you need
              comprehensive bookkeeping, tax advisory, or strategic financial
              planning, we&apos;re here to help your business thrive in the UAE.
            </p>
          </div>

          {/* =========================================================
              RIGHT IMAGE
          ========================================================= */}
          <div className="w-full">
            <div
              className="
                relative
                h-[280px]
                w-full
                overflow-hidden
                rounded-[20px]

                sm:h-[320px]

                lg:h-[350px]
              "
            >
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
