import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/Top";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import Services from "./components/Services";
import Stats from "./components/Stats";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Work from "./components/Works";
import ServiceDetail from "./components/services/ServiceDetail";
import PrivacyPolicy from "./components/privacy";
import TermsAndConditions from "./components/t&c";
import ErrorPage from "./components/Error";

import { useSmoothScroll } from "./lib/useSmoothScroll";

/**
 * Reading order for the home page: hook, capability, proof, character,
 * objections, then the ask. The ink CTA and the ink footer sit back to back on
 * purpose — they read as one closing block.
 */
const HomePage = () => (
  <>
    <Home />
    <Services />
    <Stats />
    <About />
    <Testimonials />
    <Brands />
    <FAQs />
    <Contact />
    <CTA />
  </>
);

export default function App() {
  useSmoothScroll();

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/:serviceId" element={<ServiceDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </Router>
    </HelmetProvider>
  );
}
