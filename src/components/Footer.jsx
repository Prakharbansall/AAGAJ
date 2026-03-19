function Footer({ page, setPage }){

    const navLinks = [
      ["Home", "home"],
      ["About", "about"],
      ["Services", "services"],
      ["Products", "products"],
      ["Team", "team"],
      ["Blog", "blog"],
      ["Contact", "contact"],
    ];

    return(
    <footer className="bg-black border-t border-gold/20 text-gray-400 text-sm">
    
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
    
    <div>
    <h3 className="text-gold font-semibold mb-3">
    AAGAJ Fintech Consultancy Pvt Ltd
    </h3>
    
    <p>
    206 Rajkamal Plaza-A  
    Navjivan Ahmedabad  
    Gujarat India
    </p>
    
    </div>
    
    <div>
    
    <h3 className="text-gold font-semibold mb-3">
    Quick links
    </h3>
    <div className="grid grid-cols-2 gap-2 text-xs text-gray-200">
      {navLinks.map(([label, key]) => (
        <button
          key={key}
          onClick={() => setPage(key)}
          className={`text-left hover:text-gold transition ${page === key ? "text-gold font-semibold" : "text-gray-300"}`}
        >
          {label}
        </button>
      ))}
    </div>
    
    </div>
    
    <div>
    
    <h3 className="text-gold font-semibold mb-3">
    Contact
    </h3>
    
<<<<<<< HEAD
    <p>Email:  contact@aagajtech.in</p> 
=======
    <p>Email: contact@aagajtech.in</p>
    <p>Phone: +91 79 XXXX XXXX</p>
>>>>>>> a421a3818c5d553d3e917a5ac8438b187d27633e
    
    </div>
    
    </div>
    
    <div className="text-center border-t border-gold/10 py-4">
    
    © 2025 AAGAJ Fintech Consultancy Pvt Ltd
    
    </div>
    
    </footer>
    )
    
    }
    
    export default Footer
