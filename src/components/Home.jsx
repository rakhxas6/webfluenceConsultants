import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

const WORDS = [
  { label: "GROWTH ENGINE",  color: "#0025cc" },
  { label: "BRAND BUILDER",  color: "#0025cc" },
  { label: "SEO WIZARD",     color: "#0025cc" },
  { label: "ADS MACHINE",    color: "#0025cc" },
  { label: "CONTENT STUDIO", color: "#0025cc" },
];

function WordCycler() {
  const [index, setIndex]         = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [cursorOn, setCursorOn]   = useState(true);

  const word  = WORDS[index].label;
  const color = WORDS[index].color;

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 120);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 80);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, word]);

  return (
    <>
      <span className="block text-5xl text-[#ff751f] tracking-wide uppercase leading-[1.05]">We are a</span>
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

function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let raf;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const BLUE = "#0025cc", ORANGE = "#ff751f";
    const COUNT = 55, CONNECT_DIST = 130, SPEED = 0.22;

    const nodes = Array.from({ length: COUNT }, () => ({
      x:          Math.random() * canvas.width,
      y:          Math.random() * canvas.height,
      vx:         (Math.random() - 0.5) * SPEED,
      vy:         (Math.random() - 0.5) * SPEED,
      r:          1.5 + Math.random() * 2,
      color:      Math.random() > 0.72 ? ORANGE : BLUE,
      pulse:      Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.016,
    }));

    function draw() {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.14;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.color === ORANGE || b.color === ORANGE
              ? `rgba(255,117,31,${alpha})` : `rgba(0,37,204,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        n.pulse += n.pulseSpeed;
        const r = n.r * (1 + Math.sin(n.pulse) * 0.2);
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = n.color === ORANGE ? "rgba(255,117,31,0.05)" : "rgba(0,37,204,0.06)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: "block" }} />;
}

const clipPath =
  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative isolate px-6 pt-32 lg:px-8 overflow-hidden">
        <ParticleNetwork />

        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div style={{ clipPath }} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" />
        </div>

        <div className="relative mx-auto max-w-2xl py-20 sm:py-32 lg:py-36">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-[#ff751f] ring-1 ring-[#0025cc]/20 hover:ring-[#0025cc]/40">
              Excited to take the next step.{" "}
              <a href="/learn" className="font-semibold text-[#0025cc]">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl leading-[1.05]">
              <WordCycler />
            </h1>

            <p className="mt-6 text-base sm:text-lg font-normal text-gray-500 leading-relaxed max-w-xl mx-auto">
              We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale. 
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#cta" className="text-sm font-semibold px-4 py-2 bg-[#0025cc] text-white border border-[#0025cc] hover:bg-white hover:text-[#0025cc] transition-colors">
                Get started
              </a>
              <a href="#services" className="text-sm font-semibold px-4 py-2 text-[#0025cc] border border-[#0025cc] hover:bg-[#0025cc] hover:text-white transition-colors">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div style={{ clipPath }} className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
        </div>
      </div>
    </div>
  );
};

export default Home;