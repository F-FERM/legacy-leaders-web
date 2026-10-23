import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Blog", href: "/blog" },
];

const resourceLinks = [
  { label: "VAT Guide", href: "/services/vat" },
  { label: "Corporate Tax", href: "/services/corporate-tax" },
  { label: "Careers", href: "/careers" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="relative min-h-[390px] w-full overflow-hidden border-t border-white/25 bg-[#9A9A9A] text-white">
      {/* MAIN FOOTER CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 pb-5 pt-10 sm:px-8 sm:pt-11 lg:px-[40px] lg:pt-[42px]">
        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-[2.2fr_0.7fr_0.8fr_0.8fr] lg:gap-x-[55px]">
          {/* COMPANY INFORMATION */}
          <div className="col-span-2 max-w-[370px] sm:col-span-1">
            <Link
              href="/"
              aria-label="Legacy Leaders home"
              className="inline-block"
            >
              <Image
                src="/logo.png"
                alt="Legacy Leaders LLC"
                width={280}
                height={100}
                priority
                className="h-auto w-[245px] object-contain sm:w-[270px]"
              />
            </Link>

            <p className="mt-2 max-w-[340px] text-[15px] font-normal leading-[1.6] text-white/90 sm:text-[16px]">
              Your trusted partner for professional accounting and bookkeeping
              services in the UAE.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[16px] font-bold leading-6 text-white sm:text-[17px]">
              Quick Links
            </h3>

            <ul className="mt-2 space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium leading-[1.7] text-white/85 transition-colors duration-200 hover:text-white sm:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-[16px] font-bold leading-6 text-white sm:text-[17px]">
              Resources
            </h3>

            <ul className="mt-2 space-y-1">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium leading-[1.7] text-white/85 transition-colors duration-200 hover:text-white sm:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL LINKS */}
          <div>
            <h3 className="text-[16px] font-bold leading-6 text-white sm:text-[17px]">
              Links
            </h3>

            <ul className="mt-2 space-y-1">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="whitespace-nowrap text-[14px] font-medium leading-[1.7] text-white/85 transition-colors duration-200 hover:text-white sm:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="relative mt-7 border-t border-white/25 pt-3">
          <p className="text-[13px] font-normal leading-[1.6] text-white/85 sm:text-[14px]">
            © 2024 Legacy Leaders LLC. Professional Accounting &amp; Bookkeeping
            Services in the UAE.
          </p>
        </div>
      </div>

      {/* DECORATIVE BACKGROUND BRANDING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-24px] left-1/2 z-0 w-full -translate-x-1/2 overflow-hidden select-none"
      >
        <div className="whitespace-nowrap text-center font-serif text-[72px] font-bold leading-[0.9] tracking-[-0.035em] text-[#022764]/10 sm:text-[100px] md:text-[125px] lg:text-[150px] xl:text-[165px]">
          LEGACY LEADERS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
