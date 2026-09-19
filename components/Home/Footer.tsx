import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#5B5B5B] text-white">
      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1300px]
          px-7
          pb-4
          pt-8

          sm:px-8
          sm:pt-9

          lg:px-0
          lg:pt-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8

            sm:grid-cols-2
            sm:gap-8

            lg:grid-cols-[2.1fr_0.8fr_0.8fr_0.8fr]
            lg:gap-10
          "
        >
          {/* =====================================================
              COMPANY
          ===================================================== */}
          <div className="max-w-[310px]">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Legacy Leaders"
                className="
                  h-auto
                  w-[280px]
                  object-contain
                "
              />
            </Link>

            <p
              className="
                mt-2
                max-w-[300px]
                text-[14px]
                font-normal
                leading-[20px]
                text-white/55
              "
            >
              Your trusted partner for professional accounting and bookkeeping
              services in the UAE.
            </p>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}
          <div>
            <h3
              className="
                text-[15px]
                font-semibold
                leading-[20px]
                text-white
              "
            >
              Quick Links
            </h3>

            <ul className="mt-2.5 space-y-1">
              <li>
                <Link
                  href="/"
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================================
              RESOURCES
          ===================================================== */}
          <div>
            <h3
              className="
                text-[15px]
                font-semibold
                leading-[20px]
                text-white
              "
            >
              Resources
            </h3>

            <ul className="mt-2.5 space-y-1">
              <li>
                <Link
                  href=""
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  VAT Guide
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  Corporate Tax
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================================
              LINKS
          ===================================================== */}
          <div>
            <h3
              className="
                text-[15px]
                font-semibold
                leading-[20px]
                text-white
              "
            >
              Links
            </h3>

            <ul className="mt-2.5 space-y-1">
              <li>
                <Link
                  href=""
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-white/45
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================================
            COPYRIGHT DIVIDER
        ========================================================= */}
        <div
          className="
            relative
            mt-7
            border-t
            border-white/10
            pt-2.5
          "
        >
          <p
            className="
              text-[12px]
              font-normal
              leading-[18px]
              text-white/35
            "
          >
            © 2024 Legacy Leaders LLC. Professional Accounting &amp; Bookkeeping
            Services in the UAE.
          </p>
        </div>
      </div>

      {/* =========================================================
          LARGE DECORATIVE BACKGROUND TEXT
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-1/2
          z-0
          w-full
          -translate-x-1/2
          select-none
          overflow-hidden
        "
      >
        <div
          className="
            whitespace-nowrap
            text-center
            font-serif
            text-[88px]
            font-bold
            leading-none
            tracking-[-0.045em]
            text-white/[0.045]

            sm:text-[110px]

            md:text-[130px]

            lg:text-[145px]

            xl:text-[155px]
          "
        >
          LEGACY LEADERS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
