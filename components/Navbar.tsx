"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  // =========================================================
  // CONTACT BUTTON IMAGE
  // =========================================================
  const contactButtonImage =
    pathname === "/contact"
      ? "/contact-button-active.png"
      : "/contact-button.png";

  return (
    <nav
      className="
        fixed
        left-0
        top-0
        z-[1000]
        w-full
        border-b
        border-white/10
        bg-[rgba(60,60,60,0.28)]
        backdrop-blur-xl
        shadow-[0_4px_30px_rgba(0,0,0,0.15)]
      "
    >
      {/* =========================================================
          NAVBAR CONTAINER
      ========================================================= */}
      <div
        className="
          mx-auto
          flex
          h-[75px]
          max-w-[1300px]
          items-center
          justify-between
          px-8

          max-[820px]:h-[70px]

          max-[480px]:h-[65px]
          max-[480px]:px-4
        "
      >
        {/* =======================================================
            LOGO
        ======================================================= */}
        <Link
          href="/"
          onClick={closeMenu}
          className="
            flex
            items-center
            -ml-6

            max-[820px]:ml-0
          "
        >
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Legacy Leaders"
              className="
                h-[60px]
                w-auto
                object-contain

                max-[820px]:h-[50px]
                max-[480px]:h-[45px]
              "
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </Link>

        {/* =======================================================
            DESKTOP NAVIGATION
        ======================================================= */}
        <ul className="flex items-center gap-5 max-[820px]:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    text-[15px]
                    font-medium
                    tracking-wide
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          !text-[#003896]

                          after:absolute
                          after:bottom-0
                          after:left-4
                          after:right-4
                          after:h-[2px]
                          after:rounded-full
                          after:bg-[#003896]
                        `
                        : `
                          !text-white
                          hover:!text-[#003896]
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

        {/* =========================================================
            DESKTOP CONTACT BUTTON
        ========================================================= */}
        <div className="max-[820px]:hidden">
          <Link
            href="/contact"
            aria-label="Contact"
            onClick={closeMenu}
            className="
              block
              h-[50px]
              w-[161px]
              overflow-hidden
              rounded-[58px]

              transition-all
              duration-300
              ease-out

              hover:scale-[1.02]
            "
          >
            <img
              src={contactButtonImage}
              alt="Contact"
              width={161}
              height={50}
              className="
                block
                h-[50px]
                w-[161px]
                object-fill
              "
            />
          </Link>
        </div>

        {/* =========================================================
            MOBILE HAMBURGER
        ========================================================= */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="
            hidden
            flex-col
            gap-[5px]
            rounded-md
            p-2

            max-[820px]:flex
          "
        >
          {/* Bar 1 */}
          <span
            className={`
              h-[2.5px]
              w-7
              rounded-full
              bg-white
              transition-all
              duration-300

              ${isOpen ? "translate-y-[7.5px] rotate-45" : ""}
            `}
          />

          {/* Bar 2 */}
          <span
            className={`
              h-[2.5px]
              w-7
              rounded-full
              bg-white
              transition-all
              duration-300

              ${isOpen ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* Bar 3 */}
          <span
            className={`
              h-[2.5px]
              w-7
              rounded-full
              bg-white
              transition-all
              duration-300

              ${isOpen ? "-translate-y-[7.5px] -rotate-45" : ""}
            `}
          />
        </button>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <div
        className={`
          fixed
          left-0
          top-[70px]
          w-full

          border-b
          border-white/10

          bg-[rgba(60,60,60,0.28)]
          backdrop-blur-xl

          shadow-[0_8px_30px_rgba(0,0,0,0.25)]

          transition-transform
          duration-300

          max-[480px]:top-[65px]

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="bg-[rgba(60,60,60,0.28)] p-6 max-[480px]:p-5">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`
                      relative
                      block
                      px-4
                      py-3
                      text-lg
                      font-medium
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            !text-[#003896]

                            after:absolute
                            after:bottom-1
                            after:left-4
                            after:right-4
                            after:h-[2px]
                            after:rounded-full
                            after:bg-[#003896]
                          `
                          : `
                            !text-white
                            hover:!text-[#003896]
                          `
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* =====================================================
                MOBILE CONTACT BUTTON
            ===================================================== */}
            <li className="mt-4">
              <Link
                href="/contact"
                onClick={closeMenu}
                aria-label="Contact"
                className="
                  block
                  h-[50px]
                  w-[161px]
                  overflow-hidden
                  rounded-[58px]

                  transition-all
                  duration-300
                  ease-out

                  hover:scale-[1.02]
                "
              >
                <img
                  src={contactButtonImage}
                  alt="Contact"
                  width={161}
                  height={50}
                  className="
                    block
                    h-[50px]
                    w-[161px]
                    object-fill
                  "
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
