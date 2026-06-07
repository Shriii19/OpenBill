import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-600 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to simplify your billing?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Join thousands of businesses that trust OpenBill to manage their web
          hosting and billing operations.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/register"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition-all hover:bg-primary-50 hover:shadow-md"
          >
            Get Started Free
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
