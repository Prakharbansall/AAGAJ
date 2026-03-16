const PRODUCTS = [
  {
    name: "AAGAJ Pay Orchestration",
    desc: "A reference architecture for routing payments across multiple providers with observability and failover.",
    badge: "Reference Design",
    features: [
      "Multi-provider routing",
      "Transaction monitoring",
      "Failover & retry logic",
      "Payment analytics"
    ]
  },
  {
    name: "Risk & Compliance Toolkit",
    desc: "Templates for KYC/AML flows, rule engines, and evidence capture tailored to Indian fintech needs.",
    badge: "Toolkit",
    features: [
      "KYC workflows",
      "AML rule engine",
      "Audit evidence storage",
      "Compliance dashboards"
    ]
  },
  {
    name: "FinOps Reporting Pack",
    desc: "Pre-defined metrics, dashboards, and data models to help finance teams reconcile and report faster.",
    badge: "Playbook",
    features: [
      "Settlement reports",
      "Financial dashboards",
      "Data reconciliation",
      "Operational metrics"
    ]
  }
];

import { PAGES } from "../App";

function Products({ setPage }) {
  return (
    <section className="py-20 md:py-24 fade-up">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}

        <header className="max-w-3xl mb-12">

          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Products
          </p>

          <h1 className="text-3xl md:text-4xl text-cream font-bold mb-3">
            Products & Accelerators
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Practical reference designs and toolkits that reduce engineering
            effort when building fintech infrastructure.
          </p>

        </header>

        {/* PRODUCT GRID */}

        <div className="grid md:grid-cols-3 gap-7">

          {PRODUCTS.map((p) => (

            <article
              key={p.name}
              className="rounded-2xl border border-gold/15 bg-navy-light/40 p-6 hover:border-gold/40 hover:bg-navy-light/60 transition flex flex-col"
            >

              <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-wide text-gold mb-3 w-fit">
                {p.badge}
              </span>

              <h2 className="text-lg font-semibold text-cream mb-2">
                {p.name}
              </h2>

              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {p.desc}
              </p>

              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside mb-4">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="mt-auto text-xs text-gray-400">
                Adaptable to your platform architecture.
              </div>

            </article>

          ))}

        </div>

        {/* USE CASES */}

        <div className="mt-16">

          <h2 className="text-2xl text-cream font-semibold mb-6">
            Typical use cases
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Payment infrastructure",
                desc: "Platforms that need reliable routing across multiple payment gateways."
              },
              {
                title: "Compliance automation",
                desc: "Fintech teams building regulatory workflows for KYC and AML processes."
              },
              {
                title: "Financial reporting",
                desc: "Finance teams needing faster reconciliation and reporting pipelines."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="glass-panel p-6 rounded-xl"
              >

                <h3 className="text-cream font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* IMPLEMENTATION SECTION */}

        <div className="mt-16 glass-panel p-6 rounded-2xl border border-gold/20">

          <h2 className="text-lg text-cream font-semibold mb-3">
            Get started quickly
          </h2>

          <p className="text-gray-300 mb-4">
            These accelerators provide structured starting points that reduce
            the time required to design and deliver reliable fintech systems.
          </p>

          <ul className="text-gray-300 list-disc list-inside space-y-2 text-sm">
            <li>Architecture diagrams and integration checklists.</li>
            <li>Implementation milestones and rollout planning.</li>
            <li>Operational runbooks and monitoring guidance.</li>
          </ul>

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h2 className="text-2xl md:text-3xl text-cream font-bold mb-3">
            Need a customized fintech solution?
          </h2>

          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            We adapt these accelerators to your product architecture,
            compliance requirements, and operational workflows.
          </p>

          <button
            className="btn-gold px-8 py-3"
            onClick={() => setPage(PAGES.CONTACT)}
          >
            Talk to our team
          </button>

        </div>

      </div>

    </section>
  );
}

export default Products;