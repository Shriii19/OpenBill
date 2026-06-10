export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-1 text-sm text-gray-500">Get in touch with our team.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-gray-900">Email</h2>
          <p className="mt-1 text-sm text-gray-600">
            <a href="mailto:support@openbill.com" className="text-primary-600 hover:text-primary-700">support@openbill.com</a>
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-gray-900">Client Portal</h2>
          <p className="mt-1 text-sm text-gray-600">
            <a href="/client/dashboard" className="text-primary-600 hover:text-primary-700">Open a Ticket</a>
          </p>
        </div>
      </div>
    </div>
  );
}
