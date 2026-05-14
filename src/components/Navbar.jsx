import React from "react";
import logo2 from "../assets/logo/17.png";
import { FaWhatsapp } from "react-icons/fa";
const { useNavigate, useLocation } = require("react-router-dom");

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const isHome = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent at top of home, solid when scrolled or on other pages
  const navBg =
    isHome && !scrolled
      ? "bg-transparent shadow-none backdrop-blur-none"
      : "bg-white/60 shadow-md backdrop-blur-sm";

  const textColor = isHome && !scrolled ? "text-white" : "text-gray-700";
  const iconColor = isHome && !scrolled ? "#ffffff" : "#0025cc";

  const navLinks = [
    { name: "Home", path: "/", id: null },
    { name: "Services", path: "/", id: "services" },
    { name: "Work", path: "/work", id: null },
    { name: "Contact", path: "/", id: "contact" },
    { name: "About", path: "/", id: "about" },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (!link.id) {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (location.pathname === "/") {
      const el = document.getElementById(link.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(link.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-50 py-3 md:py-4 transition-all duration-300 ${navBg}`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src={logo2} alt="Logo" className="w-auto h-16" />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.id ? `/#${link.id}` : link.path}
            onClick={(e) => handleNavClick(e, link)}
            className={`group flex flex-col gap-0.5 transition-colors duration-300 ${textColor}`}
          >
            {link.name}
            <div
              className="h-0.5 w-0 group-hover:w-full transition-all duration-300"
              style={{ background: iconColor }}
            />
          </a>
        ))}
      </div>

      {/* Desktop Right — WhatsApp button */}
      <div className="hidden md:flex items-center gap-4">
       <a
          href="https://wa.me/9779867925779"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:text-black"
          style={{
            boxShadow: "0 0 12px 3px rgba(37, 211, 102, 0.6)",
            animation: "whatsappGlow 2s ease-in-out infinite",
          }}
        >
          <FaWhatsapp size={18} />
          Chat with us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-8 w-8 cursor-pointer"
          style={{ color: iconColor }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-700 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-8 right-4 text-[#0025cc]"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.id ? `/#${link.id}` : link.path}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://wa.me/9779867925779"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:text-black"
          style={{
            boxShadow: "0 0 12px 3px rgba(37, 211, 102, 0.6)",
            animation: "whatsappGlow 2s ease-in-out infinite",
          }}
        >
          <FaWhatsapp size={18} />
          Chat with us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
