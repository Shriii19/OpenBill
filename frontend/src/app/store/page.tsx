"use client";

import Link from "next/link";

export default function StorePage() {
  const categories = [
    { name: "Web Hosting", slug: "/#web-hosting", desc: "Shared hosting plans for every need" },
    { name: "VPS Servers", slug: "/#vps-servers", desc: "Virtual private servers with full root access" },
    { name: "Dedicated Servers", slug: "/#dedicated-servers", desc: "Bare-metal servers for high performance" },
    { name: "Domains", slug: "/#domains", desc: "Register or transfer your domains" },
    { name: "SSL Certificates", slug: "/#ssl", desc: "Secure your websites with SSL" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-gray-900">Store</h1>
      <p className="mt-1 text-sm text-gray-500">Browse our products and services.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.slug}
            className="rounded-lg border border-gray-200 bg-white p-5 hover:border-primary-200 hover:shadow-sm transition-all"
          >
            <h2 className="text-sm font-semibold text-gray-900">{cat.name}</h2>
            <p className="mt-1 text-xs text-gray-500">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
