import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "9.99",
    description: "Perfect for small websites and personal projects.",
    features: [
      "1 website",
      "10 GB SSD storage",
      "100 GB bandwidth",
      "1 email account",
      "Free SSL certificate",
      "Daily backups",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Business",
    price: "24.99",
    description: "Ideal for growing businesses and e-commerce.",
    features: [
      "10 websites",
      "50 GB SSD storage",
      "Unlimited bandwidth",
      "50 email accounts",
      "Free SSL & CDN",
      "Daily backups + restore",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "59.99",
    description: "For high-traffic sites and mission-critical apps.",
    features: [
      "Unlimited websites",
      "200 GB NVMe storage",
      "Unlimited bandwidth",
      "Unlimited email accounts",
      "Free SSL & CDN",
      "Real-time backups",
      "24/7 priority support",
      "Dedicated IP address",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-secondary-50 py-20 sm:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-primary-600">
            Simple pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Plans that scale with you
          </p>
          <p className="mt-4 text-lg text-secondary-600">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary-300 bg-white shadow-lg ring-1 ring-primary-300"
                  : "border-secondary-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-secondary-500">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-secondary-900">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-secondary-500">/month</span>
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-secondary-600">
                    <svg className="h-4 w-4 flex-shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.highlighted ? "/register" : "/register"}
                className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-secondary-900 text-white hover:bg-secondary-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
