const TEAM = [
  {
    name: "Principal Consultant",
    role: "Fintech architecture & delivery",
    blurb:
      "Leads engagements across payments, banking integrations, and high-scale financial systems.",
    skills: ["Payments Architecture", "Distributed Systems", "API Design"]
  },
  {
    name: "Engagement Lead",
    role: "Product & stakeholder alignment",
    blurb:
      "Ensures teams remain aligned on product scope, delivery milestones, and measurable outcomes.",
    skills: ["Product Strategy", "Delivery Planning", "Stakeholder Communication"]
  },
  {
    name: "Engineering Partner Network",
    role: "Specialist contributors",
    blurb:
      "Experienced engineers and designers engaged for specific fintech challenges.",
    skills: ["Backend Engineering", "Security", "Financial Data"]
  },
];

import { PAGES } from "../App";

function Team({ setPage }) {
  return (
    <section className="py-20 md:py-24 fade-up">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}

        <header className="max-w-3xl mb-12">

          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Team
          </p>

          <h1 className="text-3xl md:text-4xl text-cream font-bold mb-3">
            Team & collaborators
          </h1>

          <p className="text-gray-300 leading-relaxed">
            AAGAJ works as an extension of your product and technology
            organisation, combining fintech expertise, engineering discipline,
            and collaborative delivery practices.
          </p>

        </header>

        {/* TEAM GRID */}

        <div className="grid md:grid-cols-3 gap-7">

          {TEAM.map((member) => (

            <article
              key={member.role}
              className="rounded-2xl border border-gold/15 bg-navy-light/40 p-6 hover:-translate-y-1 hover:border-gold/40 transition flex flex-col"
            >

              <div className="h-14 w-14 rounded-full bg-linear-to-r from-gold to-amber-200 border border-gold/30 mb-4"/>

              <h2 className="text-lg font-semibold text-cream">
                {member.name}
              </h2>

              <div className="text-xs uppercase tracking-wide text-gold mt-1 mb-2">
                {member.role}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                {member.blurb}
              </p>

              {/* SKILLS */}

              <div className="flex flex-wrap gap-2 mb-3">

                {member.skills.map((skill) => (

                  <span
                    key={skill}
                    className="text-xs border border-gold/25 px-2 py-1 rounded-md text-gray-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <p className="text-xs text-gray-400 mt-auto">
                10+ years experience across fintech platforms and regulated payment systems.
              </p>

            </article>

          ))}

        </div>

        {/* TEAM STRUCTURE */}

        <div className="mt-20">

          <h2 className="text-2xl text-cream font-semibold mb-6">
            How we collaborate
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Embedded partnership",
                desc: "We integrate directly with your product and engineering teams."
              },
              {
                title: "Flexible expertise",
                desc: "Specialists join projects only when their expertise is required."
              },
              {
                title: "Transparent delivery",
                desc: "Regular updates, clear milestones, and measurable outcomes."
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

        {/* WORK STYLE */}

        <div className="mt-20 glass-panel p-8 rounded-2xl border border-gold/20">

          <h2 className="text-xl text-cream font-semibold mb-3">
            Our working style
          </h2>

          <p className="text-gray-300 max-w-3xl mb-4">
            We operate as a remote-first consultancy that collaborates closely
            with internal teams. Our goal is not only to deliver features but
            also to strengthen the internal capabilities of your organisation.
          </p>

          <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
            <li>Clear documentation and architectural decision records.</li>
            <li>Knowledge transfer sessions with internal engineers.</li>
            <li>Operational runbooks and monitoring practices.</li>
          </ul>

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h2 className="text-2xl md:text-3xl text-cream font-bold mb-3">
            Work with experienced fintech builders
          </h2>

          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Our team collaborates with product leaders and engineering teams
            to design reliable fintech systems that grow with your business.
          </p>

          <button
            className="btn-gold px-8 py-3"
            onClick={() => setPage(PAGES.CONTACT)}
          >
            Start a conversation
          </button>

        </div>

      </div>

    </section>
  );
}

export default Team;