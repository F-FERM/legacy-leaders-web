const services = [
  {
    title: "Accounting & Bookkeeping",
    icon: "▰",
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
    icon: "▣",
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
    icon: "▣",
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
        <h2 className="font-serif text-[28px] font-bold leading-tight text-[#0a1628] sm:text-[32px]">
          Core Services
        </h2>

        {/* Service Cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="min-h-[176px] rounded-[2px] border border-[#d9dce2] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-4"
            >
              {/* Icon */}
              <div className="mb-3 flex h-[24px] w-[24px] items-center justify-center rounded-[5px] bg-[#eaf0ff] text-[10px] font-bold text-[#0a1628]">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-[15px] font-bold leading-tight text-[#14243a]">
                {service.title}
              </h3>

              {/* Service List */}
              <ul className="mt-2.5 space-y-[3px]">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start text-[10px] leading-[1.45] text-[#555]"
                  >
                    <span className="mr-1 text-[#9a7a3a]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
