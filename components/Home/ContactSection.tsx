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

  // ============================================================
  // SUBMIT LOGIC - KEPT UNCHANGED
  // ============================================================
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
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        py-12
        sm:py-16
        lg:py-20
      "
      style={{
        backgroundImage: "url('/contact-bg.jpg')",
      }}
    >
      {/* =========================================================
          BACKGROUND OVERLAY
      ========================================================= */}
      <div className="absolute inset-0 bg-black/30" />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1300px]
          px-5

          sm:px-8

          lg:px-10
        "
      >
        <div
          className="
            grid
            gap-4

            lg:grid-cols-[0.72fr_1fr]
            lg:gap-[12px]
          "
        >
          {/* =====================================================
              LEFT - CONTACT INFORMATION
          ===================================================== */}
          <div
            className="
              min-h-[430px]
              rounded-[14px]
              border
              border-white/50
              bg-white/65
              p-6
              backdrop-blur-[6px]

              sm:p-7

              lg:px-5
              lg:py-5
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[28px]
                font-semibold
                leading-[34px]
                text-[#003896]

                sm:text-[30px]
                sm:leading-[36px]
              "
            >
              Contact Us
            </h2>

            {/* Divider */}
            <div className="mt-4 h-px w-full bg-black/10" />

            {/* Company */}
            <div className="mt-5">
              <h3
                className="
                  text-[18px]
                  font-semibold
                  leading-[25px]
                  text-[#111111]
                "
              >
                Legacy Leaders LLC
              </h3>

              <p
                className="
                  mt-1
                  text-[16px]
                  font-normal
                  leading-[24px]
                  text-[#555555]
                "
              >
                Accounting &amp; Bookkeeping Firm
              </p>
            </div>

            {/* ===================================================
                CONTACT DETAILS
            =================================================== */}
            <div className="mt-8 space-y-6">
              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Mail
                  className="
                    mt-1
                    h-[21px]
                    w-[21px]
                    shrink-0
                    text-[#003896]
                  "
                  strokeWidth={2}
                />

                <div>
                  <p
                    className="
                      text-[16px]
                      font-medium
                      leading-[22px]
                      text-[#003896]
                    "
                  >
                    Email
                  </p>

                  <a
                    href="mailto:info@legacyleadersuae.com"
                    className="
                      mt-1
                      block
                      text-[16px]
                      font-normal
                      leading-[24px]
                      text-[#555555]
                      transition-colors
                      hover:text-[#003896]
                    "
                  >
                    info@legacyleadersuae.com
                  </a>
                </div>
              </div>

              {/* MOBILE */}
              <div className="flex items-start gap-3">
                <Phone
                  className="
                    mt-1
                    h-[21px]
                    w-[21px]
                    shrink-0
                    text-[#003896]
                  "
                  strokeWidth={2}
                />

                <div>
                  <p
                    className="
                      text-[16px]
                      font-medium
                      leading-[22px]
                      text-[#003896]
                    "
                  >
                    Mobile
                  </p>

                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="
                      mt-1
                      block
                      text-[16px]
                      font-normal
                      leading-[24px]
                      text-[#555555]
                      transition-colors
                      hover:text-[#003896]
                    "
                  >
                    +971 50300 1882
                  </a>
                </div>
              </div>

              {/* OFFICE */}
              <div className="flex items-start gap-3">
                <MapPin
                  className="
                    mt-1
                    h-[22px]
                    w-[22px]
                    shrink-0
                    text-[#003896]
                  "
                  strokeWidth={2}
                />

                <div>
                  <p
                    className="
                      text-[16px]
                      font-medium
                      leading-[22px]
                      text-[#003896]
                    "
                  >
                    Office
                  </p>

                  <p
                    className="
                      mt-1
                      text-[16px]
                      font-normal
                      leading-[24px]
                      text-[#555555]
                    "
                  >
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT - CONTACT FORM
          ===================================================== */}
          <div
            className="
              min-h-[430px]
              rounded-[14px]
              border
              border-white/50
              bg-white/65
              p-6
              backdrop-blur-[6px]

              sm:p-7

              lg:px-5
              lg:py-5
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[28px]
                font-semibold
                leading-[34px]
                text-[#003896]

                sm:text-[30px]
                sm:leading-[36px]
              "
            >
              Send Us a Message
            </h2>

            {/* =================================================
                FORM
            ================================================= */}
            <form onSubmit={handleSubmit} className="mt-5">
              {/* =================================================
                  FIRST NAME + LAST NAME
              ================================================= */}
              <div
                className="
                  grid
                  gap-5

                  sm:grid-cols-2
                "
              >
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="
                      mb-2
                      block
                      text-[13px]
                      font-normal
                      leading-[18px]
                      text-[#333333]
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
                      h-[42px]
                      w-full
                      rounded-[7px]
                      border
                      border-white/70
                      bg-white/75
                      px-3.5
                      text-[16px]
                      text-[#222222]
                      outline-none
                      transition-all

                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="
                      mb-2
                      block
                      text-[13px]
                      font-normal
                      leading-[18px]
                      text-[#333333]
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
                      h-[42px]
                      w-full
                      rounded-[7px]
                      border
                      border-white/70
                      bg-white/75
                      px-3.5
                      text-[16px]
                      text-[#222222]
                      outline-none
                      transition-all

                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  EMAIL + PHONE
              ================================================= */}
              <div
                className="
                  mt-5
                  grid
                  gap-5

                  sm:grid-cols-2
                "
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[13px]
                      font-normal
                      leading-[18px]
                      text-[#333333]
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
                      h-[42px]
                      w-full
                      rounded-[7px]
                      border
                      border-white/70
                      bg-white/75
                      px-3.5
                      text-[16px]
                      text-[#222222]
                      outline-none
                      transition-all

                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      text-[13px]
                      font-normal
                      leading-[18px]
                      text-[#333333]
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
                      h-[42px]
                      w-full
                      rounded-[7px]
                      border
                      border-white/70
                      bg-white/75
                      px-3.5
                      text-[16px]
                      text-[#222222]
                      outline-none
                      transition-all

                      focus:border-[#003896]
                      focus:ring-1
                      focus:ring-[#003896]/20
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  INDUSTRY
              ================================================= */}
              <div className="mt-5">
                <label
                  htmlFor="industry"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-normal
                    leading-[18px]
                    text-[#333333]
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
                    h-[42px]
                    w-full
                    rounded-[7px]
                    border
                    border-white/70
                    bg-white/75
                    px-3.5
                    text-[16px]
                    text-[#222222]
                    outline-none
                    transition-all

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

              {/* =================================================
                  MESSAGE
              ================================================= */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-normal
                    leading-[18px]
                    text-[#333333]
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
                    min-h-[96px]
                    w-full
                    resize-none
                    rounded-[7px]
                    border
                    border-white/70
                    bg-white/75
                    px-3.5
                    py-3
                    text-[16px]
                    leading-[24px]
                    text-[#222222]
                    outline-none
                    transition-all

                    focus:border-[#003896]
                    focus:ring-1
                    focus:ring-[#003896]/20
                  "
                />
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-5
                  h-[46px]
                  min-w-[170px]
                  rounded-[8px]
                  bg-[#003896]
                  px-8
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-white
                  transition-all
                  duration-300

                  hover:bg-[#002b72]
                  hover:shadow-[0_6px_20px_rgba(0,56,150,0.25)]

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
