import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-lg font-bold text-white">
              O
            </div>
            <h1 className="text-xl font-bold text-secondary-900">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-secondary-500">
              Start your 30-day free trial
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-secondary-700"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:text-secondary-400"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:text-secondary-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:text-secondary-400"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-secondary-700"
              >
                Company name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Inc."
                className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:text-secondary-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-secondary-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a strong password"
                className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:text-secondary-400"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-secondary-700"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:text-secondary-400"
              />
            </div>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-secondary-300 text-primary-600 outline-none focus:ring-primary-500"
              />
              <span className="text-sm text-secondary-500">
                I agree to the{" "}
                <Link
                  href="#"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-secondary-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
