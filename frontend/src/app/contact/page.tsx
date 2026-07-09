import Link from "next/link";

export const metadata = {
  title: "Contact Us - OpenBill",
  description: "Get in touch with the OpenBill team.",
};

const channels = [
  {
    title: "Email Support",
    description: "For general questions and account help.",
    action: { label: "support@openbill.com", href: "mailto:support@openbill.com" },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Support Tickets",
    description: "Fastest way to reach our engineers — log in and open a ticket.",
    action: { label: "Open a Ticket", href: "/client/tickets" },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
  },
  {
    title: "Sales Inquiries",
    description: "Custom plans, volume pricing, and partnership questions.",
    action: { label: "sales@openbill.com", href: "mailto:sales@openbill.com" },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Network Status",
    description: "Check live status of hosting, VPS, and dedicated servers.",
    action: { label: "View Status Page", href: "/status" },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5h4.5l2.25-6 3 12 2.25-6h4.5" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-secondary-900">Contact Us</h1>
      <p className="mt-1 text-sm text-secondary-500">Get in touch with our team.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className="rounded-xl border border-secondary-200 bg-white p-5 shadow-sm transition-colors hover:border-primary-200"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
              {channel.icon}
            </div>
            <h2 className="mt-3 text-sm font-semibold text-secondary-900">{channel.title}</h2>
            <p className="mt-1 text-xs leading-relaxed text-secondary-500">{channel.description}</p>
            <p className="mt-3 text-sm">
              {channel.action.href.startsWith("mailto:") ? (
                <a
                  href={channel.action.href}
                  className="font-medium text-primary-600 hover:text-primary-700"
                >
                  {channel.action.label}
                </a>
              ) : (
                <Link
                  href={channel.action.href}
                  className="font-medium text-primary-600 hover:text-primary-700"
                >
                  {channel.action.label} &rarr;
                </Link>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
