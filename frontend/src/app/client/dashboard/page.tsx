import Link from "next/link";

const services = [
  { name: "Business Hosting", status: "Active", price: "$24.99/mo", nextDue: "Jul 15, 2026" },
  { name: "example.com", status: "Active", price: "$11.99/yr", nextDue: "Aug 22, 2026" },
  { name: "SSL Certificate", status: "Active", price: "$49.99/yr", nextDue: "Jun 30, 2026" },
];

const recentInvoices = [
  { id: "INV-2026-001", date: "Jun 01, 2026", amount: "$24.99", status: "Paid" },
  { id: "INV-2026-002", date: "May 01, 2026", amount: "$24.99", status: "Paid" },
  { id: "INV-2026-003", date: "Apr 01, 2026", amount: "$36.98", status: "Paid" },
];

const openTickets = [
  { id: "TKT-4521", subject: "Cannot access cPanel", priority: "High", updated: "2 hours ago" },
  { id: "TKT-4518", subject: "SSL renewal question", priority: "Normal", updated: "1 day ago" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-900">Dashboard</h1>
      <p className="mt-1 text-sm text-secondary-500">
        Welcome back, John. Here&apos;s an overview of your account.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-secondary-200 bg-white p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-secondary-500">
            Active Services
          </p>
          <p className="mt-2 text-2xl font-bold text-secondary-900">3</p>
        </div>
        <div className="rounded-xl border border-secondary-200 bg-white p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-secondary-500">
            Due This Month
          </p>
          <p className="mt-2 text-2xl font-bold text-secondary-900">$86.97</p>
        </div>
        <div className="rounded-xl border border-secondary-200 bg-white p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-secondary-500">
            Open Tickets
          </p>
          <p className="mt-2 text-2xl font-bold text-amber-600">2</p>
        </div>
        <div className="rounded-xl border border-secondary-200 bg-white p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-secondary-500">
            Account Credit
          </p>
          <p className="mt-2 text-2xl font-bold text-secondary-900">$0.00</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-secondary-200 bg-white">
          <div className="flex items-center justify-between border-b border-secondary-200 px-5 py-4">
            <h2 className="text-sm font-semibold text-secondary-900">
              Your Services
            </h2>
            <Link
              href="/client/services"
              className="text-xs font-medium text-primary-600 hover:text-primary-500"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="divide-y divide-secondary-100">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between px-5 py-3.5"
              >
                <div>
                  <p className="text-sm font-medium text-secondary-900">
                    {service.name}
                  </p>
                  <p className="text-xs text-secondary-500">
                    Due: {service.nextDue}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {service.status}
                  </span>
                  <p className="mt-0.5 text-xs text-secondary-500">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-secondary-200 bg-white">
          <div className="flex items-center justify-between border-b border-secondary-200 px-5 py-4">
            <h2 className="text-sm font-semibold text-secondary-900">
              Recent Invoices
            </h2>
            <Link
              href="/client/invoices"
              className="text-xs font-medium text-primary-600 hover:text-primary-500"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="divide-y divide-secondary-100">
            {recentInvoices.map((inv) => (
              <div
                key={inv.id}
                className="flex items-center justify-between px-5 py-3.5"
              >
                <div>
                  <p className="text-sm font-medium text-secondary-900">
                    {inv.id}
                  </p>
                  <p className="text-xs text-secondary-500">{inv.date}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      inv.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {inv.status}
                  </span>
                  <p className="mt-0.5 text-xs text-secondary-500">
                    {inv.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-secondary-200 bg-white">
        <div className="flex items-center justify-between border-b border-secondary-200 px-5 py-4">
          <h2 className="text-sm font-semibold text-secondary-900">
            Open Support Tickets
          </h2>
          <Link
            href="/client/tickets"
            className="text-xs font-medium text-primary-600 hover:text-primary-500"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="divide-y divide-secondary-100">
          {openTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between px-5 py-3.5"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-secondary-900">
                  {ticket.subject}
                </span>
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                    ticket.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : "bg-secondary-100 text-secondary-600"
                  }`}
                >
                  {ticket.priority}
                </span>
              </div>
              <div className="text-right text-xs text-secondary-500">
                Updated {ticket.updated}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
