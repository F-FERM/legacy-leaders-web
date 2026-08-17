"use client";

import {
  Building2,
  Calculator,
  ChartNoAxesColumn,
  FileBarChart,
  HandCoins,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Accounting & Bookkeeping",
    icon: Calculator,
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
  {
    title: "Financial Reporting",
    icon: ChartNoAxesColumn,
    image: "/finance.jpg",
    items: [
      "Profit & Loss Statement",
      "Balance Sheet",
      "Cash Flow Statement",
      "Monthly MIS Reports",
      "Budgeting & Forecasting",
    ],
  },
  {
    title: "AML Compliance Services",
    icon: ShieldCheck,
    image: "/aml.jpg",
    items: [
      "AML Policy Preparation",
      "Risk Assessment",
      "UBO Compliance",
      "ESR Assistance",
      "Compliance Advisory",
    ],
  },
  {
    title: "Business Advisory",
    icon: HandCoins,
    image: "/business.jpg",
    items: [
      "Financial Analysis",
      "Business Planning",
      "Cash Flow Management",
      "Cost Control",
      "Business Performance Review",
    ],
  },
];

const ServicesGrid = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  min-h-[220px]
                  overflow-hidden
                  rounded-[16px]
                  shadow-md
                  border
                  border-[#d7dbe2]
                  bg-white
                  px-4
                  py-4
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-transparent
                  hover:shadow-xl
                  sm:px-5
                  sm:py-4
                  cursor-pointer
                "
              >
                {/* =================================================
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

                {/* =================================================
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

                {/* =================================================
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
                      bg-[#e8f0ff]
                      transition-all
                      duration-400
                      group-hover:scale-125
                      group-hover:shadow-lg
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="
                        text-[#0f1d32]
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
                      text-[20px]
                      font-bold
                      leading-[1.25]
                      text-[#14243a]
                      transition-all
                      duration-400
                      group-hover:text-[#3B78C2]
                      font-serif-custom
                    "
                  >
                    {service.title}
                  </h3>

                  {/* ── Items ───────────────────────────────────────── */}
                  <ul className="mt-4 space-y-[6px]">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          text-[15px]
                          leading-[1.5]
                          text-[#555]
                          transition-all
                          duration-400
                          group-hover:text-white/90
                        "
                      >
                        <span
                          className="
                            mr-2
                            shrink-0
                            text-[#967532]
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
                      bottom-0
                      right-0
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

export default ServicesGrid;
