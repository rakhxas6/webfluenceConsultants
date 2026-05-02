import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Brands from "./components/Brands";
import About from "./components/About";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import PrivacyPolicy from "./components/privacy";
import TermsAndConditions from "./components/t&c";
import BackToTop from "./components/Top";
import Work from "./components/Works";
import Error from "./components/Error";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import ServiceDetail from "./components/services/ServiceDetail";

const MainLayout = () => (
  <>
    <Home />
    <Services />
    <About />
    <Stats />
    <Testimonials />
    <Brands />
    <Contact />
    <CTA />
    <FAQs />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/work" element={<Work />} />
          <Route path="/:serviceId" element={<ServiceDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </HelmetProvider>
  );
}

export default App;
