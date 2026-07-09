const invoices = [
  { id: "INV-2026-001", date: "Jun 01, 2026", due: "Jun 15, 2026", amount: "$24.99", status: "Paid", paidDate: "Jun 01, 2026" },
  { id: "INV-2026-002", date: "May 01, 2026", due: "May 15, 2026", amount: "$24.99", status: "Paid", paidDate: "May 01, 2026" },
  { id: "INV-2026-003", date: "Apr 01, 2026", due: "Apr 15, 2026", amount: "$36.98", status: "Paid", paidDate: "Apr 01, 2026" },
  { id: "INV-2026-004", date: "Mar 01, 2026", due: "Mar 15, 2026", amount: "$24.99", status: "Paid", paidDate: "Mar 01, 2026" },
  { id: "INV-2026-005", date: "Feb 01, 2026", due: "Feb 15, 2026", amount: "$24.99", status: "Paid", paidDate: "Feb 01, 2026" },
  { id: "INV-2026-006", date: "Jan 01, 2026", due: "Jan 15, 2026", amount: "$24.99", status: "Cancelled", paidDate: "-" },
];

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-900">Invoices</h1>
      <p className="mt-1 text-sm text-secondary-500">
        View and download your billing history.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-secondary-200 bg-white shadow-sm">
        <table className="w-full min-w-160 text-sm">
          <thead>
            <tr className="border-b border-secondary-200 bg-secondary-50 text-left">
              <th className="px-5 py-3 font-medium text-secondary-600">Invoice</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Date</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Due Date</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Amount</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Status</th>
              <th className="px-5 py-3 font-medium text-secondary-600">Paid On</th>
              <th className="px-5 py-3 font-medium text-secondary-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-100">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-secondary-50">
                <td className="px-5 py-4 font-medium text-secondary-900">
                  {inv.id}
                </td>
                <td className="px-5 py-4 text-secondary-600">{inv.date}</td>
                <td className="px-5 py-4 text-secondary-600">{inv.due}</td>
                <td className="px-5 py-4 text-secondary-900">{inv.amount}</td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      inv.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : inv.status === "Cancelled"
                          ? "bg-secondary-100 text-secondary-500"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-secondary-600">{inv.paidDate}</td>
                <td className="px-5 py-4">
                  <a
                    href="#"
                    className="text-xs font-medium text-primary-600 hover:text-primary-500"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-xl border border-secondary-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-secondary-900">
          Payment Methods
        </h2>
        <p className="mt-1 text-xs text-secondary-500">
          No payment methods on file. Add one to enable automatic billing.
        </p>
        <button className="mt-4 rounded-lg border border-secondary-300 px-4 py-2 text-xs font-medium text-secondary-700 transition-colors hover:bg-secondary-50">
          Add Payment Method
        </button>
      </div>
    </div>
  );
}
