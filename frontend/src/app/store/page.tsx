import Link from "next/link";
import { categories, productsByCategory } from "@/lib/products";

export const metadata = {
  title: "Store - OpenBill",
  description: "Browse hosting plans, VPS servers, domains, and SSL certificates.",
};

export default function StorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex gap-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-20 space-y-4">
            <div className="rounded-xl border border-secondary-200 bg-white shadow-sm">
              <div className="border-b border-secondary-200 px-4 py-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary-500">
                  Categories
                </h2>
              </div>
              <nav className="space-y-0.5 p-2">
                {categories.map((category) => (
                  <a
                    key={category.slug}
                    href={`#${category.slug}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-secondary-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
                  >
                    <span>{category.name}</span>
                    <span className="text-xs text-secondary-400">
                      {productsByCategory(category.slug).length}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-xl border border-secondary-200 bg-white p-4 shadow-sm">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary-500">
                Actions
              </h2>
              <Link
                href="/cart"
                className="flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                View Cart
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-secondary-900">Browse Products</h1>
            <p className="mt-1 text-sm text-secondary-500">
              Choose a product category below to get started.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => {
              const catProducts = productsByCategory(category.slug);
              if (catProducts.length === 0) return null;
              return (
                <section key={category.slug} id={category.slug} className="scroll-mt-20">
                  <h2 className="text-lg font-semibold text-secondary-900">{category.name}</h2>
                  <p className="mt-0.5 text-sm text-secondary-500">{category.description}</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {catProducts.map((product) => (
                      <div
                        key={product.name}
                        className={`relative flex flex-col rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
                          product.popular
                            ? "border-primary-300 ring-1 ring-primary-200"
                            : "border-secondary-200"
                        }`}
                      >
                        {product.popular && (
                          <span className="absolute -top-2.5 left-4 rounded-full bg-primary-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                            Popular
                          </span>
                        )}
                        <h3 className="text-sm font-semibold text-secondary-900">{product.name}</h3>
                        <p className="mt-0.5 text-xs text-secondary-500">{product.tagline}</p>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-bold tracking-tight text-secondary-900">
                            ${product.price}
                          </span>
                          <span className="text-xs text-secondary-500">/{product.cycle}</span>
                        </div>
                        <ul className="mt-4 flex-1 space-y-1.5">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-1.5 text-xs text-secondary-600">
                              <svg className="h-3 w-3 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="mt-4 w-full rounded-lg bg-primary-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700">
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
