const announcements = [
  {
    title: "New AMD EPYC VPS Plans Available",
    date: "June 8, 2026",
    excerpt: "We are excited to announce our new line of AMD EPYC-powered VPS plans available in our India data center.",
  },
  {
    title: "Scheduled Maintenance - June 15",
    date: "June 5, 2026",
    excerpt: "We will be performing scheduled maintenance on our core network infrastructure on June 15th from 2:00 AM to 4:00 AM EST.",
  },
  {
    title: "Introducing Free SSL with All Plans",
    date: "May 20, 2026",
    excerpt: "All shared hosting plans now include a free Let's Encrypt SSL certificate with auto-renewal.",
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-gray-900">Announcements</h1>
      <p className="mt-1 text-sm text-gray-500">Latest news and updates from OpenBill.</p>

      <div className="mt-6 space-y-4">
        {announcements.map((a) => (
          <div key={a.title} className="rounded-lg border border-gray-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-gray-900">{a.title}</h2>
            <p className="mt-0.5 text-xs text-gray-400">{a.date}</p>
            <p className="mt-2 text-sm text-gray-600">{a.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
