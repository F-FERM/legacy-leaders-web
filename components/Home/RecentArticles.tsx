"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const articles = [
  {
    category: "Business Strategy",
    date: "Oct 24, 2023",
    title: "Choosing the Right Free Zone for Your Startup",
    description:
      "Evaluating the benefits, costs, and compliance requirements of various UAE Free Zones to optimize your operational...",
    image: "/articles/article-free-zone.jpg",
    href: "/blog/choosing-the-right-free-zone",
  },
  {
    category: "Corporate Tax",
    date: "Oct 18, 2023",
    title: "Transfer Pricing Rules Explained",
    description:
      "An overview of the new transfer pricing regulations and documentation requirements for businesses with related-...",
    image: "/articles/article-transfer-pricing.jpg",
    href: "/blog/transfer-pricing-rules",
  },
  {
    category: "Real Estate",
    date: "Oct 12, 2023",
    title: "VAT Implications for Real Estate Developers",
    description:
      "Clarifying the zero-rating and exemption rules applied to commercial and residential real estate transactions in the UAE.",
    image: "/articles/article-real-estate.jpg",
    href: "/blog/vat-real-estate-developers",
  },
  {
    category: "Business Strategy",
    date: "Oct 24, 2023",
    title: "Building a Strong Business Strategy for Long-Term Success",
    description:
      "Discover how effective planning, clear business goals, and strategic decision-making help organizations achieve sustainable growth and lasting success.",
    image: "/articles/article-business-strategy.jpg",
    href: "/blog/strong-business-strategy",
  },
  {
    category: "Leadership Development",
    date: "Oct 18, 2023",
    title: "Why Effective Leadership Is the Key to Business Growth",
    description:
      "Explore how strong leadership, confident decision-making, and effective team management drive organizational performance and long-term success.",
    image: "/articles/article-leadership.jpg",
    href: "/blog/effective-leadership-business-growth",
  },
  {
    category: "Business Growth",
    date: "Oct 12, 2023",
    title: "Smart Business Growth: Turning Challenges into Opportunities",
    description:
      "Learn how businesses can overcome challenges, improve operational efficiency, and identify new opportunities through strategic planning and innovation.",
    image: "/articles/article-business-growth.jpg",
    href: "/blog/smart-business-growth",
  },
];

const AUTO_SCROLL_INTERVAL = 1500;
const CARDS_PER_SCROLL = 2;
const PROGRESS_THUMB_WIDTH = 38;

const RecentArticles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const dragMoved = useRef(false);
  const suppressClick = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseAutoScroll = useRef(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Keep the progress indicator synchronized with the carousel.
  const updateProgress = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    setScrollProgress(
      maxScroll > 0
        ? Math.min(1, Math.max(0, container.scrollLeft / maxScroll))
        : 0,
    );
  }, []);

  // Automatically scroll forward by two cards every 1.5 seconds.
  const scrollToNextCards = useCallback(() => {
    const container = scrollRef.current;

    if (!container || isDragging.current || pauseAutoScroll.current) {
      return;
    }

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("article"),
    );

    if (cards.length === 0) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll <= 0) return;

    // Find the first card that has not yet reached the current scroll position.
    const nextCardIndex = cards.findIndex(
      (card) => card.offsetLeft > container.scrollLeft + 10,
    );

    const currentIndex =
      nextCardIndex === -1 ? cards.length - 1 : nextCardIndex - 1;

    const targetIndex = currentIndex + CARDS_PER_SCROLL;

    // Loop back to the beginning after reaching the end.
    if (
      nextCardIndex === -1 ||
      targetIndex >= cards.length ||
      container.scrollLeft >= maxScroll - 10
    ) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    const targetCard = cards[targetIndex];

    container.scrollTo({
      left: Math.min(targetCard.offsetLeft, maxScroll),
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(
      scrollToNextCards,
      AUTO_SCROLL_INTERVAL,
    );

    return () => window.clearInterval(interval);
  }, [scrollToNextCards]);

  // Resume automatic scrolling after the user finishes dragging.
  const pauseAndResumeAutoScroll = useCallback(() => {
    pauseAutoScroll.current = true;

    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = setTimeout(() => {
      pauseAutoScroll.current = false;
    }, AUTO_SCROLL_INTERVAL);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  // Hold and drag the cards with the mouse.
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const target = event.target as HTMLElement;

    // Preserve normal clicks on article links.
    if (target.closest("a, button")) return;

    const container = scrollRef.current;
    if (!container) return;

    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }

    pauseAutoScroll.current = true;
    isDragging.current = true;
    dragMoved.current = false;
    dragStartX.current = event.clientX;
    dragStartScroll.current = container.scrollLeft;

    container.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const container = scrollRef.current;
    if (!container) return;

    const deltaX = event.clientX - dragStartX.current;

    if (Math.abs(deltaX) > 4) {
      dragMoved.current = true;
    }

    if (dragMoved.current) {
      container.scrollLeft = dragStartScroll.current - deltaX;
      updateProgress();
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    if (dragMoved.current) {
      suppressClick.current = true;

      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }

    const container = scrollRef.current;

    if (container?.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }

    pauseAndResumeAutoScroll();
  };

  const handleLostPointerCapture = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    pauseAndResumeAutoScroll();
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;

    event.preventDefault();
    event.stopPropagation();
    suppressClick.current = false;
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[65px]">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="mb-7 sm:mb-8">
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.6px] text-[#14243A] sm:text-[36px] lg:text-[40px]">
            Recent Articles
          </h2>
        </div>

        {/* ARTICLE CAROUSEL */}
        <div
          ref={scrollRef}
          onScroll={updateProgress}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={handleLostPointerCapture}
          onClickCapture={handleClickCapture}
          className={`flex snap-x snap-mandatory gap-[24px] overflow-x-auto overflow-y-hidden pb-2 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-[30px] ${
            isDragging.current ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            touchAction: "pan-y",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {articles.map((article) => (
            <article
              key={article.href}
              className="group relative flex h-[500px] w-[min(461px,calc(100vw-40px))] flex-none snap-start flex-col overflow-hidden rounded-[30px] border border-[#606060] bg-[#071b35]"
            >
              <img
                src={article.image}
                alt={article.title}
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-colors duration-300 group-hover:from-black/90" />

              <div className="relative z-10 flex h-full flex-col justify-end gap-[10px] px-[20px] pb-[30px] pt-[30px]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[12px] font-bold uppercase leading-[1.4] tracking-[0.04em] text-[#78aaff] sm:text-[13px]">
                    {article.category}
                  </span>

                  <span className="shrink-0 text-[11px] font-medium leading-[1.4] text-white sm:text-[12px]">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold leading-[1.25] tracking-[-0.2px] text-white sm:text-[24px]">
                  {article.title}
                </h3>

                <p className="text-[14px] font-medium leading-[1.5] text-white/95 sm:text-[15px]">
                  {article.description}
                </p>

                <Link
                  draggable={false}
                  href={article.href}
                  className="mt-[3px] inline-flex w-fit items-center gap-2 text-[14px] font-bold leading-[1.4] text-[#ff333d] transition-all duration-300 hover:gap-3 hover:text-[#ff6269] sm:text-[15px]"
                >
                  Read More
                  <span className="text-[20px] leading-none">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* READ-ONLY SCROLL PROGRESS BAR */}
        <div
          className="mx-auto mt-[35px] w-full max-w-[535px]"
          aria-hidden="true"
        >
          <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-[#dedede]">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-[#555555] transition-transform duration-300 ease-out"
              style={{
                width: `${PROGRESS_THUMB_WIDTH}%`,
                transform: `translateX(${
                  scrollProgress * (100 / PROGRESS_THUMB_WIDTH - 1) * 100
                }%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
