import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Home/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Legacy Leaders LLC",
  description: "Professional Accounting & Bookkeeping Services in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          min-h-screen
          bg-white
          font-sans
          antialiased
        `}
      >
        <Navbar />

        <main className="flex min-h-screen flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
