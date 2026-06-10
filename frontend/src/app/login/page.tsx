"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded bg-primary-600 text-sm font-bold text-white">
              O
            </div>
            <h1 className="text-base font-bold text-gray-900">Sign In</h1>
            <p className="mt-0.5 text-sm text-gray-500">Sign in to your account</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary-600" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-primary-600 hover:text-primary-700">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full rounded bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors">
              Sign In
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Don&apos;t have an account? <Link href="/register" className="font-medium text-primary-600 hover:text-primary-700">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
