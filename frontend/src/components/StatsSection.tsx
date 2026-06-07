const stats = [
  { label: "Active Customers", value: "10,000+" },
  { label: "Servers Deployed", value: "25,000+" },
  { label: "Domains Managed", value: "50,000+" },
  { label: "Uptime SLA", value: "99.99%" },
];

export default function StatsSection() {
  return (
    <section className="bg-primary-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-primary-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
