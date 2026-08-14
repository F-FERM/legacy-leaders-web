import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#596574] text-white">
      {/* Main Footer */}
      <div className="relative z-10 mx-auto max-w-[1300px] px-8 pb-5 pt-12 sm:px-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
          {/* Company */}
          <div className="max-w-[300px]">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Legacy Leaders"
                className="h-auto w-[180px] object-contain"
              />
            </Link>

            <p className="mt-3 max-w-[280px] text-[11px] leading-[1.55] text-white/75">
              Your trusted partner for professional accounting and bookkeeping
              services in the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-2.5 space-y-1.5">
              <li>
                <Link
                  href="/"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[11px] font-semibold text-white">Resources</h3>

            <ul className="mt-2.5 space-y-1.5">
              <li>
                <Link
                  href="/vat-guide"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  VAT Guide
                </Link>
              </li>

              <li>
                <Link
                  href="/corporate-tax"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  Corporate Tax
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[11px] font-semibold text-white">Links</h3>

            <ul className="mt-2.5 space-y-1.5">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-of-service"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mt-7 border-t border-white/10 pt-3">
          <p className="text-[9px] text-white/45">
            © 2024 Legacy Leaders LLC. Professional Accounting & Bookkeeping
            Services in the UAE.
          </p>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="pointer-events-none absolute bottom-[-32px] left-1/2 -translate-x-1/2 whitespace-nowrap select-none">
        <span className="font-serif text-[80px] font-bold tracking-[-0.04em] text-white/[0.06] sm:text-[110px] lg:text-[125px]">
          LEGACY LEADERS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
