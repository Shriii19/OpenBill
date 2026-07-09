const tickets = [
  { id: "TKT-4521", subject: "Cannot access cPanel", status: "Open", priority: "High", department: "Technical", created: "Jun 06, 2026", updated: "2 hours ago" },
  { id: "TKT-4518", subject: "SSL renewal question", status: "Open", priority: "Normal", department: "Billing", created: "Jun 03, 2026", updated: "1 day ago" },
  { id: "TKT-4502", subject: "Domain transfer inquiry", status: "Closed", priority: "Normal", department: "Sales", created: "May 28, 2026", updated: "May 30, 2026" },
  { id: "TKT-4495", subject: "Server migration request", status: "Closed", priority: "High", department: "Technical", created: "May 20, 2026", updated: "May 22, 2026" },
];

export default function TicketsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-secondary-900">
            Support Tickets
          </h1>
          <p className="mt-1 text-sm text-secondary-500">
            View and manage your support requests.
          </p>
        </div>
        <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700">
          Open New Ticket
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-secondary-200 bg-white shadow-sm">
        <table className="w-full min-w-180 text-sm">
          <thead>
            <tr className="border-b border-secondary-200 bg-secondary-50 text-left">
              <th className="px-5 py-3 font-medium text-secondary-600">Ticket</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Subject</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Status</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Priority</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Department</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Created</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Updated</th>
              <th className="px-5 py-3 font-medium text-secondary-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-100">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-secondary-50">
                <td className="px-5 py-4 font-medium text-secondary-900">
                  {ticket.id}
                </td>
                <td className="px-5 py-4 text-secondary-900">
                  {ticket.subject}
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      ticket.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-secondary-100 text-secondary-500"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      ticket.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : "bg-secondary-100 text-secondary-600"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-5 py-4 text-secondary-600">
                  {ticket.department}
                </td>
                <td className="px-5 py-4 text-secondary-600">
                  {ticket.created}
                </td>
                <td className="px-5 py-4 text-secondary-600">
                  {ticket.updated}
                </td>
                <td className="px-5 py-4">
                  <a
                    href="#"
                    className="text-xs font-medium text-primary-600 hover:text-primary-500"
                  >
                    View
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
