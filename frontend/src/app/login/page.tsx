import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-lg font-bold text-white">
              O
            </div>
            <h1 className="text-xl font-bold text-secondary-900">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-secondary-500">
              Sign in to your account
            </p>
          </div>

          <form className="space-y-4">
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
                htmlFor="password"
                className="block text-sm font-medium text-secondary-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:text-secondary-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-secondary-300 text-primary-600 outline-none focus:ring-primary-500"
                />
                <span className="text-sm text-secondary-600">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-secondary-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
