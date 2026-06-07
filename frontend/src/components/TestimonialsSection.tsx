const testimonials = [
  {
    content:
      "We switched to OpenBill six months ago and it transformed our hosting business. The automated billing alone saved us 20 hours a week.",
    author: "Sarah Chen",
    role: "CEO, TechHost Solutions",
  },
  {
    content:
      "The domain management and client portal are outstanding. Our support tickets dropped by 40% since customers can now manage everything themselves.",
    author: "Marcus Rodriguez",
    role: "CTO, WebFlow Media",
  },
  {
    content:
      "Best decision we made for our infrastructure. The provisioning is instant, and the reporting gives us insights we never had before.",
    author: "Emily Thompson",
    role: "Operations Lead, CloudScale Inc",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-primary-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Trusted by industry leaders
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="relative rounded-xl border border-secondary-200 bg-white p-6"
            >
              <svg className="mb-4 h-6 w-6 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.403-.635-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.403-.635-2.917-1.179z" />
              </svg>
              <p className="text-sm leading-6 text-secondary-600">
                {item.content}
              </p>
              <div className="mt-6 border-t border-secondary-100 pt-4">
                <p className="text-sm font-semibold text-secondary-900">
                  {item.author}
                </p>
                <p className="text-xs text-secondary-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
