"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your newsletter API here.
    if (!email.trim()) return;

    console.log("Newsletter subscription email:", email.trim());
  };

  return (
    <footer className="relative min-h-[595px] w-full overflow-hidden border-t border-white/20 bg-[#9A9A9A] text-white">
      {/* MAIN FOOTER CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 pb-7 pt-10 sm:px-8 lg:px-[68px] lg:pt-[52px]">
        {/* TOP ROW: LOGO, DESCRIPTION AND SUBSCRIPTION */}
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1.15fr_0.9fr_1.05fr] lg:items-start lg:gap-x-[55px]">
          {/* COMPANY LOGO */}
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Legacy Leaders home"
              className="inline-block"
            >
              <Image
                src="/logo.png"
                alt="Legacy Leaders LLC"
                width={480}
                height={170}
                priority
                className="h-auto w-[280px] object-contain sm:w-[340px] lg:w-[480px]"
              />
            </Link>
          </div>

          {/* COMPANY DESCRIPTION */}
          <div className="max-w-[350px] pt-1">
            <p className="text-[15px] font-normal leading-[1.55] tracking-[0.01em] text-white/80 sm:text-[16px]">
              Your trusted partner for professional accounting and bookkeeping
              services in the UAE.
            </p>
          </div>

          {/* NEWSLETTER SUBSCRIPTION */}
          <form
            onSubmit={handleSubscribe}
            className="flex w-full items-center gap-[10px] lg:pt-[2px]"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="h-[45px] min-w-0 flex-1 rounded-[9px] border border-white/10 bg-white/45 px-[25px] text-[14px] text-[#14243A] outline-none transition placeholder:text-[#858585] focus:border-[#022764] focus:bg-white/65"
            />

            <button
              type="submit"
              className="h-[45px] shrink-0 rounded-[13px] bg-[#022764] px-[22px] text-[14px] font-semibold tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#003896] sm:px-[25px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* FOOTER LINK COLUMNS */}
        <div className="relative mt-[26px] grid grid-cols-1 gap-6 border-t border-white/15 pt-[10px] sm:grid-cols-3 sm:gap-8 lg:mt-[20px] lg:grid-cols-3 lg:gap-x-10">
          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[15px] font-bold leading-6 text-white sm:text-[16px]">
              Quick Links
            </h3>

            <ul className="mt-[2px] space-y-[3px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium leading-[1.65] text-white/75 transition-colors duration-200 hover:text-white sm:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-[15px] font-bold leading-6 text-white sm:text-[16px]">
              Resources
            </h3>

            <ul className="mt-[2px] space-y-[3px]">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={""}
                    className="text-[14px] font-medium leading-[1.65] text-white/75 transition-colors duration-200 hover:text-white sm:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL LINKS */}
          <div>
            <h3 className="text-[15px] font-bold leading-6 text-white sm:text-[16px]">
              Links
            </h3>

            <ul className="mt-[2px] space-y-[3px]">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={""}
                    className="whitespace-nowrap text-[14px] font-medium leading-[1.65] text-white/75 transition-colors duration-200 hover:text-white sm:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT AND SOCIAL MEDIA */}
        <div className="relative mt-[100px] flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center lg:mt-[100px]">
          <p className="text-[12px] font-normal leading-[1.7] text-white/75 sm:text-[13px]">
            © 2024 Legacy Leaders LLC. Professional Accounting &amp; Bookkeeping
            Services in the UAE.
          </p>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex items-center gap-[25px]">
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#022764] transition-colors duration-200 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
              </svg>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#022764] transition-colors duration-200 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M14.5 8H13a2 2 0 0 0-2 2v10" />
                <path d="M8.5 12h7" />
              </svg>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#022764] transition-colors duration-200 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.4H4.98V9.5h2.95v8.9ZM6.45 8.29a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.4h-2.95v-4.33c0-1.03-.02-2.36-1.44-2.36-1.44 0-1.66 1.12-1.66 2.28v4.41H10V9.5h2.83v1.22h.04c.39-.7 1.35-1.44 2.78-1.44 2.98 0 3.53 1.96 3.53 4.51v4.61H19Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* LARGE DECORATIVE BACKGROUND BRANDING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-36px] left-1/2 z-0 w-full -translate-x-1/2 overflow-hidden select-none"
      >
        <div className="whitespace-nowrap text-center font-serif text-[76px] font-bold leading-[0.9] tracking-[-0.035em] text-[#022764]/10 sm:text-[110px] md:text-[145px] lg:text-[165px] xl:text-[180px]">
          LEGACY LEADERS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
