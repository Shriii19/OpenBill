export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-secondary-50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-secondary-600">
              Have a question or need help? We&apos;re here for you.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2">
            <div>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-secondary-700"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="mt-1 block w-full rounded-lg border border-secondary-300 bg-white px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  >
                    <option>Sales inquiry</option>
                    <option>Technical support</option>
                    <option>Billing question</option>
                    <option>Partnership opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-1 block w-full rounded-lg border border-secondary-300 px-3 py-2.5 text-sm text-secondary-900 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-base font-semibold text-secondary-900">
                  Our office
                </h3>
                <p className="mt-2 text-sm text-secondary-600">
                  123 Tech Street, Suite 400
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-secondary-900">
                  Contact info
                </h3>
                <div className="mt-2 space-y-2 text-sm text-secondary-600">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:hello@openbill.com"
                      className="text-primary-600 hover:text-primary-500"
                    >
                      hello@openbill.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+15551234567"
                      className="text-primary-600 hover:text-primary-500"
                    >
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p>Support: 24/7 via client portal</p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-secondary-900">
                  Business hours
                </h3>
                <div className="mt-2 space-y-1 text-sm text-secondary-600">
                  <p>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM &ndash; 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
