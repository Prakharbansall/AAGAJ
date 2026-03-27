import { PAGES } from "../App";

const COMPONENTS = [
  {
    icon: "🔄",
    title: "Transaction systems",
    desc: "Core systems responsible for processing financial transactions reliably.",
    features: [
      "Transaction lifecycle",
      "State management",
      "Retry logic",
      "Processing flows"
    ]
  },
  {
    icon: "🛡️",
    title: "Compliance workflows",
    desc: "Structured systems for identity verification, monitoring, and regulatory reporting.",
    features: [
      "KYC processes",
      "AML monitoring",
      "Verification flows",
      "Regulatory reporting"
    ]
  },
  {
    icon: "📊",
    title: "Data & reconciliation",
    desc: "Financial data organisation and reconciliation across multiple system layers.",
    features: [
      "Data pipelines",
      "Reconciliation logic",
      "Ledger systems",
      "Reporting structures"
    ]
  },
  {
    icon: "📈",
    title: "Analytics & reporting",
    desc: "Systems that provide insights into financial operations and system performance.",
    features: [
      "Dashboards",
      "Reporting layers",
      "Metrics tracking",
      "Operational insights"
    ]
  }
];

const SYSTEM_AREAS = [
  {
    icon: "💳",
    title: "Payment infrastructure",
    desc: "Structuring payment routing, retries, and transaction states within a system."
  },
  {
    icon: "🧾",
    title: "Compliance design",
    desc: "Representing compliance workflows as structured system components."
  },
  {
    icon: "📂",
    title: "Financial data systems",
    desc: "Organising financial data flows and reconciliation processes."
  },
  {
    icon: "👁️",
    title: "Operational visibility",
    desc: "Understanding system behaviour through monitoring and observability."
  }
];

const USERS = [
  {
    title: "Early-stage fintech teams",
    desc: "Exploring how to structure financial systems from the beginning."
  },
  {
    title: "Growing platforms",
    desc: "Reorganising or scaling existing financial infrastructure."
  },
  {
    title: "Product & engineering teams",
    desc: "Planning systems before implementation."
  }
];

function FintechSystems({ setPage }) {
  return (
    <section className="py-24 fade-up">
      <div className="max-w-7xl mx-auto px-4">

        {/* HERO */}

        <header className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Fintech Systems
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Understanding the structure of financial technology
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            Financial systems are not single applications. They are combinations
            of multiple components working together-from transaction processing
            and compliance workflows to data reconciliation and reporting layers.
          </p>
        </header>

        {/* COMPONENT CARDS (LIKE SERVICES 🔥) */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

          {COMPONENTS.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-gold/20 bg-navy-light/40 p-6 hover:border-gold hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              <div className="text-3xl mb-4">
                {item.icon}
              </div>

              <h2 className="text-lg font-semibold text-cream mb-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-300 mb-4">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs border border-gold/25 px-2 py-1 rounded-md text-gray-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

        {/* SYSTEM AREAS */}

        <div className="mb-24">
          <h2 className="text-3xl text-cream font-semibold mb-8">
            System areas being explored
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {SYSTEM_AREAS.map((area) => (
              <div
                key={area.title}
                className="glass-panel p-6 rounded-xl hover:border-gold/40 transition"
              >
                <div className="text-2xl mb-3">{area.icon}</div>

                <h3 className="text-cream font-semibold mb-2">
                  {area.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {area.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* USERS */}

        <div className="mb-24">
          <h2 className="text-3xl text-cream font-semibold mb-8">
            Intended users
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {USERS.map((user) => (
              <div
                key={user.title}
                className="glass-panel p-6 rounded-xl"
              >
                <h3 className="text-cream font-semibold mb-2">
                  {user.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {user.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <h2 className="text-3xl font-bold text-cream mb-3">
            Explore structured fintech systems
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Follow the development of this initiative and understand how
            financial systems can be structured more clearly.
          </p>

          <button
            onClick={() => setPage(PAGES.CONTACT)}
            className="btn-gold px-8 py-3"
          >
            Request Early Access
          </button>

        </div>

      </div>
    </section>
  );
}

export default FintechSystems;