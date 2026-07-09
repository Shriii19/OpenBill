import Link from "next/link";
import { popularProducts } from "@/lib/products";

const features = [
  {
    title: "Instant Setup",
    description: "Services are provisioned automatically the moment your payment clears — no waiting around.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "99.9% Uptime",
    description: "Redundant infrastructure across multiple data centers keeps your sites online, backed by our SLA.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Real engineers on the other side of every ticket, around the clock — average first response under 15 minutes.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Free Migrations",
    description: "Moving from another host? Our team migrates your sites, mailboxes, and DNS at no charge.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "NVMe Storage",
    description: "Every plan runs on enterprise NVMe drives for database queries and page loads that feel instant.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Daily Backups",
    description: "Automatic off-site backups with one-click restore, retained for 30 days on all plans.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "12k+", label: "Active services" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "15 min", label: "Avg. response time" },
  { value: "5", label: "Global data centers" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-950">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% -20%, rgba(99,102,241,0.35), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-400/30 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-300">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              New AMD EPYC VPS plans now available
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Hosting and billing,
              <span className="bg-linear-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent"> one platform</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-secondary-300 sm:text-lg">
              Fast, reliable web hosting, VPS, and dedicated servers with transparent
              billing and support that actually answers. Launch in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/store"
                className="w-full rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-500 sm:w-auto"
              >
                Browse Products
              </Link>
              <Link
                href="/register"
                className="w-full rounded-lg border border-secondary-700 bg-secondary-900/60 px-6 py-3 text-sm font-semibold text-secondary-200 transition-colors hover:border-secondary-500 hover:text-white sm:w-auto"
              >
                Create Account
              </Link>
            </div>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-secondary-800 bg-secondary-800 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-secondary-900/80 px-4 py-5 text-center">
                <dd className="text-2xl font-bold text-white">{stat.value}</dd>
                <dt className="mt-1 text-xs text-secondary-400">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Popular plans */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-secondary-900 sm:text-3xl">
            Most popular plans
          </h2>
          <p className="mt-3 text-sm text-secondary-500">
            Customer favorites across hosting, VPS, and SSL — all with instant setup.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts().map((product) => (
            <div
              key={product.name}
              className="relative flex flex-col rounded-xl border border-primary-200 bg-white p-6 shadow-sm ring-1 ring-primary-100 transition-shadow hover:shadow-md"
            >
              <span className="absolute -top-2.5 left-5 rounded-full bg-primary-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                Popular
              </span>
              <h3 className="text-sm font-semibold text-secondary-900">{product.name}</h3>
              <p className="mt-0.5 text-xs text-secondary-500">{product.tagline}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-secondary-900">
                  ${product.price}
                </span>
                <span className="text-xs text-secondary-500">/{product.cycle}</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-secondary-600">
                    <svg className="h-3.5 w-3.5 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/store"
                className="mt-6 block rounded-lg bg-primary-600 px-4 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Order Now
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link href="/store" className="text-sm font-medium text-primary-600 hover:text-primary-700">
            View all products &rarr;
          </Link>
        </p>
      </section>

      {/* Features */}
      <section className="border-t border-secondary-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-900 sm:text-3xl">
              Everything you need to stay online
            </h2>
            <p className="mt-3 text-sm text-secondary-500">
              From your first shared site to a rack of dedicated servers, the platform grows with you.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-secondary-200 bg-secondary-50/50 p-5 transition-colors hover:border-primary-200 hover:bg-primary-50/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-secondary-900">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-secondary-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-secondary-950 px-6 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 100% at 50% 100%, rgba(99,102,241,0.3), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to launch?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-secondary-300">
              Create an account in under a minute and have your first service online today.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className="w-full rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500 sm:w-auto"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-lg border border-secondary-700 px-6 py-3 text-sm font-semibold text-secondary-200 transition-colors hover:border-secondary-500 hover:text-white sm:w-auto"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
