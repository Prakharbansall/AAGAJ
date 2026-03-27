import { useState } from "react";
import { PAGES } from "../App";

const POSTS = [
  {
    title: "Designing payment systems that can grow with you",
    category: "Payments",
    read: "",
    date: "",
    teaser:
      "A practical checklist for taking a payment MVP towards reliability, observability, and better partner management.",
  },
  {
    title: "Building for audits from day one",
    category: "RegTech",
    read: "",
    date: "",
    teaser:
      "How product, engineering, and compliance teams can collaborate so evidence and reports are easy to generate later.",
  },
  {
    title: "When to refactor your fintech core",
    category: "Engineering",
    read: "",
    date: "",
    teaser:
      "Signals that your current system is slowing delivery-and ways to improve without a risky full rewrite.",
  },
  {
    title: "How embedded finance platforms scale",
    category: "Architecture",
    read: "",
    date: "",
    teaser:
      "Understanding service orchestration, APIs, and ledger design behind modern embedded finance products.",
  },
];

const categories = ["All", "Payments", "RegTech", "Engineering", "Architecture"];

function Blog({ setPage }) {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("All");

  const [email, setEmail] = useState("");

const handleClick = () => {
  setLoading(true);

  setTimeout(() => {
    setSubscribed(true);
    setLoading(false);
    setEmail("");

    // reset after 2 sec
    setTimeout(() => {
      setSubscribed(false);
    }, 2000);

  }, 1000);
};

  const filtered =
    active === "All"
      ? POSTS
      : POSTS.filter((p) => p.category === active);

  return (
    <section className="py-20 md:py-24 fade-up">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <header className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Blog
          </p>

          <h1 className="text-3xl md:text-4xl text-cream font-bold mb-3">
            Insights & Articles
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Short, practical notes on shipping and scaling fintech products.
          </p>
        </header>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-wide border transition
              ${
                active === cat
                  ? "bg-gold text-navy border-gold"
                  : "border-gold/20 text-gray-300 hover:border-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* POSTS */}
          <div className="md:col-span-2 space-y-6">
            {filtered.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl border border-gold/15 bg-navy-light/40 p-6 hover:border-gold/35 hover:bg-navy-light/60 transition"
              >
                <div className="flex items-center gap-4 text-xs text-gold mb-2 uppercase tracking-wide">
                  <span>{post.category}</span>
                </div>

                <h2 className="text-xl text-cream font-semibold mb-2">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-300 mb-3">
                  {post.teaser}
                </p>

                <button
                  onClick={() => setPage(PAGES.CONTACT)}
                  className="text-gold text-sm hover:underline"
                >
                  Read article →
                </button>
              </article>
            ))}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            {/* Newsletter */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-cream font-semibold mb-2">
                Fintech newsletter
              </h3>

              <p className="text-sm text-gray-300 mb-4">
                Get insights about payments & fintech scaling.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  if (!e.target.checkValidity()) {
                    e.target.reportValidity();
                    return;
                  }

                  handleClick();
                }}
              >
<input
  type="email"
  placeholder="Email address"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full mb-3 px-3 py-2 rounded-lg bg-black/20 border border-gold/20 text-sm"
/>

                <button
                  type="submit"
                  className="btn-gold px-4 py-2 w-full text-sm"
                  disabled={loading || subscribed}
                >
                  {loading
                    ? "Subscribing..."
                    : subscribed
                    ? "Subscribed 🎉"
                    : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Topics */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-cream font-semibold mb-3">
                Popular topics
              </h3>

              <ul className="text-sm text-gray-300 space-y-2">
                <li>Payments infrastructure</li>
                <li>Regulatory technology</li>
                <li>Ledger architecture</li>
                <li>Fraud detection</li>
                <li>Embedded finance</li>
              </ul>
            </div>

          </aside>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center glass-panel rounded-2xl p-10">
          <h2 className="text-2xl text-cream font-bold mb-3">
            Want more fintech insights?
          </h2>

          <p className="text-gray-300 mb-6">
            We share practical lessons from building fintech products.
          </p>

          <button
            className="btn-gold px-8 py-3"
            onClick={() => setPage(PAGES.CONTACT)}
          >
            Join the newsletter
          </button>
        </div>

      </div>
    </section>
  );
}

export default Blog;