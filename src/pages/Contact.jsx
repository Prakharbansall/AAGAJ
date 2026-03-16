import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative py-20 md:py-24 fade-up">

      {/* BACKGROUND BLUR */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-72 w-72 rounded-full bg-gold/15 blur-3xl"/>
        <div className="absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-cream/5 blur-3xl"/>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}

        <div className="max-w-2xl mb-12">

          <p className="text-xs uppercase tracking-[.2em] text-gold mb-2">
            Contact
          </p>

          <h1 className="text-3xl md:text-4xl text-cream font-bold mb-4">
            Let’s start a conversation
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Whether you are launching a fintech platform, improving payment
            infrastructure, or exploring embedded finance — we would love
            to hear about your project.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* FORM */}

          <div className="lg:col-span-2">

            {sent ? (

              <div className="rounded-2xl border border-green-500/40 bg-green-500/10 px-4 py-4 text-sm text-green-300">
                Message sent successfully. Our team will respond shortly.
              </div>

            ) : (

              <form
                onSubmit={submit}
                className="space-y-5 rounded-2xl glass-panel p-6"
              >

                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      required
                      placeholder="Your name"
                      className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      placeholder="Company name"
                      className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      Service
                    </label>

                    <select className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream">

                      <option>Payment Infrastructure</option>
                      <option>Fintech Platform Development</option>
                      <option>Compliance & RegTech</option>
                      <option>Embedded Finance</option>
                      <option>Technical Consulting</option>

                    </select>

                  </div>

                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us briefly about your project or challenge."
                    className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream"
                  />
                </div>

                <button className="btn-gold px-6 py-3 text-sm font-semibold">
                  Send message
                </button>

              </form>

            )}

          </div>

          {/* SIDEBAR */}

          <aside className="space-y-6">

            {/* CONTACT CARD */}

            <div className="glass-panel rounded-2xl p-6 text-sm text-gray-200">

              <h2 className="text-cream font-semibold mb-2">
                Direct contact
              </h2>

              <p className="text-gray-300 mb-3">
                Prefer email or phone? Reach out directly.
              </p>

              <div className="space-y-2">

                <p>
                  <span className="text-muted">Email:</span>{" "}
                  <span className="text-cream">info@aagajfintech.com</span>
                </p>

                <p>
                  <span className="text-muted">Phone:</span>{" "}
                  <span className="text-cream">+91 79 XXXX XXXX</span>
                </p>

                <p className="text-xs text-gray-400">
                  Response time: usually within one business day.
                </p>

              </div>

            </div>

            {/* OFFICE */}

            <div className="glass-panel rounded-2xl p-6 text-sm">

              <h3 className="text-cream font-semibold mb-2">
                Office
              </h3>

              <p className="text-gray-300">
                206 Rajkamal Plaza-A  
                Navjivan, Ahmedabad  
                Gujarat, India
              </p>

            </div>

          

          </aside>

        </div>

        {/* FAQ */}

        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {[
            {
              q: "Do you work with startups?",
              a: "Yes. We frequently collaborate with early-stage fintech teams launching new products."
            },
            {
              q: "Do you support existing systems?",
              a: "We help teams improve and refactor payment systems, lending infrastructure, and fintech platforms."
            },
            {
              q: "Do you offer architecture consulting?",
              a: "Yes. Many clients engage us first for architecture reviews and system planning."
            }
          ].map((item) => (

            <div
              key={item.q}
              className="glass-panel rounded-xl p-6 text-sm"
            >

              <h4 className="text-cream font-semibold mb-2">
                {item.q}
              </h4>

              <p className="text-gray-300">
                {item.a}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;