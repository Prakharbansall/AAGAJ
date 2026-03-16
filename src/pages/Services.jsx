import { PAGES } from "../App";

const SERVICES = [
  {
    icon: "💳",
    title: "Payment gateway solutions",
    desc: "Design secure and scalable payment flows across cards, UPI, wallets, and bank transfers.",
    features: [
      "Routing architecture",
      "Gateway integrations",
      "Transaction monitoring",
      "Settlement systems"
    ]
  },
  {
    icon: "🏦",
    title: "Banking software development",
    desc: "Digital banking platforms, core integrations, and operational tooling for financial institutions.",
    features: [
      "Digital banking apps",
      "Core integrations",
      "Onboarding systems",
      "Operational tools"
    ]
  },
  {
    icon: "📊",
    title: "Financial analytics",
    desc: "Data platforms and dashboards that give finance teams reliable operational visibility.",
    features: [
      "Financial dashboards",
      "Data pipelines",
      "Reporting automation",
      "Performance metrics"
    ]
  },
  {
    icon: "🛡️",
    title: "RegTech & compliance",
    desc: "KYC/AML workflows, monitoring systems, and audit-ready regulatory reporting.",
    features: [
      "KYC workflows",
      "AML monitoring",
      "Audit reporting",
      "Compliance dashboards"
    ]
  },
  {
    icon: "⚙️",
    title: "Architecture reviews",
    desc: "Independent system reviews with practical recommendations for reliability and scale.",
    features: [
      "Architecture audit",
      "Performance analysis",
      "Infrastructure planning",
      "Scalability strategy"
    ]
  },
  {
    icon: "🚀",
    title: "Delivery enablement",
    desc: "Helping product and engineering teams deliver fintech systems with clarity and speed.",
    features: [
      "Roadmap alignment",
      "Delivery planning",
      "Release readiness",
      "Operational setup"
    ]
  }
];

function Services({ setPage }) {
  return (
    <section className="py-24 fade-up">

      <div className="max-w-7xl mx-auto px-4">

        {/* HERO */}

        <header className="max-w-3xl mb-16">

          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Fintech engineering services
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            We help fintech startups and financial institutions design,
            build, and operate reliable financial technology systems.
          </p>

        </header>

        {/* SERVICES GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {SERVICES.map((service) => (

            <article
              key={service.title}
              className="group rounded-2xl border border-gold/20 bg-navy-light/40 p-6 hover:border-gold hover:-translate-y-2 transition duration-300 flex flex-col"
            >

              {/* ICON */}

              <div className="text-3xl mb-4">
                {service.icon}
              </div>

              <h2 className="text-xl font-semibold text-cream mb-2">
                {service.title}
              </h2>

              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {service.desc}
              </p>

              {/* FEATURES */}

              <div className="flex flex-wrap gap-2 mb-4">

                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs border border-gold/25 px-2 py-1 rounded-md text-gray-300"
                  >
                    {f}
                  </span>
                ))}

              </div>

              <div className="mt-auto text-xs uppercase tracking-wide text-gold">
                Tailored engagement
              </div>

            </article>

          ))}

        </div>

        {/* PROCESS */}

        <div className="mt-24">

          <h2 className="text-3xl text-cream font-semibold mb-8">
            Our delivery process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                step: "Discovery",
                desc: "We align on product goals, technical constraints, and regulatory considerations."
              },
              {
                step: "Architecture",
                desc: "We design reliable systems with scalable APIs and data models."
              },
              {
                step: "Delivery",
                desc: "We ship features through structured sprint cycles and operational testing."
              }
            ].map((item) => (

              <div
                key={item.step}
                className="glass-panel p-6 rounded-xl hover:border-gold/40 transition"
              >

                <h3 className="text-xl text-cream font-semibold mb-2">
                  {item.step}
                </h3>

                <p className="text-gray-300 text-sm">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* TIMELINE */}

        <div className="mt-24 glass-panel p-8 rounded-2xl border border-gold/20">

          <h2 className="text-xl text-cream font-semibold mb-4">
            Typical engagement timeline
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            <div className="border border-gold/15 p-4 rounded-lg">
              <div className="text-gold font-semibold mb-1">
                Week 1–2
              </div>
              <div className="text-gray-300">
                Product alignment and technical risk mapping.
              </div>
            </div>

            <div className="border border-gold/15 p-4 rounded-lg">
              <div className="text-gold font-semibold mb-1">
                Week 3–6
              </div>
              <div className="text-gray-300">
                Architecture planning and API validation.
              </div>
            </div>

            <div className="border border-gold/15 p-4 rounded-lg">
              <div className="text-gold font-semibold mb-1">
                Week 7+
              </div>
              <div className="text-gray-300">
                Engineering delivery and operational setup.
              </div>
            </div>

          </div>

          <div className="mt-6 text-center">

            <button
              onClick={() => setPage(PAGES.CONTACT)}
              className="btn-gold px-6 py-3"
            >
              Book a discovery call
            </button>

          </div>

        </div>

        {/* FINAL CTA */}

        <div className="mt-24 text-center">

          <h2 className="text-3xl font-bold text-cream mb-3">
            Ready to build reliable fintech systems?
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            We collaborate with product teams to design and deliver
            scalable fintech infrastructure that grows with your business.
          </p>

          <button
            onClick={() => setPage(PAGES.CONTACT)}
            className="btn-gold px-8 py-3"
          >
            Start a conversation
          </button>

        </div>

      </div>

    </section>
  );
}

export default Services;