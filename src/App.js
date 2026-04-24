import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Brands from "./components/Brands";
import About from "./components/About";
import Services from "./components/Services";
import Teams from "./components/Teams";
import FAQs from "./components/FAQs";
import PrivacyPolicy from "./components/privacy";
import TermsAndConditions from "./components/t&c";
import BackToTop from "./components/Top";
import Work from "./components/Works";
import Error from "./components/Error";

const MainLayout = () => (
  <>
    <Home />
    <Services />
    <About />
    <Pricing />
    <Testimonials />
    <Brands />
    <Contact />
    <Teams />
    <FAQs />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/works" element={<Work />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
      <BackToTop/>
    </Router>
  );
}

export default App;