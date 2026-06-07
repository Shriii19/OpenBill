import Link from "next/link";
import CTASection from "@/components/CTASection";

const plans = [
  {
    name: "Shared Hosting",
    description: "Perfect for personal websites and small blogs.",
    monthly: "9.99",
    quarterly: "8.99",
    yearly: "6.99",
    features: [
      "1 website",
      "10 GB SSD storage",
      "100 GB bandwidth",
      "1 email account",
      "Free SSL certificate",
      "Daily backups",
      "cPanel control panel",
    ],
  },
  {
    name: "Business Hosting",
    description: "Ideal for growing businesses and e-commerce stores.",
    monthly: "24.99",
    quarterly: "22.99",
    yearly: "18.99",
    popular: true,
    features: [
      "10 websites",
      "50 GB SSD storage",
      "Unlimited bandwidth",
      "50 email accounts",
      "Free SSL & CDN",
      "Daily backups + restore",
      "cPanel + Softaculous",
      "Priority support",
    ],
  },
  {
    name: "VPS Hosting",
    description: "For developers and high-traffic applications.",
    monthly: "49.99",
    quarterly: "45.99",
    yearly: "39.99",
    features: [
      "4 vCPU cores",
      "8 GB RAM",
      "100 GB NVMe",
      "4 TB transfer",
      "1 dedicated IP",
      "Full root access",
      "Choice of OS",
      "24/7 priority support",
    ],
  },
  {
    name: "Dedicated Server",
    description: "Enterprise-grade performance for mission-critical workloads.",
    monthly: "149.99",
    quarterly: "139.99",
    yearly: "119.99",
    features: [
      "Intel Xeon / AMD EPYC",
      "32 GB ECC RAM",
      "2 x 1 TB NVMe RAID",
      "Unmetered transfer",
      "/29 IP block (5 IPs)",
      "IPMI access",
      "DDoS protection",
      "Custom hardware available",
    ],
  },
];

export default function PricingPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-secondary-50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Transparent pricing
            </h1>
            <p className="mt-4 text-lg text-secondary-600">
              Choose the plan that fits your needs. All plans include a 30-day
              money-back guarantee.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
                  plan.popular
                    ? "border-primary-300 ring-1 ring-primary-300"
                    : "border-secondary-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-secondary-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-secondary-500">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-secondary-900">
                    ${plan.monthly}
                  </span>
                  <span className="text-sm text-secondary-500">/month</span>
                </div>
                <p className="mt-1 text-xs text-secondary-400">
                  ${plan.yearly}/mo when billed annually
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-secondary-600"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "border border-secondary-300 text-secondary-700 hover:bg-secondary-50"
                  }`}
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-900">
            Need a custom solution?
          </h2>
          <p className="mt-2 text-secondary-600">
            We offer custom configurations for enterprises with specific
            requirements. Get in touch with our sales team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-secondary-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-800"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
