"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const industries = [
  "Accounting & Finance",
  "Construction",
  "E-commerce",
  "Healthcare",
  "Hospitality",
  "Real Estate",
  "Retail",
  "Technology",
  "Other",
];

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Connect your API here
    // await fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify(...)
    // });

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.15fr]">
          {/* =====================================================
              Contact Information
          ===================================================== */}
          <div className="min-h-[480px] rounded-[15px] border border-[#d5d9e1] bg-[#f7f8fd] p-5 sm:p-6">
            {/* Heading */}
            <h2 className="font-serif-custom text-[24px] font-bold text-[#14243a] sm:text-[25px]">
              Contact Us
            </h2>

            <div className="mt-2 border-t border-[#d4d7de]" />

            {/* Company */}
            <div className="mt-3">
              <h3 className="text-[15px] font-bold text-[#111827]">
                Legacy Leaders LLC
              </h3>

              <p className="mt-0.5 text-[16px] text-[#555]">
                Accounting &amp; Bookkeeping Firm
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-7 space-y-5">
              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail
                  size={21}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#8a6b2f]"
                />

                <div>
                  <p className="text-[16px] font-semibold text-[#14243a]">
                    Email
                  </p>

                  <p className="mt-0.5 text-[18px] text-[#333]">
                    info@legacyleadersuae.com
                  </p>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-start gap-2.5">
                <Phone
                  size={20}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#8a6b2f]"
                />

                <div>
                  <p className="text-[16px] font-semibold text-[#14243a]">
                    Mobile
                  </p>

                  <p className="mt-0.5 text-[18px] text-[#555]">
                    +971 58119 2017
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={21}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#8a6b2f]"
                />

                <div>
                  <p className="text-[16px] font-semibold text-[#14243a]">
                    Office
                  </p>

                  <p className="mt-0.5 text-[18px] text-[#555]">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              Contact Form
          ===================================================== */}
          <div className="rounded-[15px] border border-[#d5d9e1] bg-[#f7f8fd] p-5 sm:p-6">
            {/* Heading */}
            <h2 className="font-serif-custom text-[24px] font-bold text-[#14243a]">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-4">
              {/* First Name + Last Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-[15px] font-medium text-[#14243a]"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="h-[38px] w-full rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 text-[11px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-[15px] font-medium text-[#14243a]"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="h-[38px] w-full rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 text-[11px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[15px] font-medium text-[#14243a]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-[38px] w-full rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 text-[11px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-[15px] font-medium text-[#14243a]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="h-[38px] w-full rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 text-[11px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                  />
                </div>
              </div>

              {/* Industry */}
              <div className="mt-4">
                <label
                  htmlFor="industry"
                  className="mb-1.5 block text-[15px] font-medium text-[#14243a]"
                >
                  Industry
                </label>

                <select
                  id="industry"
                  name="industry"
                  defaultValue=""
                  className="h-[38px] w-full rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 text-[15px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                >
                  <option value="" disabled>
                    Select Industry...
                  </option>

                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[15px] font-medium text-[#14243a]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 py-2.5 text-[11px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 h-[34px] rounded-[6px] bg-black px-6 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#14243a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
