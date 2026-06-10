const categories = [
  { name: "Web Hosting", slug: "web-hosting", count: 4 },
  { name: "VPS Servers", slug: "vps-servers", count: 5 },
  { name: "Dedicated Servers", slug: "dedicated-servers", count: 2 },
  { name: "Domains", slug: "domains", count: 12 },
  { name: "SSL Certificates", slug: "ssl", count: 3 },
];

const products = [
  {
    name: "Starter Hosting",
    tagline: "Perfect for personal websites",
    price: 9.99,
    cycle: "monthly",
    category: "web-hosting",
    features: ["1 website", "10 GB SSD", "100 GB bandwidth", "1 email", "Free SSL"],
  },
  {
    name: "Business Hosting",
    tagline: "Ideal for growing businesses",
    price: 24.99,
    cycle: "monthly",
    category: "web-hosting",
    popular: true,
    features: ["10 websites", "50 GB SSD", "Unlimited bandwidth", "50 emails", "Free SSL + CDN"],
  },
  {
    name: "Enterprise Hosting",
    tagline: "For high-traffic sites",
    price: 59.99,
    cycle: "monthly",
    category: "web-hosting",
    features: ["Unlimited websites", "200 GB NVMe", "Unlimited bandwidth", "Unlimited emails", "Dedicated IP"],
  },
  {
    name: "Shared Hosting Lite",
    tagline: "Budget-friendly starter",
    price: 4.99,
    cycle: "monthly",
    category: "web-hosting",
    features: ["1 website", "5 GB SSD", "50 GB bandwidth"],
  },
  {
    name: "Ryzen 7 VPS",
    tagline: "AMD Ryzen 7 4 vCPU",
    price: 19.99,
    cycle: "monthly",
    category: "vps-servers",
    features: ["4 vCPU", "8 GB RAM", "100 GB NVMe", "4 TB transfer", "1 IP"],
  },
  {
    name: "Intel Gold VPS",
    tagline: "Intel Xeon Gold 6 vCPU",
    price: 29.99,
    cycle: "monthly",
    category: "vps-servers",
    features: ["6 vCPU", "16 GB RAM", "200 GB NVMe", "8 TB transfer", "2 IPs"],
  },
  {
    name: "EPYC VPS",
    tagline: "AMD EPYC 8 vCPU",
    price: 49.99,
    cycle: "monthly",
    category: "vps-servers",
    features: ["8 vCPU", "32 GB RAM", "400 GB NVMe", "Unmetered", "2 IPs"],
  },
  {
    name: "Dedicated Server E",
    tagline: "Intel Xeon E-2388G",
    price: 99.99,
    cycle: "monthly",
    category: "dedicated-servers",
    features: ["8 cores / 16 threads", "64 GB ECC RAM", "2x1 TB NVMe RAID", "Unmetered", "/29 IP block"],
  },
  {
    name: "Dedicated Server AMD",
    tagline: "AMD EPYC 7313P",
    price: 179.99,
    cycle: "monthly",
    category: "dedicated-servers",
    features: ["16 cores / 32 threads", "128 GB ECC RAM", "2x2 TB NVMe RAID", "Unmetered", "/29 IP block"],
  },
];

export default function StorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex gap-8">
        <aside className="hidden w-56 flex-shrink-0 lg:block">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-4 py-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Categories</h2>
            </div>
            <nav className="p-2 space-y-0.5">
              {categories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="flex items-center justify-between rounded px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-gray-400">({cat.count})</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Actions</h2>
            <a
              href="/cart"
              className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              View Cart
            </a>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900">Browse Products</h1>
            <p className="mt-1 text-sm text-gray-500">Choose a product category below to get started.</p>
          </div>

          <div className="space-y-8">
            {categories.map((category) => {
              const catProducts = products.filter((p) => p.category === category.slug);
              if (catProducts.length === 0) return null;
              return (
                <section key={category.slug} id={category.slug}>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h2>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {catProducts.map((product) => (
                      <div
                        key={product.name}
                        className={`relative rounded-lg border bg-white p-5 ${
                          product.popular ? "border-primary-300 ring-1 ring-primary-300" : "border-gray-200"
                        }`}
                      >
                        {product.popular && (
                          <span className="absolute -top-2.5 left-4 rounded-full bg-primary-600 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                            Popular
                          </span>
                        )}
                        <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
                        <p className="mt-0.5 text-xs text-gray-500">{product.tagline}</p>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-xl font-bold text-gray-900">${product.price}</span>
                          <span className="text-xs text-gray-500">/{product.cycle}</span>
                        </div>
                        <ul className="mt-4 space-y-1.5">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                              <svg className="h-3 w-3 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <button className="mt-4 w-full rounded bg-primary-600 px-3 py-2 text-xs font-semibold text-white hover:bg-primary-700 transition-colors">
                          Order Now
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
