"use client";

import Link from "next/link";
import { useRef, useState } from "react";

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

const RecentArticles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isDraggingCards = useRef(false);
  const cardDragStartX = useRef(0);
  const cardStartScroll = useRef(0);
  const cardDragMoved = useRef(false);
  const suppressClick = useRef(false);

  const isDraggingThumb = useRef(false);
  const thumbStartX = useRef(0);
  const thumbStartScroll = useRef(0);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateProgress = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    setScrollProgress(maxScroll > 0 ? container.scrollLeft / maxScroll : 0);
  };

  // Drag the article cards with the mouse.
  const handleCardsPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "touch") return;
    if (event.button !== 0) return;

    const target = event.target as HTMLElement;

    // Let links and other interactive elements handle their own clicks.
    if (target.closest("a, button")) return;

    const container = scrollRef.current;
    if (!container) return;

    isDraggingCards.current = true;
    cardDragMoved.current = false;
    cardDragStartX.current = event.clientX;
    cardStartScroll.current = container.scrollLeft;

    container.setPointerCapture(event.pointerId);
  };

  const handleCardsPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isDraggingCards.current) return;

    const container = scrollRef.current;
    if (!container) return;

    const deltaX = event.clientX - cardDragStartX.current;

    if (Math.abs(deltaX) > 4) {
      cardDragMoved.current = true;
    }

    if (cardDragMoved.current) {
      container.scrollLeft = cardStartScroll.current - deltaX;
      updateProgress();
    }
  };

  const finishCardDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingCards.current) return;

    isDraggingCards.current = false;

    if (cardDragMoved.current) {
      suppressClick.current = true;

      // Allow the browser's pointer/click sequence to finish before
      // re-enabling clicks on article links.
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }

    const container = scrollRef.current;

    if (container?.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }
  };

  const handleCardsClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;

    event.preventDefault();
    event.stopPropagation();
    suppressClick.current = false;
  };

  // Drag the scrollbar thumb.
  const handleThumbPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const container = scrollRef.current;
    const thumb = event.currentTarget;

    if (!container) return;

    isDraggingThumb.current = true;
    setIsDragging(true);

    thumbStartX.current = event.clientX;
    thumbStartScroll.current = container.scrollLeft;

    thumb.setPointerCapture(event.pointerId);
  };

  const handleThumbPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isDraggingThumb.current) return;

    const container = scrollRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const thumbWidth = track.clientWidth * 0.38;
    const availableTrack = track.clientWidth - thumbWidth;

    if (availableTrack <= 0 || maxScroll <= 0) return;

    const deltaX = event.clientX - thumbStartX.current;
    const scrollDelta = (deltaX / availableTrack) * maxScroll;

    container.scrollLeft = Math.max(
      0,
      Math.min(maxScroll, thumbStartScroll.current + scrollDelta),
    );

    updateProgress();
  };

  const handleThumbPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingThumb.current = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  // Click anywhere on the scrollbar track to jump.
  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    const container = scrollRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const rect = track.getBoundingClientRect();
    const clickPosition = Math.max(
      0,
      Math.min(1, (event.clientX - rect.left) / rect.width),
    );

    const maxScroll = container.scrollWidth - container.clientWidth;

    container.scrollTo({
      left: clickPosition * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[65px]">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="mb-7 sm:mb-8">
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.6px] text-[#14243A] sm:text-[36px] lg:text-[40px]">
            Recent Articles
          </h2>
        </div>

        {/* ARTICLE CAROUSEL */}
        <div
          ref={scrollRef}
          onScroll={updateProgress}
          onPointerDown={handleCardsPointerDown}
          onPointerMove={handleCardsPointerMove}
          onPointerUp={finishCardDrag}
          onPointerCancel={finishCardDrag}
          onLostPointerCapture={() => {
            isDraggingCards.current = false;
          }}
          onClickCapture={handleCardsClickCapture}
          className={`flex snap-x snap-mandatory gap-[24px] overflow-x-auto overflow-y-hidden pb-2 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-[30px] ${
            isDraggingCards.current ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            touchAction: "pan-x pan-y",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {articles.map((article) => (
            <article
              key={article.title}
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
                  href={""}
                  className="mt-[3px] inline-flex w-fit items-center gap-2 text-[14px] font-bold leading-[1.4] text-[#ff333d] transition-all duration-300 hover:gap-3 hover:text-[#ff6269] sm:text-[15px]"
                >
                  Read More
                  <span className="text-[20px] leading-none">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* DRAGGABLE SCROLLBAR */}
        <div className="mx-auto mt-[35px] w-full max-w-[535px]">
          <div
            ref={trackRef}
            role="scrollbar"
            aria-label="Scroll recent articles"
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(scrollProgress * 100)}
            onClick={handleTrackClick}
            className="relative h-[6px] w-full cursor-pointer touch-none rounded-full bg-[#dedede]"
          >
            <div
              onPointerDown={handleThumbPointerDown}
              onPointerMove={handleThumbPointerMove}
              onPointerUp={handleThumbPointerUp}
              onPointerCancel={handleThumbPointerUp}
              onLostPointerCapture={() => {
                isDraggingThumb.current = false;
                setIsDragging(false);
              }}
              onClick={(event) => event.stopPropagation()}
              className={`absolute top-0 h-[6px] w-[38%] rounded-full bg-[#555555] ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                left: `${scrollProgress * 62}%`,
                transition: isDragging ? "none" : "left 100ms ease-out",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
