"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  {
    heading: "Products",
    links: [
      { name: "Web Hosting", href: "/store#web-hosting" },
      { name: "VPS Servers", href: "/store#vps-servers" },
      { name: "Dedicated Servers", href: "/store#dedicated-servers" },
      { name: "Domains", href: "/store#domains" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "Announcements", href: "/announcements" },
      { name: "Network Status", href: "/status" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Account",
    links: [
      { name: "Login", href: "/login" },
      { name: "Register", href: "/register" },
      { name: "Client Area", href: "/client/dashboard" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/client")) return null;

  return (
    <footer className="border-t border-secondary-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-primary-500 to-primary-700 text-xs font-bold text-white">
                O
              </div>
              <span className="text-base font-semibold text-secondary-900">OpenBill</span>
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-secondary-500">
              Fast, reliable hosting with transparent billing. From your first
              website to a full rack of servers.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary-500">
                {group.heading}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-secondary-600 transition-colors hover:text-primary-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-secondary-200 py-5 sm:flex-row">
          <span className="text-xs text-secondary-500">
            &copy; {new Date().getFullYear()} OpenBill. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-xs text-secondary-500">
            <Link href="#" className="transition-colors hover:text-secondary-700">Terms of Service</Link>
            <Link href="#" className="transition-colors hover:text-secondary-700">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
