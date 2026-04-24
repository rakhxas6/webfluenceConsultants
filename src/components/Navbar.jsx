import React from "react";
import logo1 from "../assets/logo/17.png";
import logo2 from "../assets/wfcNavbarf.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
    { name: "Works", path: "/works" },
    { name: "About", path: "#about" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 z-50 bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src={logo2} alt="Logo" className="w-auto h-16" />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="group flex flex-col gap-0.5 text-gray-700"
          >
            {link.name}
            <div className="bg-[#0025cc] h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Desktop Right — WhatsApp button */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://wa.me/9779867925779"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0025cc] text-white px-5 py-2.5 rounded-full hover:bg-[#0020b0] transition-colors duration-300"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3C8.82 3 3 8.82 3 16c0 2.38.65 4.6 1.78 6.52L3 29l6.7-1.75A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
              fill="white"
            />
            <path
              d="M21.5 18.9c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
              fill="#25D366"
            />
          </svg>
          Chat with us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-8 w-8 cursor-pointer text-[#0025cc]"
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
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}
        <a
          href="https://wa.me/9779867925779"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0025cc] text-white px-5 py-2.5 rounded-full hover:bg-[#0020b0] transition-colors duration-300"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3C8.82 3 3 8.82 3 16c0 2.38.65 4.6 1.78 6.52L3 29l6.7-1.75A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
              fill="white"
            />
            <path
              d="M21.5 18.9c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
              fill="#25D366"
            />
          </svg>
          Chat with us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
