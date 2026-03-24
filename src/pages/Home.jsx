import { PAGES } from "../App";

const FEATURE_CARDS = [
  {
    title: "Payments Infrastructure",
    desc: "We design and build scalable payment systems while continuously improving real-world transaction flows, integrations, and reliability.",
  },
  {
    title: "Compliance & RegTech",
    desc: "KYC, AML, and audit-ready systems built directly into the product-ensuring compliance without slowing down growth.",
  },
  {
    title: "Fintech Product Engineering",
    desc: "From idea to launch and beyond, we build fintech products with strong architecture, performance, and long-term scalability.",
  },
];

const STATS = [
  { label: "Stage", value: "0 → 1 to Scale" },
  { label: "Focus", value: "Product-first" },
  { label: "Approach", value: "Build & Ship" },
  { label: "Support", value: "End-to-end" },
];

const FAQ = [
  {
    q: "What kind of fintech teams do you work with?",
    a: "We work with startups, banks, NBFCs, and fintech platforms building or scaling financial products.",
  },
  {
    q: "Do you only consult or also build products?",
    a: "We go beyond consulting-we actively design, build, and ship fintech systems alongside your team.",
  },
  {
    q: "Can you help from idea to launch?",
    a: "Yes. From early-stage product thinking to scaling production systems, we support the complete journey.",
  },
];

function Home({ setPage }) {
  return (
    <div>
      {/* HERO SECTION */}
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
                Fintech Product & Engineering
              </div>

              <p className="text-xs tracking-widest uppercase text-gold/80 mb-2">
                AAGAJ Fintech
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-cream leading-tight">
                Building and scaling{" "}
                <span className="gold-text">financial technology</span>{" "}
                for real-world use.
              </h1>

              <p className="mt-5 text-gray-300 max-w-xl leading-relaxed">
                We partner with fintech teams to design, build, and launch
                products across payments, infrastructure, and compliance-
                combining strong engineering with a product-first mindset.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  className="rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-linear-to-r from-fuchsia-500 via-pink-500 to-orange-400 shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform duration-200"
                  onClick={() => setPage(PAGES.SERVICES)}
                >
                  Explore services
                </button>

                <button
                  className="rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold text-cream border border-white/25 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
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
                    <div className="text-xs text-gray-400 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="hero-card glow-pulse rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-300">
                      What we build & deliver
                    </div>
                    <div className="text-xl font-semibold text-cream mt-1">
                      Idea → Build → Launch → Scale
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-linear-to-tr from-fuchsia-400 to-cyan-300 border border-white/20 shadow-md" />
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Product Discovery",
                      desc: "We define the right problems, validate ideas, and align product direction with business goals.",
                    },
                    {
                      title: "Engineering & Build",
                      desc: "We build secure, scalable fintech systems designed for performance and long-term growth.",
                    },
                    {
                      title: "Launch & Scale",
                      desc: "We help you go live with confidence and continuously improve systems as you grow.",
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
                    <div className="text-xs text-gray-400">
                      Typical outcome
                    </div>
                    <div className="text-sm text-cream mt-0.5">
                      Faster launches with scalable foundations
                    </div>
                  </div>
                  <button
                    className="text-sm text-gold hover:text-gold-light transition underline underline-offset-4"
                    onClick={() => setPage(PAGES.CONTACT)}
                  >
                    Start a project
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                Built for modern fintech teams and scalable systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              What we build and deliver
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              We actively design and build fintech systems across payments,
              compliance, and infrastructure-focused on solving real-world
              operational challenges.
            </p>
          </div>

          <button
            className="text-sm text-gold hover:text-gold-light transition underline underline-offset-4"
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
              <h3 className="text-cream font-semibold text-lg">
                {f.title}
              </h3>
              <p className="text-gray-300/90 text-sm mt-2 leading-relaxed">
                {f.desc}
              </p>
              <div
                onClick={() => setPage(PAGES.SERVICES)}
                className="mt-5 text-sm text-gold cursor-pointer"
              >
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
     <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
  <div className="rounded-3xl border border-gold/20 bg-[linear-gradient(135deg,rgba(200,153,58,0.18),rgba(18,35,71,0.65))] p-8 md:p-10 overflow-hidden relative">
    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

    <div className="relative grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-cream leading-tight">
          Ready to build and scale your fintech product?
        </h2>

        <p className="text-gray-200/90 mt-3 max-w-xl leading-relaxed">
          Whether you're starting from scratch or improving an existing system,
          we help you design, build, and launch with confidence.
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
