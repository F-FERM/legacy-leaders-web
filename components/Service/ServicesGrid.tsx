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
                className="min-h-[220px] rounded-[2px] border border-[#d7dbe2] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:px-5 sm:py-4"
              >
                {/* Icon */}
                <div className="mb-3 flex h-[29px] w-[29px] items-center justify-center rounded-[7px] bg-[#e8f0ff]">
                  <Icon size={14} strokeWidth={2} className="text-[#0f1d32]" />
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold leading-[1.25] text-[#14243a] sm:text-[18px]">
                  {service.title}
                </h3>

                {/* Items */}
                <ul className="mt-4 space-y-[5px]">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-[10px] leading-[1.45] text-[#555] sm:text-[11px]"
                    >
                      <span className="mr-1.5 shrink-0 text-[#967532]">✓</span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
