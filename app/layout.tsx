import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lara Jae",
  description: "Design portfolio",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/70 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}
      >
        <div className="mx-auto max-w-5xl px-6 py-10">
          <header className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="text-sm tracking-wide text-white/90 hover:text-white"
            >
              Lara Jae
            </Link>

            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              <NavLink href="/work">Work</NavLink>
              <NavLink href="/illustration">Illustration</NavLink>
              <NavLink href="/writing">Writing</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </header>

          <main className="mt-10">{children}</main>

          <footer className="mt-16 border-t border-white/10 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Lara Jae · Resohaus merch & visual design
          </footer>
        </div>
      </body>
    </html>
  );
}
