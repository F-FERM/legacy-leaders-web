const services = [
  {
    title: "Accounting & Bookkeeping",
    icon: "▰",
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
    icon: "▣",
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
    icon: "▣",
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
          {services.map((service) => (
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
                hover:-translate-y-1
                hover:border-transparent
                hover:shadow-lg
                sm:p-4
              "
            >
              {/* ================================================
                  Individual Service Background Image
              ================================================= */}
              <div
                className="
                  absolute
                  inset-0
                  z-0
                  bg-cover
                  bg-center
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  group-hover:scale-105
                "
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />

              {/* ================================================
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

              {/* ================================================
                  Card Content
              ================================================= */}
              <div className="relative z-[2]">
                {/* Icon */}
                <div
                  className="
                    mb-3
                    flex
                    h-[24px]
                    w-[24px]
                    items-center
                    justify-center
                    rounded-[5px]
                    bg-[#eaf0ff]
                    text-[10px]
                    font-bold
                    text-[#0a1628]
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-[#003896]
                  "
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[25px]
                    font-bold
                    leading-tight
                    text-[#14243a]
                    transition-colors
                    duration-300
                    group-hover:text-[#003896]
                  "
                >
                  {service.title}
                </h3>

                {/* Service List */}
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
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      <span
                        className="
                          mr-1
                          text-[#9a7a3a]
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
