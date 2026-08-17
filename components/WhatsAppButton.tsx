"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "971503001882";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ─── Floating WhatsApp Button ────────────────────────────────── */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
      >
        <div className="relative">
          {/* ── Tooltip ───────────────────────────────────────────────── */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black/80 px-4 py-2 text-sm font-medium text-white shadow-xl backdrop-blur-sm"
              >
                Chat with us! 💬
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/80" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── Main Button ──────────────────────────────────────────── */}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
            aria-label="Chat on WhatsApp"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* ── Blinking Rings (3 layers) ────────────────────────── */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30" />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20" />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-10" />
            </motion.div>

            {/* ── Button with Bounce Effect ─────────────────────────── */}
            <motion.div
              className="
                relative
                flex h-14 w-14 items-center justify-center
                rounded-full bg-[#25D366] shadow-lg
                transition-all duration-300
                hover:shadow-2xl
                active:scale-95
                sm:h-16 sm:w-16
                md:h-18 md:w-18
              "
              whileHover={{
                scale: 1.15,
                rotate: [-5, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -6, 0],
                boxShadow: [
                  "0 4px 12px rgba(37, 211, 102, 0.4)",
                  "0 8px 24px rgba(37, 211, 102, 0.6)",
                  "0 4px 12px rgba(37, 211, 102, 0.4)",
                ],
              }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                boxShadow: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {/* ── WhatsApp Icon ────────────────────────────────────── */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
                animate={isHovered ? { rotate: [0, -10, 10, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </motion.svg>

              {/* ── Notification Badge ────────────────────────────────── */}
              <motion.span
                className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white ring-2 ring-white"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 2,
                }}
              >
                1
              </motion.span>

              {/* ── Ripple on Hover ────────────────────────────────────── */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.4, opacity: 1 }}
                    exit={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* ─── Floating Particles (Optional Decoration) ────────────────── */}
      <motion.div
        className="fixed bottom-24 right-8 z-40 pointer-events-none sm:bottom-28 sm:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#25D366]"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, (i - 1) * 30, (i - 1) * 40],
              y: [0, -30 - i * 10, -50 - i * 10],
              opacity: [0.6, 0.3, 0],
              scale: [1, 0.5, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            style={{
              left: `${i * 8}px`,
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default WhatsAppButton;
