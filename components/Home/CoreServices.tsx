"use client";

const services = [
  {
    title: "Accounting & Bookkeeping",
    image: "/service/accounting.jpg",
    icon: "/icons/accounting-icon.png",
    hoverIcon: "/icons/accounting-icon-hover.png",
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
    image: "/service/tax.jpg",
    icon: "/icons/tax-icon.png",
    hoverIcon: "/icons/tax-icon-hover.png",
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
    image: "/service/vat.jpg",
    icon: "/icons/vat-icon.png",
    hoverIcon: "/icons/vat-icon-hover.png",
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
    image: "/service/financial-reporting.jpg",
    icon: "/icons/reporting-icon.png",
    hoverIcon: "/icons/reporting-icon-hover.png",
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
    image: "/service/aml.jpg",
    icon: "/icons/aml-icon.png",
    hoverIcon: "/icons/aml-icon-hover.png",
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
    image: "/service/business-advisory.jpg",
    icon: "/icons/advisory-icon.png",
    hoverIcon: "/icons/advisory-icon-hover.png",
    items: [
      "Financial Analysis",
      "Business Planning",
      "Cash Flow Management",
      "Cost Control",
      "Business Performance Review",
    ],
  },
];

const CoreServices = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1470px] px-5 sm:px-8 lg:px-6">
        {/* SECTION HEADING */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#003896] sm:text-xs">
            Why Legacy Leaders
          </p>

          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.7px] text-[#101d30] sm:text-[38px] lg:text-[42px]">
            Core Services
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-[1.8] text-[#55555e] sm:text-[15px]">
            Complete financial and compliance support for startups, SMEs, and
            established businesses across the UAE.
          </p>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 justify-items-center gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              tabIndex={0}
              className="group relative flex h-[380px] w-full max-w-[472px] cursor-pointer flex-col overflow-hidden rounded-[30px] border border-[#d4d6de] bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#c7d5f2] hover:shadow-[0_12px_35px_rgba(10,35,75,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003896]"
            >
              {/* HOVER BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 z-0 scale-100 bg-cover bg-center opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-focus-visible:scale-105 group-focus-visible:opacity-100"
                style={{
                  backgroundImage: `url("${service.image}")`,
                }}
              />

              {/* LIGHT OVERLAY */}
              <div className="absolute inset-0 z-[1] bg-[#071b35]/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

              {/* BOTTOM GRADIENT */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#071b35]/65 via-transparent to-[#071b35]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

              {/* CARD CONTENT */}
              <div className="relative z-[2] flex h-full flex-col gap-[25px]">
                {/* ANIMATED ICON */}
                <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center overflow-visible rounded-[10px] bg-[#e6edff] transition-colors duration-300 group-hover:bg-transparent group-focus-visible:bg-transparent">
                  {/* NORMAL ICON */}
                  <img
                    src={service.icon}
                    alt=""
                    aria-hidden="true"
                    className="absolute h-[36px] w-[36px] scale-100 rotate-0 object-contain opacity-100 transition-all duration-500 ease-out group-hover:scale-50 group-hover:-rotate-12 group-hover:opacity-0 group-focus-visible:scale-50 group-focus-visible:opacity-0"
                  />

                  {/* HOVER ICON */}
                  <img
                    src={service.hoverIcon}
                    alt=""
                    aria-hidden="true"
                    className="absolute h-[42px] w-[42px] translate-y-2 scale-50 rotate-12 object-contain opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:rotate-0 group-focus-visible:opacity-100"
                  />
                </div>

                {/* SERVICE TITLE */}
                <h3 className="text-[21px] font-semibold leading-[1.35] tracking-[-0.3px] text-[#14243a] transition-colors duration-300 group-hover:text-white group-focus-visible:text-white sm:text-[22px]">
                  {service.title}
                </h3>

                {/* SERVICE LIST */}
                <ul className="space-y-[7px]">
                  {service.items.map((item, index) => (
                    <li
                      key={`${service.title}-${index}`}
                      className="flex items-start gap-[7px] text-[14px] leading-[1.55] text-[#484852] transition-colors duration-300 group-hover:text-white group-focus-visible:text-white sm:text-[15px]"
                    >
                      <img
                        src="/icons/arrow.png"
                        alt=""
                        aria-hidden="true"
                        className="mt-[3px] h-[15px] w-[15px] shrink-0 object-contain"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
