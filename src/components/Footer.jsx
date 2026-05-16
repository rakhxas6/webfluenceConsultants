import React, { useRef, useState } from "react";
import logoFull from "../assets/wfclogo1.png";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const closePopup = () => setStatus("idle");

  const handleTryAgain = () => {
    setStatus("idle");
    handleSubscribe();
  };

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
      <footer className="bg-[#0025cc]/90 py-10 px-4 sm:px-6 lg:px-8">
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
                className="flex items-center border gap-2 border-white/20 max-w-80 w-full rounded-full overflow-hidden mt-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email.."
                  className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs"
                  required
                  disabled={status === "sending"}
                />
                <button
                  type="button"
                  onClick={handleSubscribe}
                  disabled={status === "sending"}
                  className="bg-white text-black hover:bg-[#ff751f] hover:text-white active:scale-95 transition-all duration-300 w-auto px-6 flex-shrink-0 h-10 rounded-full text-sm cursor-pointer disabled:opacity-60"
                >
                  {status === "sending" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-px mt-12 mb-4 bg-gradient-to-r from-white via-black/25 to-white" />

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

      {/* Popup — outside footer so fixed positioning overlays the full page */}
      {(status === "success" || status === "error") && (
        <div
          className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`flex flex-col items-center w-96 bg-white text-center p-6 rounded-lg border text-sm ${
              status === "success" ? "border-gray-500/30" : "border-red-200"
            }`}
          >
            {status === "success" ? (
              <>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-gray-800 text-xl font-medium pb-2">
                  You're subscribed!
                </h2>
                <p className="text-gray-500 w-11/12">
                  Welcome aboard! Check your inbox for a confirmation. We'll
                  keep you updated with the latest news and insights.
                </p>
                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-6 bg-[#0025cc] px-8 py-2 rounded text-white font-medium active:scale-95 transition hover:bg-[#0025cc]/90"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-gray-800 text-xl font-medium pb-2">
                  Something went wrong
                </h2>
                <p className="text-gray-500 w-11/12">
                  We couldn't process your subscription. Please try again or
                  reach us at{" "}
                  <a
                    href="mailto:hello@webfluence.com"
                    className="text-[#0025cc] hover:underline"
                  >
                    hello@webfluence.com
                  </a>
                </p>
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="px-6 py-2 rounded border border-gray-500/30 text-gray-600 font-medium active:scale-95 transition hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleTryAgain}
                    className="px-6 py-2 rounded bg-red-500 text-white font-medium active:scale-95 transition hover:bg-red-600"
                  >
                    Try Again
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
