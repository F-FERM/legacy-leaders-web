"use client";

import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "/hero/hero.jpg",
    title: "Your Numbers. Our Commitment. Your Success.",
    description:
      "Professional accounting, bookkeeping, taxation, and business support services designed to help businesses achieve financial clarity, maintain compliance, and drive sustainable growth in the UAE.",
  },
  {
    image: "/hero/hero-2.jpg",
    title: "Smarter Numbers. Stronger Decisions.",
    description:
      "Our accounting and bookkeeping services bring accuracy, clarity, and financial control, so you can focus on what matters most.",
  },
  {
    image: "/hero/hero-3.jpg",
    title: "Secure Today. Ready for Tomorrow.",
    description:
      "From network setup to cybersecurity, our IT solutions keep your business connected, secure, and running smoothly.",
  },
  {
    image: "/hero/hero-4.jpg",
    title: "Creative Ideas. Lasting Impact.",
    description:
      "From brand identity to digital experiences, we craft creative solutions that connect, engage, and grow your business.",
  },
];

const SLIDE_INTERVAL = 3000;
const TRANSITION_DURATION = 1000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = useCallback(
    (nextIndex: number) => {
      if (isAnimating || nextIndex === activeIndex) return;

      setPreviousIndex(activeIndex);
      setActiveIndex(nextIndex);
      setIsAnimating(true);
    },
    [activeIndex, isAnimating],
  );

  const finishAnimation = useCallback(() => {
    setPreviousIndex(null);
    setIsAnimating(false);
  }, []);

  useEffect(() => {
    if (isAnimating) return;

    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % slides.length;

      setPreviousIndex(activeIndex);
      setActiveIndex(nextIndex);
      setIsAnimating(true);
    }, SLIDE_INTERVAL);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isAnimating]);

  return (
    <section
      className="relative h-screen min-h-[500px] w-full overflow-hidden bg-[#1e1e1e]"
      aria-label="Featured services"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* PREVIOUS SLIDE */}
        {previousIndex !== null && (
          <div
            key={"previous-" + previousIndex}
            className="absolute inset-0 overflow-hidden"
            style={{
              zIndex: 1,
              animation: "hero-slide-exit 1000ms ease-in-out forwards",
            }}
            onAnimationEnd={finishAnimation}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(" + slides[previousIndex].image + ")",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2,39,100,0.78) 0%, rgba(2,39,100,0.42) 42%, rgba(2,39,100,0.05) 100%)",
              }}
            />
          </div>
        )}

        {/* CURRENT SLIDE ENTERS FROM BOTTOM */}
        <div
          key={"current-" + activeIndex}
          className="absolute inset-0 overflow-hidden"
          style={{
            zIndex: 2,
            transform: isAnimating ? "translateY(0)" : "translateY(0)",
            animation: isAnimating
              ? "hero-slide-enter 1000ms cubic-bezier(0.22, 1, 0.36, 1) both"
              : "none",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(" + slides[activeIndex].image + ")",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,39,100,0.78) 0%, rgba(2,39,100,0.42) 42%, rgba(2,39,100,0.05) 100%)",
            }}
          />

          <div className="relative z-10 flex h-full w-full items-center px-[8%] pt-[95px] pb-8 max-[820px]:px-8 max-[820px]:pt-[70px] max-[480px]:px-6 max-[480px]:pt-[65px]">
            <div className="max-w-[850px] text-left">
              <h1 className="max-w-[850px] text-[34px] font-semibold leading-[1.25] tracking-[-0.8px] text-white sm:text-[42px] md:text-[52px] lg:text-[62px] max-[480px]:text-[30px]">
                {activeIndex === 0 ? (
                  <>
                    Your Numbers. Our
                    <br />
                    Commitment. Your Success.
                  </>
                ) : activeIndex === 1 ? (
                  <>
                    Smarter Numbers.
                    <br />
                    Stronger Decisions.
                  </>
                ) : activeIndex === 2 ? (
                  <>
                    Secure Today.
                    <br />
                    Ready for Tomorrow.
                  </>
                ) : (
                  <>
                    Creative Ideas.
                    <br />
                    Lasting Impact.
                  </>
                )}
              </h1>

              <p className="mt-3 max-w-[700px] text-[12px] leading-[1.7] text-white/90 sm:text-sm md:text-base max-[480px]:text-[11px]">
                {slides[activeIndex].description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-[44px] min-w-[135px] items-center justify-center rounded-[9px] bg-[#003896] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0F2256] max-[480px]:h-[38px] max-[480px]:min-w-[110px] max-[480px]:text-xs"
                >
                  Get Started
                </a>

                <a
                  href="#about"
                  className="inline-flex h-[44px] min-w-[135px] items-center justify-center rounded-[9px] bg-[#e5242a] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#c91c23] max-[480px]:h-[38px] max-[480px]:min-w-[110px] max-[480px]:text-xs"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* SLIDE INDICATORS */}
          <div className="absolute right-6 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-[5px] max-[480px]:right-3">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={"Go to slide " + (index + 1)}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => changeSlide(index)}
                className={
                  "rounded-full transition-all duration-300 " +
                  (activeIndex === index
                    ? "h-[12px] w-[5px] bg-white"
                    : "h-[5px] w-[5px] bg-white/50 hover:bg-white")
                }
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-slide-enter {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes hero-slide-exit {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes hero-slide-enter {
            from, to {
              transform: translateY(0);
            }
          }

          @keyframes hero-slide-exit {
            from, to {
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </section>
  );
}
