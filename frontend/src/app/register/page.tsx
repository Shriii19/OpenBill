"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded bg-primary-600 text-sm font-bold text-white">
              O
            </div>
            <h1 className="text-base font-bold text-gray-900">Register</h1>
            <p className="mt-0.5 text-sm text-gray-500">Create a new account</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                <input id="firstName" type="text" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                <input id="lastName" type="text" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" type="password" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="Create a password" />
            </div>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-600" />
              <span className="text-sm text-gray-500">I agree to the <Link href="#" className="text-primary-600 hover:text-primary-700">Terms of Service</Link></span>
            </label>
            <button type="submit" className="w-full rounded bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors">
              Create Account
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:text-primary-700">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
