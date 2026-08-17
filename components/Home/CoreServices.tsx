"use client";

import {
  BookOpen,
  Building2,
  FileBarChart,
  ShieldCheck,
  HandCoins,
  ChartNoAxesColumn,
} from "lucide-react";

const services = [
  {
    title: "Accounting & Bookkeeping",
    icon: BookOpen,
    image: "/accounting.jpg",
    items: [
      "Daily bookkeeping",
      "General ledger maintenance",
      "Bank reconciliation",
      "Accounts payable & receivable",
      "Financial statement preparation",
      "Management reports",
    ],
  },
  {
    title: "Corporate Tax Services",
    icon: Building2,
    image: "/tax.jpg",
    items: [
      "Corporate Tax Registration",
      "Corporate Tax Return Filing",
      "Tax Planning",
      "Tax Compliance",
      "Corporate Tax Advisory",
    ],
  },
  {
    title: "VAT Services",
    icon: FileBarChart,
    image: "/vat.jpg",
    items: [
      "Corporate Tax Registration",
      "VAT Registration",
      "VAT Return Filing",
      "VAT Health Check",
      "VAT Consultancy",
      "FTA Assistance",
    ],
  },
];

const CoreServices = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <h2 className="font-serif-custom text-[28px] font-bold leading-tight text-[#0a1628] sm:text-[32px]">
          Core Services
        </h2>

        {/* Service Cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  min-h-[176px]
                  overflow-hidden
                  rounded-[30px]
                  shadow-md
                  border
                  border-[#d9dce2]
                  bg-white
                  p-3
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-transparent
                  hover:shadow-xl
                  sm:p-4
                  cursor-pointer
                "
              >
                {/* ================================================
                    Background Image (Hidden initially, shows on hover)
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    z-0
                    bg-cover
                    bg-center
                    scale-105
                    opacity-0
                    transition-all
                    duration-700
                    ease-out
                    group-hover:opacity-100
                    group-hover:scale-110
                  "
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                {/* ================================================
                    Dark Overlay (Hidden initially, shows on hover)
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    z-[1]
                    bg-gradient-to-b
                    from-[#071b35]/80
                    to-[#071b35]/90
                    opacity-0
                    transition-opacity
                    duration-500
                    ease-in-out
                    group-hover:opacity-100
                  "
                />

                {/* ================================================
                    Card Content
                ================================================= */}
                <div className="relative z-[2]">
                  {/* ── Icon ────────────────────────────────────────── */}
                  <div
                    className="
                      mb-3
                      flex
                      h-[40px]
                      w-[40px]
                      items-center
                      justify-center
                      rounded-[10px]
                      bg-[#eaf0ff]
                      transition-all
                      duration-400
                      group-hover:scale-125
                      group-hover:shadow-lg
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="
                        text-[#0a1628]
                        transition-all
                        duration-400
                        group-hover:text-[#3B78C2]
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* ── Title ───────────────────────────────────────── */}
                  <h3
                    className="
                      text-[25px]
                      font-bold
                      leading-tight
                      text-[#14243a]
                      transition-all
                      duration-400
                      group-hover:text-[#3B78C2]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* ── Service List ────────────────────────────────── */}
                  <ul className="mt-2.5 space-y-[3px]">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          text-[18px]
                          leading-[1.45]
                          text-[#555]
                          transition-all
                          duration-400
                          group-hover:text-white/90
                        "
                      >
                        <span
                          className="
                            mr-1
                            text-[#9a7a3a]
                            font-bold
                            transition-all
                            duration-400
                            group-hover:text-[#f5d78e]
                            group-hover:scale-110
                          "
                        >
                          ✓
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ── Hover Arrow Indicator ──────────────────────── */}
                  <div
                    className="
                      absolute
                      bottom-2
                      right-2
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/20
                      text-white
                      opacity-0
                      transition-all
                      duration-400
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      translate-x-4
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
