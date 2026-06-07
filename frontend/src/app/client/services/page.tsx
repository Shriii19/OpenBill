const allServices = [
  {
    name: "Business Hosting",
    status: "Active",
    price: "$24.99/mo",
    billing: "Monthly",
    nextDue: "Jul 15, 2026",
    created: "Jan 15, 2026",
  },
  {
    name: "example.com",
    status: "Active",
    price: "$11.99/yr",
    billing: "Annually",
    nextDue: "Aug 22, 2026",
    created: "Aug 22, 2025",
    type: "domain",
  },
  {
    name: "SSL Certificate - Standard",
    status: "Active",
    price: "$49.99/yr",
    billing: "Annually",
    nextDue: "Jun 30, 2026",
    created: "Jun 30, 2025",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-900">My Services</h1>
      <p className="mt-1 text-sm text-secondary-500">
        Manage your hosting plans, domains, and add-ons.
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-secondary-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-secondary-200 bg-secondary-50 text-left">
              <th className="px-5 py-3 font-medium text-secondary-600">Service</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Status</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Price</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Billing</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Next Due</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Created</th>
              <th className="px-5 py-3 font-medium text-secondary-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-100">
            {allServices.map((service) => (
              <tr key={service.name} className="hover:bg-secondary-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    {service.type === "domain" && (
                      <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    )}
                    <span className="font-medium text-secondary-900">{service.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {service.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-secondary-600">{service.price}</td>
                <td className="px-5 py-4 text-secondary-600">{service.billing}</td>
                <td className="px-5 py-4 text-secondary-600">{service.nextDue}</td>
                <td className="px-5 py-4 text-secondary-600">{service.created}</td>
                <td className="px-5 py-4">
                  <a
                    href="#"
                    className="text-xs font-medium text-primary-600 hover:text-primary-500"
                  >
                    Manage
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
