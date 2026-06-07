import Link from "next/link";

const tlds = [
  { tld: ".com", price: "11.99", status: "popular" },
  { tld: ".net", price: "12.99", status: "popular" },
  { tld: ".org", price: "10.99", status: "popular" },
  { tld: ".io", price: "34.99", status: "trending" },
  { tld: ".co", price: "14.99", status: "popular" },
  { tld: ".app", price: "15.99", status: "trending" },
  { tld: ".dev", price: "13.99", status: "trending" },
  { tld: ".ai", price: "59.99", status: "trending" },
  { tld: ".me", price: "19.99", status: "" },
  { tld: ".info", price: "8.99", status: "" },
  { tld: ".biz", price: "9.99", status: "" },
  { tld: ".cloud", price: "24.99", status: "" },
];

export default function DomainsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find your perfect domain
          </h1>
          <p className="mt-4 text-lg text-primary-100">
            Search and register domains for your next project. Free privacy
            protection included.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex gap-2 rounded-xl bg-white p-2 shadow-sm">
              <input
                type="text"
                placeholder="Search for a domain..."
                className="flex-1 rounded-lg border-0 px-4 py-3 text-sm text-secondary-900 outline-none ring-1 ring-secondary-300 transition-all focus:ring-2 focus:ring-primary-500 placeholder:text-secondary-400"
              />
              <button className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500">
                Search
              </button>
            </div>
            <p className="mt-3 text-left text-sm text-primary-200">
              Try: yourbusiness.com, myproject.io, myapp.dev
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-900">
            Domain pricing
          </h2>
          <p className="mt-2 text-secondary-600">
            Competitive pricing on all major TLDs. Free WHOIS privacy with every
            domain.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tlds.map((tld) => (
              <div
                key={tld.tld}
                className="flex items-center justify-between rounded-lg border border-secondary-200 bg-white p-4 transition-all hover:border-primary-200 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-secondary-900">
                    {tld.tld}
                  </span>
                  {tld.status === "popular" && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                      Popular
                    </span>
                  )}
                  {tld.status === "trending" && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                      Trending
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-secondary-900">
                    ${tld.price}
                  </p>
                  <p className="text-xs text-secondary-500">/year</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              Need help choosing a domain? Contact our team &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-secondary-200 bg-white p-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-secondary-900">
                Free Privacy Protection
              </h3>
              <p className="mt-2 text-sm text-secondary-600">
                Keep your personal information private with free WHOIS privacy
                protection on every domain.
              </p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-white p-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-secondary-900">
                Free DNS Management
              </h3>
              <p className="mt-2 text-sm text-secondary-600">
                Full DNS control with easy-to-use management tools. Add records,
                set up forwarding, and more.
              </p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-white p-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-secondary-900">
                Easy Transfers
              </h3>
              <p className="mt-2 text-sm text-secondary-600">
                Transfer your domains from any registrar with our simple
                step-by-step process. Free transfer with 1-year renewal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
