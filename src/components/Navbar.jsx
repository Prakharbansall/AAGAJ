import { useEffect, useState } from "react";
import { PAGES } from "../App";

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  const links = [
    ["Home",PAGES.HOME],
    ["About", PAGES.ABOUT],
    ["Services", PAGES.SERVICES],
    ["Products", PAGES.PRODUCTS],
    ["Team", PAGES.TEAM],
    ["Blog", PAGES.BLOG],
    ["Contact", PAGES.CONTACT],
  ];

  const handleNav = (p) => {
    setPage(p);
    setOpen(false);
  };

  return (
    <nav className="bg-[rgba(4,7,23,0.90)] backdrop-blur-md border-b border-gold/20 sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center gap-3">
        <a
          href="https://aagajtech.in/"
          target="_blank"
          rel="noreferrer"
          className="text-cream font-extrabold tracking-wide text-base md:text-lg flex items-center gap-2 focus:outline-none"
        >
          <img src="/logo.svg" alt="AAGAJ logo" className="h-8 w-8 md:h-9 md:w-9" />
          <span className="hidden sm:inline">AAGAJ Finance</span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          {links.map(([label, p]) => (
            <button
              key={p}
              onClick={() => handleNav(p)}
              className={`text-sm transition ${
                page === p ? "text-gold font-semibold" : "text-gray-300"
              } hover:text-gold`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-slate-900/80 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-lg shadow-black/30 hover:bg-slate-800 transition"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setPage(PAGES.CONTACT)}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-linear-to-r from-fuchsia-500 via-pink-500 to-amber-400 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-xl shadow-fuchsia-500/30 hover:scale-105 transition"
          >
            Book Strategy Call
          </button>
          <button
            className="md:hidden text-gray-300 border border-gold/30 rounded-md px-2 py-1 text-xs"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-navy-light">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-3">
            {links.map(([label, p]) => (
              <button
                key={p}
                onClick={() => handleNav(p)}
                className={`text-sm px-3 py-1.5 rounded-md ${
                  page === p
                    ? "bg-gold text-navy"
                    : "text-gray-200 hover:text-gold hover:bg-black/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;