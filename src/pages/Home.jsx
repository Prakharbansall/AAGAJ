import { PAGES } from "../App";

const FEATURE_CARDS = [
  {
    title: "Payments & Banking Rails",
    desc: "Design and build reliable payment flows, reconciliation, and integrations built for scale.",
  },
  {
    title: "RegTech & Compliance",
    desc: "KYC/AML workflows, audit trails, and policy-aligned processes that reduce operational risk.",
  },
  {
    title: "Fintech Product Engineering",
    desc: "From MVP to production: architecture, delivery, and performance improvements that last.",
  },
];

const STATS = [
  { label: "Delivery approach", value: "0→1 to 1→10" },
  { label: "Focus", value: "Security-first" },
  { label: "Collaboration", value: "Product + Tech" },
  { label: "Support", value: "Post-launch" },
];

const FAQ = [
  {
    q: "What kind of fintech teams do you work with?",
    a: "Banks, NBFCs, startups, and platform teams looking to ship faster without compromising reliability and compliance.",
  },
  {
    q: "Do you help with architecture and code reviews?",
    a: "Yes. We can assess the current system, recommend improvements, and guide implementation with measurable milestones.",
  },
  {
    q: "Can you build an MVP and also scale it later?",
    a: "That’s the goal. We start lean, validate quickly, and keep the foundations strong so scaling doesn’t become a rewrite.",
  },
];

function Home({ setPage }) {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-130 w-130 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-48 -right-40 h-140 w-140 rounded-full bg-cream/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_10%,rgba(200,153,58,0.10),transparent_60%),radial-gradient(900px_400px_at_90%_40%,rgba(245,240,232,0.10),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold/90 font-semibold">
                Premium Fintech Strategy
              </div>
              <p className="text-xs tracking-widest uppercase text-gold/80 mb-2">
                AAGAJ Fintech Consultancy
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-cream leading-tight">
                Building <span className="gold-text">financial technology</span>{" "}
                that ships and scales.
              </h1>

              <p className="mt-5 text-gray-300 max-w-xl leading-relaxed">
                We help fintech teams across India design, build, and improve
                platforms spanning payments, infrastructure, and regulatory
                technology-focused on outcomes, reliability, and speed.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  className="rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-linear-to-r from-fuchsia-500 via-pink-500 to-orange-400 shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  onClick={() => setPage(PAGES.SERVICES)}
                >
                  Explore services
                </button>

                <button
                  className="rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold text-cream border border-white/25 bg-white/5 backdrop-blur-md hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                  onClick={() => setPage(PAGES.CONTACT)}
                >
                  Talk to us
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-gold/15 bg-navy-light/40 px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-cream">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="hero-card glow-pulse rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-300">What we deliver</div>
                    <div className="text-xl font-semibold text-cream mt-1">
                      Clarity → Build → Launch
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-linear-to-tr from-fuchsia-400 to-cyan-300 border border-white/20 shadow-md" />
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Discovery",
                      desc: "Define scope, success metrics, and a delivery plan your team can execute.",
                    },
                    {
                      title: "Engineering",
                      desc: "Build secure, maintainable systems with performance and observability in mind.",
                    },
                    {
                      title: "Compliance-ready",
                      desc: "Workflows and evidence trails that make audits less painful and operations smoother.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-gold/15 bg-black/15 p-4"
                    >
                      <div className="text-cream font-semibold">
                        {item.title}
                      </div>
                      <div className="text-gray-300/90 text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl border border-gold/15 bg-black/10 p-4">
                  <div>
                    <div className="text-xs text-gray-400">Typical outcome</div>
                    <div className="text-sm text-cream mt-0.5">
                      Faster releases with fewer incidents
                    </div>
                  </div>
                  <button
                    className="text-sm text-gold hover:text-gold-light transition underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
                    onClick={() => setPage(PAGES.CONTACT)}
                  >
                    Get a proposal
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                Built for readability, accessibility, and responsive layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              Services that improve product velocity
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Practical engineering and advisory-designed for fintech realities:
              integrations, risk, audits, and strict reliability needs.
            </p>
          </div>

          <button
            className="text-sm text-gold hover:text-gold-light transition underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
            onClick={() => setPage(PAGES.SERVICES)}
          >
            View all services
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {FEATURE_CARDS.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gold/15 bg-navy-light/40 p-6 hover:bg-navy-light/60 hover:border-gold/30 transition"
            >
              <h3 className="text-cream font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-300/90 text-sm mt-2 leading-relaxed">
                {f.desc}
              </p>
              <div onClick={() => setPage(PAGES.SERVICES)} className="mt-5 text-sm text-gold group-hover:text-gold-light transition cursor-pointer">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-16 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              A calm process for complex systems
            </h2>
            <p className="text-gray-300/90 mt-3 leading-relaxed max-w-xl">
              Fintech work is never “just code”. We align stakeholders, map
              risk, prioritize the right work, and make progress visible-so your
              team can move confidently.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Weekly milestones and transparent delivery tracking",
                "Security and reliability built in from day one",
                "Documentation and handover that your engineers actually use",
              ].map((t) => (
                <div
                  key={t}
                  className="flex gap-3 items-start rounded-xl border border-gold/10 bg-navy-light/30 p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gold/70 shrink-0" />
                  <div className="text-sm text-gray-200">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gold/15 bg-navy-light/40 p-6 md:p-8">
            <div className="text-sm text-gray-400">Client experience</div>
            <div className="mt-2 text-cream font-semibold text-lg">
              “Clear priorities, fast iterations, fewer surprises.”
            </div>
            <p className="mt-3 text-sm text-gray-300/90 leading-relaxed">
              We keep delivery predictable: small batches, measurable outcomes,
              and consistent communication-especially valuable when compliance
              or partner dependencies are involved.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { k: "Kickoff", v: "1-2 weeks" },
                { k: "First delivery", v: "2-6 weeks" },
                { k: "Ongoing", v: "Monthly" },
                { k: "Engagement", v: "Flexible" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-xl border border-gold/10 bg-black/10 p-4"
                >
                  <div className="text-xs text-gray-400">{x.k}</div>
                  <div className="text-sm text-cream mt-1">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              Frequently asked questions
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl">
              A few quick answers. If you want a tailored plan, we’ll share a
              short proposal after a brief call.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gold/15 bg-navy-light/40 p-5 open:bg-navy-light/55 transition"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 focus:outline-none">
                  <span className="text-cream font-semibold">{item.q}</span>
                  <span className="text-gold group-open:rotate-45 transition select-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-300/90 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        <div className="rounded-3xl border border-gold/20 bg-[linear-gradient(135deg,rgba(200,153,58,0.18),rgba(18,35,71,0.65))] p-8 md:p-10 overflow-hidden relative">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-cream leading-tight">
                Ready to build something reliable?
              </h2>
              <p className="text-gray-200/90 mt-3 max-w-xl leading-relaxed">
                Tell us what you’re building (or fixing). We’ll respond with the
                next best steps and a practical delivery plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <button
                className="btn-gold px-6 py-3.5 text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                onClick={() => setPage(PAGES.CONTACT)}
              >
                Contact us
              </button>
              <button
                className="px-6 py-3.5 text-sm sm:text-base rounded-md border border-cream/30 text-cream hover:border-cream/50 hover:bg-cream/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                onClick={() => setPage(PAGES.ABOUT)}
              >
                Learn about AAGAJ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
