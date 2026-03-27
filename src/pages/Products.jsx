import { PAGES } from "../App";

const INITIATIVES = [
  {
    name: "Fintech Planning Systems",
    desc: "Developing digital environments where financial systems can be planned and structured with clarity.",
    badge: "In Development",
    features: [
      "System planning tools",
      "Workflow definition",
      "Design structuring",
      "Use-case mapping"
    ]
  },
  {
    name: "Workflow Mapping Tools",
    desc: "Structured tools for defining financial processes such as payments, settlements, and reporting.",
    badge: "In Progress",
    features: [
      "Payment flows",
      "Settlement logic",
      "Process mapping",
      "Operational workflows"
    ]
  },
  {
    name: "Architecture Frameworks",
    desc: "Frameworks to explore fintech system architectures across different product scenarios.",
    badge: "Exploration",
    features: [
      "System design layers",
      "Architecture models",
      "Scalability planning",
      "Integration patterns"
    ]
  }
];

import { PAGES as NAV_PAGES } from "../App";

function Products({ setPage }) {
  return (
    <section className="py-20 md:py-24 fade-up">

      <div className="max-w-7xl mx-auto px-4">

        {/* HERO */}

        <header className="max-w-3xl mb-12">

          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Company
          </p>

          <h1 className="text-3xl md:text-4xl text-cream font-bold mb-3">
            A starting point
          </h1>

          <p className="text-gray-300 leading-relaxed">
            As financial technology systems continue to evolve, the need for
            structured approaches to design and planning becomes increasingly
            important.
          </p>

          <p className="text-gray-400 mt-4">
            AAGAJ Fintech Consultancy Pvt Ltd is exploring how fintech system
            design can move towards more organised, transparent, and adaptable
            frameworks.
          </p>

        </header>

        {/* COMPANY DETAILS */}

        <div className="grid md:grid-cols-3 gap-7 mb-16">

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-cream font-semibold mb-2">
              Full Legal Name
            </h3>
            <p className="text-gray-300 text-sm">
              AAGAJ Fintech Consultancy Pvt Ltd
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-cream font-semibold mb-2">
              Registered Address
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              206 Rajkamal Plaza-A, Satar Society <br />
              Near Income Tax Circle, Navjivan <br />
              Ahmedabad, Gujarat <br />
              India - 380014
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-cream font-semibold mb-2">
              Official Email
            </h3>
            <p className="text-gray-300 text-sm">
              Contact@aagajtech.in
            </p>
          </div>

        </div>

        {/* INITIATIVES (LIKE PRODUCTS GRID 🔥) */}

        <div className="grid md:grid-cols-3 gap-7">

          {INITIATIVES.map((item) => (

            <article
              key={item.name}
              className="rounded-2xl border border-gold/15 bg-navy-light/40 p-6 hover:border-gold/40 hover:bg-navy-light/60 transition flex flex-col"
            >

              <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-wide text-gold mb-3 w-fit">
                {item.badge}
              </span>

              <h2 className="text-lg font-semibold text-cream mb-2">
                {item.name}
              </h2>

              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {item.desc}
              </p>

              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside mb-4">
                {item.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="mt-auto text-xs text-gray-400">
                Evolving as the platform develops.
              </div>

            </article>

          ))}

        </div>

        {/* TECHNOLOGY + DIRECTION */}

        <div className="mt-16 glass-panel p-6 rounded-2xl border border-gold/20">

          <h2 className="text-lg text-cream font-semibold mb-3">
            What the company is working on
          </h2>

          <p className="text-gray-300 mb-4">
            The company is currently developing a structured initiative focused
            on fintech system design, planning, and architecture exploration.
          </p>

          <ul className="text-gray-300 list-disc list-inside space-y-2 text-sm">
            <li>Digital systems for fintech planning and design</li>
            <li>Structured financial workflow mapping tools</li>
            <li>System architecture exploration frameworks</li>
            <li>Compliance-aware design approaches</li>
          </ul>

          <p className="text-gray-400 mt-4 text-sm">
            These components are under development and are expected to evolve as
            the platform progresses.
          </p>

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h2 className="text-2xl md:text-3xl text-cream font-bold mb-3">
            Follow the development journey
          </h2>

          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Request early access to stay updated on platform development and
            explore structured approaches to fintech system design.
          </p>

          <button
            className="btn-gold px-8 py-3"
            onClick={() => setPage(NAV_PAGES.CONTACT)}
          >
            Request Early Access
          </button>

        </div>

      </div>

    </section>
  );
}

export default Products;