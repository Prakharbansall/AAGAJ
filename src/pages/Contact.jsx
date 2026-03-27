import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative py-20 md:py-24 fade-up">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-cream/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}

        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[.2em] text-gold mb-2">
            Contact
          </p>

          <h1 className="text-3xl md:text-4xl text-cream font-bold mb-4">
            Get in touch
          </h1>

          <p className="text-gray-300 leading-relaxed">
            If you would like to learn more about the initiative being developed
            by AAGAJ Fintech Consultancy Pvt Ltd, you can reach out using the
            details below or submit an enquiry.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* FORM */}

          <div className="lg:col-span-2">
            {sent ? (
              <div className="rounded-2xl border border-green-500/40 bg-green-500/10 px-4 py-4 text-sm text-green-300">
                Your request has been submitted. We will respond within one working day.
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="space-y-5 rounded-2xl glass-panel p-6"
              >

                {/* NAME + EMAIL */}

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

                {/* ORG + TYPE */}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      Organisation Name
                    </label>
                    <input
                      placeholder="Company / organisation"
                      className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      Enquiry Type
                    </label>

                    <select className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream">
                      <option>Fintech Systems</option>
                      <option>Platform Access</option>
                      <option>General</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="block text-xs text-gray-300 mb-1">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Share your interest or enquiry related to the platform."
                    className="w-full rounded-md bg-black/30 border border-gold/25 px-3 py-2 text-sm text-cream"
                  />
                </div>

                {/* BUTTON */}

                <button className="btn-gold px-6 py-3 text-sm font-semibold">
                  Request Early Access
                </button>

              </form>
            )}
          </div>

          {/* SIDEBAR */}

          <aside className="space-y-6">

            {/* EMAIL */}

            <div className="glass-panel rounded-2xl p-6 text-sm text-gray-200">
              <h2 className="text-cream font-semibold mb-2">
                Email
              </h2>

              <p className="text-gray-300 mb-3">
                You can reach out directly for any enquiries.
              </p>

              <p>
                <a
                  href="mailto:contact@aagajtech.in"
                  className="hover:text-gold"
                >
                  Contact@aagajtech.in
                </a>
              </p>

              <p className="text-xs text-gray-400 mt-2">
                We respond within one working day.
              </p>
            </div>

            {/* ADDRESS */}

            <div className="glass-panel rounded-2xl p-6 text-sm">
              <h3 className="text-cream font-semibold mb-2">
                Registered Address
              </h3>

              <p className="text-gray-300 leading-relaxed">
                AAGAJ Fintech Consultancy Pvt Ltd <br />
                206 Rajkamal Plaza-A, Satar Society <br />
                Near Income Tax Circle, Navjivan <br />
                Ahmedabad, Gujarat <br />
                India - 380014
              </p>
            </div>

          </aside>
        </div>

        {/* FAQ */}

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              q: "What is this initiative about?",
              a: "It focuses on developing a structured environment for planning and designing fintech systems.",
            },
            {
              q: "Can I request early access?",
              a: "Yes, you can submit a request through the form to stay updated on platform access.",
            },
            {
              q: "Who is this intended for?",
              a: "Fintech teams, product managers, and engineers exploring system design and architecture.",
            },
          ].map((item) => (
            <div key={item.q} className="glass-panel rounded-xl p-6 text-sm">
              <h4 className="text-cream font-semibold mb-2">{item.q}</h4>
              <p className="text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;