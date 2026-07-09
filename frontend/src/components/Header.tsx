"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "Announcements", href: "/announcements" },
  { name: "Network Status", href: "/status" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/client")) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-secondary-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-primary-500 to-primary-700 text-xs font-bold text-white shadow-sm">
              O
            </div>
            <span className="text-base font-semibold text-secondary-900">OpenBill</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  pathname === link.href
                    ? "bg-primary-50 font-medium text-primary-700"
                    : "text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/login"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-secondary-700 transition-colors hover:bg-secondary-50 hover:text-secondary-900"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-primary-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-700"
            >
              Register
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-secondary-600 transition-colors hover:bg-secondary-50 hover:text-secondary-900 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-secondary-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                  pathname === link.href
                    ? "bg-primary-50 font-medium text-primary-700"
                    : "text-secondary-600 hover:bg-secondary-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-secondary-200" />
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-secondary-700 transition-colors hover:bg-secondary-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg bg-primary-600 px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
