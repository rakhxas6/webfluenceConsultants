import React, { useRef, useState } from "react";
import logoFull from "../assets/wfclogo1.png";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleSubscribe = async () => {
    const email = formRef.current?.querySelector("input").value;
    if (!email) return;

    setStatus("sending");

    try {
      await emailjs.send(
        "service_hcvt4xm",
        "template_8v6fnrs", // separate template from contact form
        {
          to_email: email,
          time: new Date().toLocaleString(),
        },
        "3kvtsH07BHQuOL3od",
      );
      setStatus("success");
      formRef.current.querySelector("input").value = "";
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const importantLinks = [
    { label: "Home", path: "/", id: null },
    { label: "About", path: "/", id: "about" },
    { label: "Work", path: "/work", id: null },
    { label: "Contact", path: "/", id: "contact" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61585824181750",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/webfluenceconsultants/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/webfluence-consultants",
    },
  ];

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
        * { font-family: "Poppins", sans-serif; }
      `}</style>

      <footer className="bg-[#0025cc] py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            {/* Brand */}
            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
              <a href="/">
                <img
                  src={logoFull}
                  alt="Webfluence Consultants"
                  className="w-72 h-auto object-contain"
                />
              </a>
              <div className="w-full max-w-52 h-px mt-8 bg-gradient-to-r from-white via-white/10 to-white" />
              <p className="text-sm text-white/60 mt-6 max-w-sm leading-relaxed">
                We turn bold ideas into unstoppable brands. Webfluence
                Consultants is your growth partner — built to make your business
                dominate, scale, and leave competitors behind.
              </p>
            </div>

            {/* Important Links */}
            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                {importantLinks.map((link, i) =>
                  link.id ? (
                    <a
                      key={i}
                      href={`/#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      key={i}
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(link.path);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">Social Links</h3>
              <div className="flex flex-col gap-2 mt-6">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">
                Subscribe for news
              </h3>
              <div
                ref={formRef}
                className="flex items-center border gap-2 border-white/20  max-w-80 w-full rounded-full overflow-hidden mt-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email.."
                  className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs"
                  required
                  disabled={status === "sending" || status === "success"}
                />
                <button
                  type="submit"
                  onClick={handleSubscribe}
                  disabled={status === "sending" || status === "success"}
                  className="bg-white text-black hover:bg-[#ff751f] hover:text-white active:scale-95 transition-all duration-300 w-auto px-6 flex-shrink-0 h-10 rounded-full text-sm cursor-pointer"
                >
                  {status === "sending"
                    ? "Subscribing..."
                    : status === "success"
                      ? "Subscribed!"
                      : "Subscribe"}
                </button>
              </div>

              {/* Feedback */}
              {status === "success" && (
                <p className="text-green-400 text-xs mt-2">
                  Welcome aboard! Check your inbox.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>

          <div className="w-full h-px mt-16 mb-4 bg-gradient-to-r from-white via-black/25 to-white" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Webfluence Consultants. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/terms-and-conditions"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/terms-and-conditions");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <div className="w-px h-4 bg-white/20" />
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/privacy-policy");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
