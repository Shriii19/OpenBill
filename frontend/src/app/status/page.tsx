export const metadata = {
  title: "Network Status - OpenBill",
  description: "Live status of OpenBill hosting, VPS, and dedicated server infrastructure.",
};

const services = [
  { name: "Shared Hosting", detail: "All servers operational" },
  { name: "VPS Servers", detail: "All nodes operational" },
  { name: "Dedicated Servers", detail: "All servers operational" },
  { name: "DNS & Domains", detail: "Resolvers responding normally" },
  { name: "Client Portal & Billing", detail: "All systems operational" },
];

export default function StatusPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-secondary-900">Network Status</h1>
      <p className="mt-1 text-sm text-secondary-500">Current status of our services.</p>

      <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>
        <div>
          <p className="text-sm font-semibold text-green-800">All systems operational</p>
          <p className="text-xs text-green-700">No incidents reported in the last 30 days.</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-xl border border-secondary-200 bg-white p-4 shadow-sm"
          >
            <div>
              <p className="text-sm font-medium text-secondary-900">{service.name}</p>
              <p className="text-xs text-secondary-500">{service.detail}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Operational
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
