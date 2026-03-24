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
            AAGAJ Fintech partners with financial institutions, fintech startups,
            and platform teams to design, build, and scale modern financial
            systems-combining deep engineering with a strong product mindset.
          </p>
        </div>
      </section>

      {/* MAIN STORY */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        <div className="md:col-span-2 glass-panel p-8 rounded-2xl space-y-5 text-gray-300">
          <p>
            Financial systems are complex environments where product decisions,
            engineering architecture, and regulatory requirements intersect.
            Our work focuses on simplifying that complexity while maintaining
            speed, control, and reliability.
          </p>

          <p>
            We work closely with product leaders, engineering teams, and
            operations stakeholders to build systems that are not only fast
            to launch, but also stable, scalable, and maintainable over time.
          </p>

          <p>
            One of our early engagements involved a digital lending platform
            moving from manual reconciliation to automated settlement.
            Within weeks, we redesigned payment flows, introduced system-level
            controls, and significantly reduced operational overhead.
          </p>

          <p>
            Today, our work spans payments infrastructure, embedded finance,
            credit systems, compliance tooling, and financial data platforms-
            supporting teams at different stages of growth.
          </p>

          <div className="border border-gold/20 rounded-xl p-5 bg-black/10">
            <h3 className="text-gold font-semibold text-sm mb-2">
              Our approach
            </h3>

            <ul className="list-decimal list-inside space-y-1 text-gray-300">
              <li>Clear discovery aligned with product and regulatory needs.</li>
              <li>Architecture designed for scale, resilience, and visibility.</li>
              <li>Iterative development with structured feedback cycles.</li>
              <li>Strong documentation and seamless knowledge transfer.</li>
            </ul>
          </div>
        </div>

        {/* VALUES */}
        <div className="glass-panel p-6 rounded-2xl text-sm text-gray-200">
          <h2 className="text-cream font-semibold mb-4">
            What we value
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Clarity before execution.</li>
            <li>Systems built for long-term reliability.</li>
            <li>Respect for compliance and governance.</li>
            <li>Transparent collaboration with teams.</li>
            <li>Practical solutions over unnecessary complexity.</li>
          </ul>

          <p className="mt-4 text-xs text-gray-400">
            We believe strong fintech products are built through alignment
            between product thinking, engineering discipline, and regulatory awareness.
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
              desc: "Understanding product vision, financial flows, and regulatory constraints."
            },
            {
              title: "Architecture",
              desc: "Designing scalable systems with strong observability and control."
            },
            {
              title: "Engineering",
              desc: "Building iteratively with performance, security, and reliability in focus."
            },
            {
              title: "Operational Handover",
              desc: "Documentation, monitoring, and systems your team can confidently run."
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
            Let’s Build and Scale Financial Systems Together
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Whether you're launching a new fintech product or improving an
            existing platform, we help you move from concept to reliable,
            production-ready systems.
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
