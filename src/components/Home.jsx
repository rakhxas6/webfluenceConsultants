import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import bgVideo from "../assets/clients/bgVideo.mp4";
import Navbar from "./Navbar";

const WORDS = [
  { label: "GROWTH ENGINE", color: "#fff" },
  { label: "BRAND BUILDER", color: "#fff" },
  { label: "SEO WIZARD", color: "#fff" },
  { label: "ADS MACHINE", color: "#fff" },
  { label: "CONTENT STUDIO", color: "#fff" },
];

function WordCycler() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  const word = WORDS[index].label;
  const color = WORDS[index].color;

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        120,
      );
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length - 1)),
        80,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, word]);

  return (
    <>
      <span className="block text-3xl sm:text-5xl text-[#ff751f] tracking-wide uppercase leading-[1.05]">
        We are a
      </span>
      <span className="block" style={{ color }}>
        {displayed}
        <span style={{ color }}>.</span>
        <span
          style={{
            display: "inline-block",
            width: "4px",
            height: "0.82em",
            background: color,
            marginLeft: "5px",
            verticalAlign: "baseline",
            position: "relative",
            top: "0.05em",
            borderRadius: "1px",
            opacity: cursorOn ? 1 : 0,
            transition: "opacity 0.1s",
          }}
        />
      </span>
    </>
  );
}

const clipPath =
  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Webfluence Consultants — Digital Marketing Agency in Nepal
        </title>
        <meta
          name="description"
          content="Webfluence Consultants is Nepal's growth-focused digital marketing agency. We specialise in SEO, social media, performance ads, branding, video production, and web development."
        />
        <meta
          name="keywords"
          content="digital marketing agency Nepal, SEO Nepal, social media marketing Nepal, performance marketing, branding Nepal, web development Nepal, Butwal marketing agency"
        />
        <link
          rel="canonical"
          href="https://webfluence-consultants.vercel.app/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Webfluence Consultants — Digital Marketing Agency in Nepal"
        />
        <meta
          property="og:description"
          content="We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale."
        />
        <meta
          property="og:url"
          content="https://webfluence-consultants.vercel.app/"
        />
        <meta property="og:site_name" content="Webfluence Consultants" />
        <meta
          property="og:image"
          content="https://webfluence-consultants.vercel.app/wfc-black.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Webfluence Consultants — Digital Marketing Agency in Nepal"
        />
        <meta
          name="twitter:description"
          content="We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale."
        />
        <meta
          name="twitter:image"
          content="https://webfluence-consultants.vercel.app/wfc-black.png"
        />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          style={{ zIndex: 0 }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Overlay — scoped to this div only */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.45)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div className="relative" style={{ zIndex: 2 }}>
          {/* navbar */}
          <Navbar />

          <div className="relative isolate px-6 pt-36 pb-16 lg:px-8 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{ clipPath }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
              />
            </div>

            <div className="relative mx-auto max-w-2xl py-20 sm:py-32 lg:py-36">
              <div className="mb-8 flex justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-[#ff751f] ring-1 ring-[#fff] hover:ring-[#fff]/40">
                  Excited to take the next step.{" "}
                  <a href="#about" className="font-semibold text-[#fff]/90">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-7xl leading-[1.05]">
                  <WordCycler />
                </h1>

                <p className="mt-6 text-base sm:text-lg font-normal text-[#ff751f] leading-relaxed max-w-xl mx-auto">
                  We partner with ambitious businesses to build digital engines
                  that attract, convert, and retain customers at scale.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6 ">
                  <a
                    href="#cta"
                    className="text-sm font-semibold px-4 py-2 bg-[#ff751f] text-white border border-[#fff] hover:bg-white hover:text-[#0025cc] transition-colors"
                  >
                    Get started
                  </a>
                  <a
                    href="#services"
                    className="text-sm font-semibold px-4 py-2 text-[#fff] border border-[#fff] hover:bg-[#0025cc] hover:text-white transition-colors"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{ clipPath }}
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
