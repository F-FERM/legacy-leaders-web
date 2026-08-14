"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-[1000] w-full py-2 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[75px] max-w-[1300px] items-center justify-between px-8 max-[480px]:h-[65px] max-[480px]:px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Legacy Leaders"
              className="h-[45px] w-auto object-contain max-[820px]:h-[35px] max-[480px]:h-[30px]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="flex items-center gap-10 max-[820px]:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`border-b-2 border-transparent py-2 text-[15px] font-medium tracking-wide !text-white transition-all duration-300 hover:!text-white ${
                    isActive
                      ? "border-b-[#f5d78e] !text-white"
                      : "hover:border-b-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact Button */}
        <div className="max-[820px]:hidden">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-gradient-to-br from-[#f5d78e] to-[#e8c16a] px-8 py-2.5 text-sm font-semibold !text-[#0a1628] shadow-[0_4px_15px_rgba(245,215,142,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(245,215,142,0.4)]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="hidden flex-col gap-[5px] bg-transparent p-1.5 max-[820px]:flex"
        >
          <span
            className={`h-[2.5px] w-7 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2.5px] w-7 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-[2.5px] w-7 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-[75px] w-full border-b border-white/5 bg-[#0a1628]/95 p-8 backdrop-blur-xl transition-transform duration-300 max-[480px]:top-[65px] max-[480px]:p-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium !text-white transition-all duration-300 ${
                    isActive
                      ? "!text-[#f5d78e]"
                      : "opacity-90 hover:!text-white hover:opacity-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* Mobile Contact */}
          <li className="mt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block rounded-full bg-gradient-to-br from-[#f5d78e] to-[#e8c16a] px-8 py-2.5 font-semibold !text-[#0a1628]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
