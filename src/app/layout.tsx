import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lara Jae | Portfolio",
    template: "%s | Lara Jae",
  },
  description:
    "Portfolio of Lara Jae, a multidisciplinary artist and designer blending editorial storytelling with mixed media.",
  openGraph: {
    title: "Lara Jae | Portfolio",
    description:
      "Portfolio of Lara Jae, a multidisciplinary artist and designer blending editorial storytelling with mixed media.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="min-h-screen bg-paper">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-6 py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
