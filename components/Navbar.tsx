"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <div className="logo-wrapper">
            <img
              src="/logo.png"
              alt="Legacy Leaders"
              className="logo-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="nav-contact">
          <Link href="/contact" className="contact-btn">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={pathname === link.href ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-contact">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: transparent;
          transition: all 0.3s ease;
          z-index: 1000;
          padding: 0.5rem 0;
        }

        .navbar.scrolled {
          background: rgba(10, 31, 51, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 75px;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .logo-img {
          height: 45px;
          width: auto;
          object-fit: contain;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-main {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.05em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .brand-sub {
          font-size: 0.6rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.08em;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        /* Desktop Navigation */
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links li a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        }

        .nav-links li a:hover {
          color: #fff;
          border-bottom-color: rgba(255, 215, 120, 0.6);
        }

        .nav-links li a.active {
          color: #fff;
          border-bottom-color: #f5d78e;
        }

        /* Contact Button */
        .contact-btn {
          background: linear-gradient(135deg, #f5d78e, #e8c16a);
          color: #0a1f33 !important;
          padding: 0.6rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(245, 215, 142, 0.3);
          text-shadow: none !important;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245, 215, 142, 0.4);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.3rem;
        }

        .hamburger .bar {
          width: 28px;
          height: 2.5px;
          background: #fff;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .hamburger.active .bar:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active .bar:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active .bar:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 75px;
          left: 0;
          width: 100%;
          background: rgba(10, 31, 51, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 2rem;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-links li a {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 500;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .mobile-links li a:hover,
        .mobile-links li a.active {
          opacity: 1;
        }

        .mobile-contact {
          margin-top: 0.5rem;
        }

        .mobile-contact a {
          display: inline-block;
          background: linear-gradient(135deg, #f5d78e, #e8c16a);
          color: #0a1f33 !important;
          padding: 0.6rem 2rem;
          border-radius: 50px;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 820px) {
          .nav-links {
            display: none;
          }
          .nav-contact {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .brand-main {
            font-size: 0.9rem;
          }
          .brand-sub {
            font-size: 0.5rem;
          }
          .logo-img {
            height: 35px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 1rem;
            height: 65px;
          }
          .brand-main {
            font-size: 0.75rem;
          }
          .brand-sub {
            font-size: 0.45rem;
          }
          .logo-img {
            height: 30px;
          }
          .mobile-menu {
            top: 65px;
            padding: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
