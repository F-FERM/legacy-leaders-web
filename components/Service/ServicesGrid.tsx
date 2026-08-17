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
                  rounded-[30px]
                  shadow-md
                  border
                  border-[#d7dbe2]
                  bg-white
                  px-4
                  py-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-transparent
                  hover:shadow-lg
                  sm:px-5
                  sm:py-4
                "
              >
                {/* =================================================
                    Service Background Image
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    z-0
                    bg-cover
                    bg-center
                    opacity-0
                    scale-100
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                {/* =================================================
                    Dark Overlay
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    z-[1]
                    bg-[#071b35]/75
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    Card Content
                ================================================= */}
                <div className="relative z-[2]">
                  {/* Icon */}
                  <div
                    className="
                      mb-3
                      flex
                      h-[29px]
                      w-[29px]
                      items-center
                      justify-center
                      rounded-[7px]
                      bg-[#e8f0ff]
                      transition-all
                      duration-300
                      group-hover:bg-white
                    "
                  >
                    <Icon
                      size={14}
                      strokeWidth={2}
                      className="
                        text-[#0f1d32]
                        transition-colors
                        duration-300
                        group-hover:text-[#003896]
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-[18px]
                      font-bold
                      leading-[1.25]
                      text-[#14243a]
                      transition-colors
                      duration-300
                      group-hover:text-white
                      font-serif-custom
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Items */}
                  <ul className="mt-4 space-y-[5px]">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          text-[15px]
                          leading-[1.45]
                          text-[#555]
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      >
                        <span
                          className="
                            mr-1.5
                            shrink-0
                            text-[#967532]
                            transition-colors
                            duration-300
                            group-hover:text-[#f5d78e]
                          "
                        >
                          ✓
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
