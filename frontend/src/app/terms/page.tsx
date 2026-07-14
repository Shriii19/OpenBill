export const metadata = {
  title: "Terms of Service - OpenBill",
  description: "Terms of Service for using OpenBill hosting and billing services.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-secondary-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-secondary-500">
        These terms govern your use of OpenBill services.
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-secondary-600">
        <section>
          <h2 className="text-base font-semibold text-secondary-900">1. Service Usage</h2>
          <p className="mt-1">
            You agree to use services lawfully and in line with our acceptable use policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-secondary-900">2. Billing and Renewals</h2>
          <p className="mt-1">
            Services are billed in advance and renew automatically unless canceled before renewal.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-secondary-900">3. Account Security</h2>
          <p className="mt-1">
            You are responsible for safeguarding credentials and activity under your account.
          </p>
        </section>
      </div>
    </div>
  );
}
