"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-xl border border-secondary-200 bg-white p-6 shadow-sm">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-primary-500 to-primary-700 text-sm font-bold text-white">
              O
            </div>
            <h1 className="text-lg font-bold text-secondary-900">Create your account</h1>
            <p className="mt-0.5 text-sm text-secondary-500">Start hosting in minutes</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm outline-none transition-colors placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm outline-none transition-colors placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm outline-none transition-colors placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm outline-none transition-colors placeholder:text-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                placeholder="Create a password"
              />
            </div>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-secondary-300 text-primary-600 accent-primary-600"
              />
              <span className="text-sm text-secondary-500">
                I agree to the{" "}
                <Link href="#" className="text-primary-600 hover:text-primary-700">
                  Terms of Service
                </Link>
              </span>
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
            >
              Create Account
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-secondary-500">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary-600 hover:text-primary-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
