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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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

      const encodedMessage = encodeURIComponent(message);

      window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, "_blank");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        industry: "",
        message: "",
      });

      await Swal.fire({
        icon: "success",
        title: "Message Sent! ✅",
        text: "Your inquiry has been sent via WhatsApp. We'll get back to you shortly!",
        confirmButtonColor: "#003896",
        confirmButtonText: "Great!",
        timer: 4000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error sending message:", error);

      await Swal.fire({
        icon: "error",
        title: "Oops! Something went wrong",
        text: "There was an error sending your message. Please try again or contact us directly.",
        confirmButtonColor: "#003896",
        confirmButtonText: "Try Again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#dce8ff] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1fr]">
          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}
          <div
            className="
              min-h-[470px]
              rounded-[15px]
              border
              border-[#c8ceda]
              bg-[#f8f9ff]
              p-5
              sm:p-6
            "
          >
            {/* Heading */}
            <h2
              className="
                font-serif-custom
                text-[25px]
                font-semibold
                leading-tight
                text-[#14243a]
                sm:text-[27px]
              "
            >
              Contact Us
            </h2>

            {/* Divider */}
            <div className="mt-3 h-px w-full bg-[#d2d5dc]" />

            {/* Company */}
            <div className="mt-4">
              <h3 className="text-[16px] font-bold text-[#111827]">
                Legacy Leaders LLC
              </h3>

              <p className="mt-1 text-[15px] text-[#555]">
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
                  className="mt-0.5 shrink-0 text-[#003896]"
                />

                <div>
                  <p className="text-[14px] font-semibold text-[#14243a]">
                    Email
                  </p>

                  <a
                    href="mailto:info@legacyleadersuae.com"
                    className="
                      mt-0.5
                      block
                      text-[15px]
                      text-[#333]
                      transition-colors
                      hover:text-[#003896]
                    "
                  >
                    info@legacyleadersuae.com
                  </a>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-start gap-2.5">
                <Phone
                  size={20}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#003896]"
                />

                <div>
                  <p className="text-[14px] font-semibold text-[#14243a]">
                    Mobile
                  </p>

                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="
                      mt-0.5
                      block
                      text-[15px]
                      text-[#555]
                      transition-colors
                      hover:text-[#003896]
                    "
                  >
                    +971 50300 1882
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={21}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#003896]"
                />

                <div>
                  <p className="text-[14px] font-semibold text-[#14243a]">
                    Office
                  </p>

                  <p className="mt-0.5 text-[15px] text-[#555]">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}
          <div
            className="
              rounded-[15px]
              border
              border-[#c8ceda]
              bg-[#f8f9ff]
              p-5
              sm:p-6
            "
          >
            {/* Heading */}
            <h2
              className="
                font-serif-custom
                text-[25px]
                font-semibold
                leading-tight
                text-[#14243a]
                sm:text-[27px]
              "
            >
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-5">
              {/* First Name + Last Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-medium
                      text-[#14243a]
                    "
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
                    className="
                      h-[36px]
                      w-full
                      rounded-[7px]
                      border
                      border-[#cfd4dd]
                      bg-transparent
                      px-3
                      text-[13px]
                      text-[#14243a]
                      outline-none
                      transition
                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-medium
                      text-[#14243a]
                    "
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
                    className="
                      h-[36px]
                      w-full
                      rounded-[7px]
                      border
                      border-[#cfd4dd]
                      bg-transparent
                      px-3
                      text-[13px]
                      text-[#14243a]
                      outline-none
                      transition
                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-medium
                      text-[#14243a]
                    "
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
                    className="
                      h-[36px]
                      w-full
                      rounded-[7px]
                      border
                      border-[#cfd4dd]
                      bg-transparent
                      px-3
                      text-[13px]
                      text-[#14243a]
                      outline-none
                      transition
                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-medium
                      text-[#14243a]
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="
                      h-[36px]
                      w-full
                      rounded-[7px]
                      border
                      border-[#cfd4dd]
                      bg-transparent
                      px-3
                      text-[13px]
                      text-[#14243a]
                      outline-none
                      transition
                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>
              </div>

              {/* Industry */}
              <div className="mt-4">
                <label
                  htmlFor="industry"
                  className="
                    mb-1.5
                    block
                    text-[12px]
                    font-medium
                    text-[#14243a]
                  "
                >
                  Industry
                </label>

                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="
                    h-[36px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#cfd4dd]
                    bg-transparent
                    px-3
                    text-[13px]
                    text-[#14243a]
                    outline-none
                    transition
                    focus:border-[#003896]
                    focus:ring-1
                    focus:ring-[#003896]/20
                  "
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
                  className="
                    mb-1.5
                    block
                    text-[12px]
                    font-medium
                    text-[#14243a]
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    min-h-[84px]
                    w-full
                    resize-none
                    rounded-[7px]
                    border
                    border-[#cfd4dd]
                    bg-transparent
                    px-3
                    py-2.5
                    text-[13px]
                    text-[#14243a]
                    outline-none
                    transition
                    focus:border-[#003896]
                    focus:ring-1
                    focus:ring-[#003896]/20
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-4
                  h-[42px]
                  min-w-[185px]
                  rounded-[8px]
                  bg-[#003896]
                  px-7
                  text-[13px]
                  font-medium
                  tracking-wide
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#002b72]
                  hover:scale-[1.01]
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
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
