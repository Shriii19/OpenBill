export const metadata = {
  title: "Privacy Policy - OpenBill",
  description: "Privacy Policy for OpenBill services.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-secondary-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-secondary-500">
        This policy explains how OpenBill collects and uses personal data.
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-secondary-600">
        <section>
          <h2 className="text-base font-semibold text-secondary-900">1. Information We Collect</h2>
          <p className="mt-1">
            We collect account, billing, and service usage information required to provide hosting services.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-secondary-900">2. How We Use Data</h2>
          <p className="mt-1">
            Data is used for provisioning, billing, support, fraud prevention, and service improvement.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-secondary-900">3. Data Protection</h2>
          <p className="mt-1">
            We use appropriate technical and organizational controls to protect stored information.
          </p>
        </section>
      </div>
    </div>
  );
}
