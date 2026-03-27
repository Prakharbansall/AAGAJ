import { PAGES } from "../App";

const CHALLENGES = [
  "Difficulty defining structured payment flows",
  "Complexity in integrating compliance requirements",
  "Lack of clarity in system architecture decisions",
  "Fragmented tools for managing financial operations",
];

const SUPPORT_POINTS = [
  "Structured definition of financial workflows",
  "Architecture-level understanding of fintech systems",
  "Alignment between product, engineering, and compliance",
  "Continuous refinement of system design",
];

function Home({ setPage }) {
  return (
    <div className="bg-[#05070d]">
      
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1220] to-[#05070d]">
        
        {/* FIXED BACKGROUND (no black patch) */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16">
          <div className="max-w-3xl">
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Exploring how{" "}
              <span className="text-yellow-400">
                financial technology systems
              </span>{" "}
              can be structured
            </h1>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Financial systems form the foundation of modern digital economies.
              From payments and compliance processes to data reconciliation and
              reporting, these systems often involve multiple layers that must
              work together reliably.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setPage(PAGES.CONTACT)}
                className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:opacity-90"
              >
                Request Early Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Challenges in fintech system development
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {CHALLENGES.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-red-400/20 bg-red-400/5 text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-8 max-w-3xl">
          These challenges are not always due to lack of technology, but often
          arise from the absence of a unified framework to organise and approach
          financial technology systems effectively.
        </p>

        <p className="text-gray-300 mt-6 max-w-3xl">
          AAGAJ Fintech Consultancy Pvt Ltd is working on an initiative focused
          on developing a structured digital environment for fintech system
          planning, architecture exploration, and operational design.
        </p>
      </section>

      {/* TRANSITION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-yellow-400/20 bg-[#0b1220] p-10">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Moving towards structured fintech systems
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
            Instead of approaching financial technology development through
            isolated tools or disconnected workflows, the initiative explores how
            these processes can be organised into a unified system.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {SUPPORT_POINTS.map((point, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-yellow-400/10 bg-black/20 text-gray-300"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS SUPPORTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          What this initiative is intended to support
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          <div className="p-6 rounded-xl border border-yellow-400/10 bg-[#0b1220]">
            <h3 className="text-white font-semibold">
              Payment system structuring
            </h3>
            <p className="text-gray-400 text-sm mt-3">
              Exploring how payment flows, routing logic, and transaction
              lifecycles can be represented in a structured format.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-yellow-400/10 bg-[#0b1220]">
            <h3 className="text-white font-semibold">
              Compliance-aware system design
            </h3>
            <p className="text-gray-400 text-sm mt-3">
              Incorporating structured approaches to compliance-related workflows.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-yellow-400/10 bg-[#0b1220]">
            <h3 className="text-white font-semibold">
              Financial data organisation
            </h3>
            <p className="text-gray-400 text-sm mt-3">
              Supporting financial data, reporting structures, and reconciliation processes.
            </p>
          </div>

        </div>
      </section>

      {/* DEVELOPMENT STATUS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8">
          
          <h2 className="text-xl font-semibold text-white">
            Development status
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl">
            The platform and systems described on this website are currently under development.
          </p>

          <p className="text-gray-400 mt-2">
            Further updates regarding access and participation will be shared through official channels.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-20 text-center">
        <button
          onClick={() => setPage(PAGES.CONTACT)}
          className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-md hover:opacity-90"
        >
          Request Early Access
        </button>
      </section>

    </div>
  );
}

export default Home;