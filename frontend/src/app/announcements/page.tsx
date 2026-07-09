export const metadata = {
  title: "Announcements - OpenBill",
  description: "Latest news and updates from OpenBill.",
};

const announcements = [
  {
    title: "New AMD EPYC VPS Plans Available",
    date: "June 8, 2026",
    tag: "Product",
    excerpt:
      "We are excited to announce our new line of AMD EPYC-powered VPS plans available in our India data center.",
  },
  {
    title: "Scheduled Maintenance - June 15",
    date: "June 5, 2026",
    tag: "Maintenance",
    excerpt:
      "We will be performing scheduled maintenance on our core network infrastructure on June 15th from 2:00 AM to 4:00 AM EST.",
  },
  {
    title: "Introducing Free SSL with All Plans",
    date: "May 20, 2026",
    tag: "Product",
    excerpt:
      "All shared hosting plans now include a free Let's Encrypt SSL certificate with auto-renewal.",
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-secondary-900">Announcements</h1>
      <p className="mt-1 text-sm text-secondary-500">Latest news and updates from OpenBill.</p>

      <div className="mt-8 space-y-4">
        {announcements.map((announcement) => (
          <article
            key={announcement.title}
            className="rounded-xl border border-secondary-200 bg-white p-5 shadow-sm transition-colors hover:border-primary-200"
          >
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                  announcement.tag === "Maintenance"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-primary-100 text-primary-700"
                }`}
              >
                {announcement.tag}
              </span>
              <time className="text-xs text-secondary-400">{announcement.date}</time>
            </div>
            <h2 className="mt-2.5 text-sm font-semibold text-secondary-900">
              {announcement.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-secondary-600">
              {announcement.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
