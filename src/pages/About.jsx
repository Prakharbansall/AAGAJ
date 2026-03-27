import { PAGES } from "../App";

function About({ setPage }) {
  return (
    <div className="py-20 md:py-24 space-y-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 fade-up">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Platform
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-cream mb-5">
            A digital framework for
            <span className="gold-text"> fintech system design</span>
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            The initiative being developed by AAGAJ Fintech Consultancy Pvt Ltd
            focuses on creating a platform where financial technology systems
            can be planned, structured, and explored within a unified environment.
          </p>

          <p className="text-gray-400 mt-4">
            The objective is to move beyond fragmented approaches and towards a
            more organised way of designing fintech systems.
          </p>
        </div>
      </section>

      {/* MAIN STORY */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        <div className="md:col-span-2 glass-panel p-8 rounded-2xl space-y-5 text-gray-300">

          <p>
            Financial technology systems often evolve through disconnected tools,
            workflows, and documentation layers. This creates gaps between system
            design, implementation, and operational understanding.
          </p>

          <p>
            The platform under development is focused on bringing these elements
            together into a structured digital environment-where workflows,
            architecture, compliance, and documentation can be explored in a
            connected and organised way.
          </p>

          <p>
            Rather than treating payments, compliance, and data systems as separate
            concerns, the initiative aims to represent them as interconnected
            components within a unified system framework.
          </p>

          <p>
            This approach is intended to support clearer system thinking, better
            alignment across teams, and more structured decision-making during
            fintech product development.
          </p>

          <div className="border border-gold/20 rounded-xl p-5 bg-black/10">
            <h3 className="text-gold font-semibold text-sm mb-3">
              Core components under development
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Financial workflow mapping for payments, settlements, and reporting.</li>
              <li>System architecture exploration across different fintech use cases.</li>
              <li>Integration of compliance structures such as KYC, AML, and audit trails.</li>
              <li>Alignment between evolving system design and technical documentation.</li>
            </ul>
          </div>

        </div>

        {/* SIDE BLOCK (TECH DIRECTION) */}
        <div className="glass-panel p-6 rounded-2xl text-sm text-gray-200">

          <h2 className="text-cream font-semibold mb-4">
            Technology direction
          </h2>

          <p className="text-gray-300 mb-4">
            The platform is being developed as a modular system architecture,
            where different components interact within a unified framework.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Scalable backend services for financial workflows</li>
            <li>Cloud-based infrastructure for flexibility and reliability</li>
            <li>Modular APIs for integration with external systems</li>
            <li>Adaptable architecture for different fintech use cases</li>
          </ul>

          <p className="mt-4 text-xs text-gray-400">
            This approach is intended to support long-term scalability and
            adaptability across evolving financial technology environments.
          </p>

        </div>

      </section>

      {/* PROCESS (REUSED BUT REFRAMED) */}
      <section className="max-w-7xl mx-auto px-4">

        <div className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Platform approach
          </p>

          <h2 className="text-3xl font-bold text-cream">
            How the system is being structured
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              title: "Workflow Mapping",
              desc: "Defining financial processes such as payments, settlements, and reporting."
            },
            {
              title: "Architecture Design",
              desc: "Exploring system structures across different fintech use cases."
            },
            {
              title: "Compliance Integration",
              desc: "Embedding regulatory workflows within system design."
            },
            {
              title: "Documentation Layer",
              desc: "Maintaining alignment between system evolution and documentation."
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
            Be part of the platform journey
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Request early access to follow the development of this platform
            and explore how fintech systems can be structured more effectively.
          </p>

          <button
            className="btn-gold px-8 py-3"
            onClick={() => setPage(PAGES.CONTACT)}
          >
            Request Early Access
          </button>

        </div>

      </section>

    </div>
  );
}

export default About;