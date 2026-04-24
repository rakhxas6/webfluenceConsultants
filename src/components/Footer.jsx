import React from "react";
import logoF from "../assets/logo/18.png";
import logoFull from "../assets/wfclogo1.png";

const Footer = () => {
  return (
    <>
      <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
      <footer className="bg-[#0025cc] py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
              <a href="/">
                <img
                  src={logoFull}
                  alt="webfluence"
                  srcset=""
                  className="w-72 h-auto object-contain"
                />
              </a>
              <div className="w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black"></div>
              <p className="text-sm text-white/60 mt-6 max-w-sm leading-relaxed">
                We turn bold ideas into unstoppable brands. Webfluence
                Consultants is your growth partner — built to make your business
                dominate, scale, and leave competitors behind.
              </p>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#faq"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">Social Links</h3>
              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61585824181750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/webfluenceconsultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                {/* <a
                  href="https://www.youtube.com/channel/UC9X8q0l9l9l9l9l9l9l9l9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Youtube
                </a> */}
                <a
                  href="https://www.linkedin.com/company/webfluence-consultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Linkedin
                </a>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-white font-medium">
                Subscribe for news
              </h3>
              <div className="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                <input
                  type="email"
                  placeholder="Enter your email.."
                  className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black hover:bg-black hover:text-white active:scale-95 transition-all duration-300 w-56 h-10 rounded-full text-sm cursor-pointer "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-px mt-16 mb-4 bg-linear-to-r from-white via-black/25 to-white"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Webfluence Consultants. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/terms-and-conditions"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <div className="w-px h-4 bg-white/20"></div>
              <a
                href="/privacy-policy"
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
