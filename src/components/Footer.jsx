import { useEffect } from "react";
import logo from "../assets/logo.png"

function Footer({ page, setPage }) {
  const navLinks = [
    ["Home", "home"],
    ["About", "products"],
    ["Services", "services"],
    ["Products", "about"],
    ["Team", "team"],
    ["Blog", "blog"],
    ["Contact", "contact"],
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <footer className="bg-black border-t border-gold/20 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* LOGO + ADDRESS */}
        <div>
          <a
            href="https://aagajtech.in/"
            target="_blank"
            rel="noreferrer"
            className="text-cream font-extrabold tracking-wide text-base md:text-lg flex items-center gap-2"
          >
          <img src={logo} alt="AAGAJ logo" className="h-15 w-20" /> 
          </a>

          <h3 className="text-gold font-semibold mb-3">
            AAGAJ Fintech Consultancy Pvt Ltd
          </h3>

          <p>206 Rajkamal Plaza-A,satar,Soc.,Nr Income tax Circle, Navjivan Ahmedabad Ahmedabad city Gujarat India, 380014</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-gold font-semibold mb-3">Quick links</h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-200">
            {navLinks.map(([label, key]) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={`text-left hover:text-gold transition ${
                  page === key ? "text-gold font-semibold" : "text-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-gold font-semibold mb-3">Contact</h3>Email :-  &nbsp;
          <a href="mailto:contact@aagajtech.in" className="hover:text-gold">
             Contact@aagajtech.in
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center border-t border-gold/10 py-4">
        © AAGAJ Fintech Consultancy Pvt Ltd
      </div>
    </footer>
  );
}

export default Footer;
