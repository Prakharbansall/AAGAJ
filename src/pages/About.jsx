import { PAGES } from "../App";

function About({ setPage }) {
  return (
    <div className="py-20 md:py-24 space-y-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 fade-up">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            About
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-cream mb-5">
            Building Financial Technology With
            <span className="gold-text"> Clarity & Precision</span>
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            AAGAJ Fintech Consultancy helps financial institutions, fintech
            startups, and platform teams design, build, and scale modern
            financial technology platforms with reliability, compliance,
            and operational clarity.
          </p>
        </div>
      </section>

      {/* MAIN STORY */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        <div className="md:col-span-2 glass-panel p-8 rounded-2xl space-y-5 text-gray-300">
          <p>
            Financial systems are complex environments where product decisions,
            engineering architecture, and regulatory requirements intersect.
            Our work focuses on helping organisations navigate that complexity
            without slowing down innovation.
          </p>

          <p>
            We collaborate closely with product teams, technology leaders,
            and operations teams to ensure systems are built not only to
            launch quickly, but also to remain stable and maintainable as
            the business grows.
          </p>

          <p>
            Early in our journey, we partnered with a digital lending platform
            transitioning from manual reconciliation to automated settlement.
            Within 12 weeks we redesigned payment flows, introduced automated
            controls, and significantly reduced operational overhead.
          </p>

          <p>
            Since then our work has expanded into areas including payments,
            embedded finance platforms, credit infrastructure, compliance
            tooling, and financial analytics systems.
          </p>

          <div className="border border-gold/20 rounded-xl p-5 bg-black/10">
            <h3 className="text-gold font-semibold text-sm mb-2">
              Our approach
            </h3>

            <ul className="list-decimal list-inside space-y-1 text-gray-300">
              <li>Discovery sessions to understand product and regulatory risk.</li>
              <li>Architecture planning focused on reliability and scale.</li>
              <li>Iterative engineering with transparent review cycles.</li>
              <li>Operational documentation and knowledge transfer.</li>
            </ul>
          </div>
        </div>

        {/* VALUES */}
        <div className="glass-panel p-6 rounded-2xl text-sm text-gray-200">
          <h2 className="text-cream font-semibold mb-4">
            What we value
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Clarity before code.</li>
            <li>Systems designed for long-term reliability.</li>
            <li>Respect for financial regulation and governance.</li>
            <li>Transparent collaboration with internal teams.</li>
            <li>Practical engineering over unnecessary complexity.</li>
          </ul>

          <p className="mt-4 text-xs text-gray-400">
            We believe strong fintech systems are built through
            clear communication between product, engineering,
            and compliance teams.
          </p>
        </div>

      </section>


      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-4">

        <div className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Process
          </p>

          <h2 className="text-3xl font-bold text-cream">
            How We Work
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              title: "Discovery",
              desc: "Understanding product goals, financial flows, and regulatory constraints."
            },
            {
              title: "Architecture",
              desc: "Designing systems that support scale, observability, and operational clarity."
            },
            {
              title: "Engineering",
              desc: "Iterative development with strong testing and review processes."
            },
            {
              title: "Operational Handover",
              desc: "Clear documentation, monitoring dashboards, and runbooks."
            }
          ].map((step, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-xl"
            >
              <div className="text-gold font-semibold mb-2">
                0{i + 1}
              </div>

              <h3 className="text-cream font-medium mb-2">
                {step.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4">

        <div className="glass-panel rounded-2xl p-10 text-center">

          <h2 className="text-3xl font-bold text-cream mb-4">
            Let’s Build Financial Infrastructure Together
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Whether you're launching a fintech product or improving an
            existing platform, we help teams move from concept to
            reliable production systems.
          </p>

          <button
            className="btn-gold px-8 py-3"
            onClick={() => setPage(PAGES.CONTACT)}
          >
            Start the Conversation
          </button>

        </div>

      </section>

    </div>
  );
}

export default About;
