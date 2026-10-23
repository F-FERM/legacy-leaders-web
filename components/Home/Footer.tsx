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

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-[22px] w-[22px]"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-[22px] w-[22px]"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M14.5 8H13a2 2 0 0 0-2 2v10" />
        <path d="M8.5 12h7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-[22px] w-[22px]"
      >
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.4H4.98V9.5h2.95v8.9ZM6.45 8.29a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.4h-2.95v-4.33c0-1.03-.02-2.36-1.44-2.36-1.44 0-1.66 1.12-1.66 2.28v4.41H10V9.5h2.83v1.22h.04c.39-.7 1.35-1.44 2.78-1.44 2.98 0 3.53 1.96 3.53 4.51v4.61H19Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    console.log("Newsletter subscription email:", email.trim());
  };

  return (
    <footer className="relative min-h-[560px] w-full overflow-hidden border-t border-white/20 bg-[#9A9A9A] text-white sm:min-h-[575px] lg:min-h-[625px]">
      {/* MAIN FOOTER CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-5 pb-[95px] pt-6 sm:px-8 sm:pb-[110px] sm:pt-7 lg:px-[68px] lg:pb-[145px] lg:pt-[52px]">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-[minmax(0,480px)_minmax(250px,1fr)_minmax(360px,464px)] lg:gap-x-[35px] lg:gap-y-7 xl:gap-x-[55px]">
          {/* COMPANY LOGO */}
          <div className="flex items-start">
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
                className="h-auto w-[250px] object-contain sm:w-[320px] lg:w-[480px]"
              />
            </Link>
          </div>

          {/* COMPANY DESCRIPTION */}
          <div className="max-w-[350px] pt-[2px] lg:pt-[3px]">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[0.01em] text-white/80 sm:text-[15px] lg:text-[16px]">
              Your trusted partner for professional accounting and bookkeeping
              services in the UAE.
            </p>
          </div>

          {/* NEWSLETTER SUBSCRIPTION */}
          <form
            onSubmit={handleSubscribe}
            className="flex w-full items-center gap-[8px] lg:gap-[10px] lg:pt-[2px]"
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
              className="h-[42px] min-w-0 flex-1 rounded-[9px] border border-white/10 bg-white/45 px-4 text-[14px] text-[#14243A] outline-none transition placeholder:text-[#858585] focus:border-[#022764] focus:bg-white/65 sm:h-[44px] sm:px-[20px] lg:h-[45px] lg:px-[25px]"
            />

            <button
              type="submit"
              className="h-[42px] shrink-0 rounded-[11px] bg-[#022764] px-4 text-[13px] font-semibold tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#003896] sm:h-[44px] sm:px-5 sm:text-[14px] lg:h-[45px] lg:rounded-[13px] lg:px-[25px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* LINK HEADINGS */}
        <div className="mt-5 grid grid-cols-2 gap-x-6 sm:mt-6 sm:grid-cols-3 sm:gap-x-8 lg:mt-[20px] lg:grid-cols-3">
          <div className="border-b border-white/15 pb-[1px]">
            <h3 className="text-[14px] font-bold leading-[22px] text-white sm:text-[15px] lg:text-[16px]">
              Quick Links
            </h3>
          </div>

          <div className="border-b border-white/15 pb-[1px]">
            <h3 className="text-[14px] font-bold leading-[22px] text-white sm:text-[15px] lg:text-[16px]">
              Resources
            </h3>
          </div>

          <div className="col-span-2 border-b border-white/15 pb-[1px] sm:col-span-1">
            <h3 className="text-[14px] font-bold leading-[22px] text-white sm:text-[15px] lg:text-[16px]">
              Links
            </h3>
          </div>
        </div>

        {/* LINK LISTS */}
        <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-3">
          {/* QUICK LINKS */}
          <div>
            <ul className="mt-[5px] space-y-[2px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium leading-[1.6] text-white/75 transition-colors duration-200 hover:text-white sm:text-[14px] lg:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <ul className="mt-[5px] space-y-[2px]">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={""}
                    className="text-[13px] font-medium leading-[1.6] text-white/75 transition-colors duration-200 hover:text-white sm:text-[14px] lg:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL LINKS */}
          <div className="col-span-2 sm:col-span-1">
            <ul className="mt-[5px] space-y-[2px]">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={""}
                    className="whitespace-nowrap text-[13px] font-medium leading-[1.6] text-white/75 transition-colors duration-200 hover:text-white sm:text-[14px] lg:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT AND SOCIAL MEDIA */}
        <div className="relative mt-10 flex flex-col items-start justify-between gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5 lg:mt-[100px]">
          <p className="max-w-full text-[11px] font-normal leading-[1.6] text-white/75 sm:text-[12px] lg:text-[13px]">
            © 2024 Legacy Leaders LLC. Professional Accounting &amp; Bookkeeping
            Services in the UAE.
          </p>

          <div className="flex items-center gap-[22px]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#022764] transition-colors duration-200 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* RESPONSIVE DECORATIVE BACKGROUND BRANDING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 flex h-[58px] w-full items-end justify-center overflow-hidden select-none sm:h-[78px] md:h-[100px] lg:h-[145px]"
      >
        <div
          className="
            w-full whitespace-nowrap text-center
            font-serif font-bold leading-[0.9]
            tracking-[-0.055em]
            text-[#022764]/10
            text-[9.2vw]
            sm:text-[clamp(55px,7.5vw,110px)]
            md:text-[145px]
            lg:text-[165px]
            xl:text-[180px]
          "
        >
          LEGACY LEADERS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
