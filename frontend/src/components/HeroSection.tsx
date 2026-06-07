import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYtMkgyNHYyaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-1.5 text-sm font-medium text-primary-200">
            Trusted by 10,000+ businesses worldwide
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Powerful billing & hosting
            <span className="mt-2 block text-primary-300">
              made simple.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-secondary-300">
            From shared hosting to dedicated servers, manage your entire web
            infrastructure with one platform. Automated provisioning, reliable
            infrastructure, and 24/7 support.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-500 hover:shadow-md"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-secondary-500 px-6 py-3 text-sm font-semibold text-secondary-200 transition-colors hover:bg-secondary-800"
            >
              View Plans
            </Link>
          </div>
          <p className="mt-4 text-sm text-secondary-400">
            No credit card required &bull; 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
