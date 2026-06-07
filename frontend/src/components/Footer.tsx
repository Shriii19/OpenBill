import Link from "next/link";

const footerLinks = {
  Products: [
    { name: "Shared Hosting", href: "/pricing" },
    { name: "VPS Servers", href: "/pricing" },
    { name: "Dedicated Servers", href: "/pricing" },
    { name: "Domain Registration", href: "/domains" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  Support: [
    { name: "Knowledgebase", href: "#" },
    { name: "Client Portal", href: "/client/dashboard" },
    { name: "Network Status", href: "#" },
    { name: "Report Abuse", href: "#" },
  ],
  Legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Acceptable Use", href: "#" },
    { name: "SLA", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-secondary-200 bg-secondary-900 text-secondary-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-secondary-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 text-xs font-bold text-white">
                O
              </div>
              <span className="text-sm font-semibold text-white">OpenBill</span>
            </div>
            <p className="text-sm text-secondary-400">
              &copy; {new Date().getFullYear()} OpenBill. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
