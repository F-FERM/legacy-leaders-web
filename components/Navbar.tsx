"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  const contactButtonImage =
    pathname === "/contact"
      ? "/contact-button-active.png"
      : "/contact-button.png";

  return (
    <nav
      className="
        fixed left-0 top-0 z-[1000]
        w-full
        border-b border-white/10
        bg-[rgba(2,39,100,0.74)]
        backdrop-blur-xl
        shadow-[0_4px_30px_rgba(0,0,0,0.15)]
      "
    >
      {/* LOGO — ALWAYS FLUSH WITH THE SCREEN'S LEFT EDGE */}
      <Link
        href="/"
        onClick={closeMenu}
        className="
          absolute left-0 top-0 z-20
          flex h-[95px] w-[328px]
          items-center justify-center
          bg-[rgba(217,217,217,1)]

          max-[820px]:h-[70px]
          max-[820px]:w-[240px]

          max-[480px]:h-[65px]
          max-[480px]:w-[200px]
        "
      >
        <img
          src="/logo.png"
          alt="Legacy Leaders"
          className="
            h-[90px] w-auto max-w-[95%]
            object-contain

            max-[820px]:h-[60px]
            max-[480px]:h-[55px]
          "
        />
      </Link>

      {/* NAVBAR CONTENT */}
      <div
        className="
          relative mx-auto
          flex h-[95px]
          max-w-[1300px]
          items-center justify-between
          px-8

          max-[820px]:h-[70px]
          max-[820px]:px-6

          max-[480px]:h-[65px]
          max-[480px]:px-4
        "
      >
        {/* DESKTOP NAVIGATION */}
        <ul
          className="
            absolute left-1/2
            flex -translate-x-1/2
            items-center gap-1
            max-[820px]:hidden
          "
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    relative inline-flex
                    items-center
                    px-3 py-2
                    text-[16px]
                    font-medium tracking-wide
                    transition-colors duration-300

                    ${
                      isActive
                        ? `
                          !text-white
                          after:absolute
                          after:bottom-0
                          after:left-3
                          after:right-3
                          after:h-[1px]
                          after:bg-white
                        `
                        : `
                          !text-white/60
                          hover:!text-white
                        `
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP CONTACT BUTTON */}
        <div className="ml-auto max-[820px]:hidden">
          <Link
            href="/contact"
            aria-label="Contact"
            onClick={closeMenu}
            className="
              block h-[50px] w-[161px]
              overflow-hidden rounded-[58px]
              transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            <img
              src={contactButtonImage}
              alt="Contact"
              width={161}
              height={50}
              className="block h-full w-full object-fill"
            />
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="
            ml-auto hidden
            flex-col gap-[5px]
            rounded-md p-2
            max-[820px]:flex
          "
        >
          <span
            className={`
              h-[2.5px] w-7 rounded-full
              bg-white transition-all duration-300
              ${isOpen ? "translate-y-[7.5px] rotate-45" : ""}
            `}
          />

          <span
            className={`
              h-[2.5px] w-7 rounded-full
              bg-white transition-all duration-300
              ${isOpen ? "opacity-0" : "opacity-100"}
            `}
          />

          <span
            className={`
              h-[2.5px] w-7 rounded-full
              bg-white transition-all duration-300
              ${isOpen ? "-translate-y-[7.5px] -rotate-45" : ""}
            `}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed left-0 top-[95px]
          z-10 w-full
          border-b border-white/10
          bg-[rgba(2,39,100,0.96)]
          backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          transition-transform duration-300

          max-[820px]:top-[70px]
          max-[480px]:top-[65px]
          min-[821px]:hidden

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 max-[480px]:p-5">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`
                      relative block
                      px-4 py-3
                      text-base font-medium
                      transition-colors duration-300

                      ${
                        isActive
                          ? `
                            !text-white
                            after:absolute
                            after:bottom-1
                            after:left-4
                            after:right-4
                            after:h-[2px]
                            after:bg-white
                          `
                          : `
                            !text-white/70
                            hover:!text-white
                          `
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* MOBILE CONTACT BUTTON */}
            <li className="mt-4">
              <Link
                href="/contact"
                onClick={closeMenu}
                aria-label="Contact"
                className="
                  block h-[50px] w-[161px]
                  overflow-hidden rounded-[58px]
                  transition-transform duration-300
                  hover:scale-[1.02]
                "
              >
                <img
                  src={contactButtonImage}
                  alt="Contact"
                  width={161}
                  height={50}
                  className="block h-full w-full object-fill"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
