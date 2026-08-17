"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Swal from "sweetalert2";

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

const WHATSAPP_NUMBER = "971503001882";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ── Format WhatsApp Message ──────────────────────────────────
      const message = `
*New Contact Form Submission*

👤 *Name:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || "Not provided"}
🏢 *Industry:* ${formData.industry || "Not specified"}

💬 *Message:*
${formData.message}

---
Sent from Legacy Leaders LLC Website
      `.trim();

      // ── Encode for URL ────────────────────────────────────────────
      const encodedMessage = encodeURIComponent(message);

      // ── Open WhatsApp ─────────────────────────────────────────────
      window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, "_blank");

      // ── Reset Form ────────────────────────────────────────────────
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        industry: "",
        message: "",
      });

      // ── Success Alert with SweetAlert2 ──────────────────────────
      await Swal.fire({
        icon: "success",
        title: "Message Sent! ✅",
        text: "Your inquiry has been sent via WhatsApp. We'll get back to you shortly!",
        confirmButtonColor: "#8a6b2f",
        confirmButtonText: "Great!",
        timer: 4000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error sending message:", error);

      // ── Error Alert with SweetAlert2 ────────────────────────────
      await Swal.fire({
        icon: "error",
        title: "Oops! Something went wrong",
        text: "There was an error sending your message. Please try again or contact us directly.",
        confirmButtonColor: "#8a6b2f",
        confirmButtonText: "Try Again",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="hover:text-[#8a6b2f] transition-colors"
                    >
                      +971 50300 1882
                    </a>
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
                    value={formData.firstName}
                    onChange={handleChange}
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
                    value={formData.lastName}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                  value={formData.industry}
                  onChange={handleChange}
                  className="h-[38px] w-full rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 text-[15px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                >
                  <option value="">Select Industry...</option>

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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-[3px] border border-[#cfd4dd] bg-transparent px-3 py-2.5 text-[11px] text-[#14243a] outline-none transition focus:border-[#8a6b2f] focus:ring-1 focus:ring-[#8a6b2f]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 h-[34px] rounded-[6px] bg-black px-6 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#14243a] hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
