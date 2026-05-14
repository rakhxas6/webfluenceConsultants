import React from 'react'
import logo from "../assets/logo/18.png"
import logo1 from "../assets/logo/17.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '#services' },
        { name: 'Contact', path: '#contact' },
        { name: 'About', path: '#about' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 
        // ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "bg-[#0025cc] py-3 md:py-4"}`}>
        <nav className='fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 
        bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4' >

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
                <img src={isScrolled ? logo1 : logo} alt="Logo" className='w-auto h-16'/>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-[#0025cc]" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                {/* <svg className={`h-6 w-6 transition-all duration-500 ${isScrolled ? "text-gray-700" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg> */}
                <button onClick={()=> navigate('/login')} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-[#0025cc]" : "bg-white text-black"}`}>
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-8 w-8 size-8 cursor-pointer ${isScrolled ? "text-gray-700" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-8 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                ))}
                <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar





// import { Helmet } from "react-helmet-async";
// import bgVideo from "../assets/clients/bgVideo.mp4";


// const WORDS = [
//   { label: "GROWTH ENGINE", color: "#0025cc" },
//   { label: "BRAND BUILDER", color: "#0025cc" },
//   { label: "SEO WIZARD", color: "#0025cc" },
//   { label: "ADS MACHINE", color: "#0025cc" },
//   { label: "CONTENT STUDIO", color: "#0025cc" },
// ];

// function WordCycler() {
//   const [index, setIndex] = useState(0);
//   const [displayed, setDisplayed] = useState("");
//   const [deleting, setDeleting] = useState(false);
//   const [cursorOn, setCursorOn] = useState(true);

//   const word = WORDS[index].label;
//   const color = WORDS[index].color;

//   useEffect(() => {
//     const id = setInterval(() => setCursorOn((v) => !v), 530);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     let timeout;
//     if (!deleting && displayed.length < word.length) {
//       timeout = setTimeout(
//         () => setDisplayed(word.slice(0, displayed.length + 1)),
//         120,
//       );
//     } else if (!deleting && displayed.length === word.length) {
//       timeout = setTimeout(() => setDeleting(true), 2400);
//     } else if (deleting && displayed.length > 0) {
//       timeout = setTimeout(
//         () => setDisplayed(word.slice(0, displayed.length - 1)),
//         80,
//       );
//     } else if (deleting && displayed.length === 0) {
//       setDeleting(false);
//       setIndex((i) => (i + 1) % WORDS.length);
//     }
//     return () => clearTimeout(timeout);
//   }, [displayed, deleting, word]);

//   return (
//     <>
//       <span className="block text-3xl sm:text-5xl text-[#ff751f] tracking-wide uppercase leading-[1.05]">
//         We are a
//       </span>
//       <span className="block" style={{ color }}>
//         {displayed}
//         <span style={{ color }}>.</span>
//         <span
//           style={{
//             display: "inline-block",
//             width: "4px",
//             height: "0.82em",
//             background: color,
//             marginLeft: "5px",
//             verticalAlign: "baseline",
//             position: "relative",
//             top: "0.05em",
//             borderRadius: "1px",
//             opacity: cursorOn ? 1 : 0,
//             transition: "opacity 0.1s",
//           }}
//         />
//       </span>
//     </>
//   );
// }

// // function ParticleNetwork() {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx    = canvas.getContext("2d");
// //     let raf;

// //     function resize() {
// //       canvas.width  = canvas.offsetWidth;
// //       canvas.height = canvas.offsetHeight;
// //     }
// //     resize();
// //     window.addEventListener("resize", resize);

// //     const BLUE = "#0025cc", ORANGE = "#ff751f";
// //     const COUNT = 80, CONNECT_DIST = 130, SPEED = 0.22;

// //     const nodes = Array.from({ length: COUNT }, () => ({
// //       x:          Math.random() * canvas.width,
// //       y:          Math.random() * canvas.height,
// //       vx:         (Math.random() - 0.5) * SPEED,
// //       vy:         (Math.random() - 0.5) * SPEED,
// //       r:          1.5 + Math.random() * 2,
// //       color:      Math.random() > 0.72 ? ORANGE : BLUE,
// //       pulse:      Math.random() * Math.PI * 2,
// //       pulseSpeed: 0.01 + Math.random() * 0.016,
// //     }));

// //     function draw() {
// //       const W = canvas.width, H = canvas.height;
// //       ctx.clearRect(0, 0, W, H);
// //       for (let i = 0; i < COUNT; i++) {
// //         for (let j = i + 1; j < COUNT; j++) {
// //           const a = nodes[i], b = nodes[j];
// //           const dx = b.x - a.x, dy = b.y - a.y;
// //           const dist = Math.sqrt(dx * dx + dy * dy);
// //           if (dist < CONNECT_DIST) {
// //             const alpha = (1 - dist / CONNECT_DIST) * 0.14;
// //             ctx.beginPath();
// //             ctx.moveTo(a.x, a.y);
// //             ctx.lineTo(b.x, b.y);
// //             ctx.strokeStyle = a.color === ORANGE || b.color === ORANGE
// //               ? `rgba(255,117,31,${alpha})` : `rgba(0,37,204,${alpha})`;
// //             ctx.lineWidth = 0.7;
// //             ctx.stroke();
// //           }
// //         }
// //       }
// //       for (const n of nodes) {
// //         n.pulse += n.pulseSpeed;
// //         const r = n.r * (1 + Math.sin(n.pulse) * 0.2);
// //         ctx.beginPath();
// //         ctx.arc(n.x, n.y, r * 3.5, 0, Math.PI * 2);
// //         ctx.fillStyle = n.color === ORANGE ? "rgba(255,117,31,0.05)" : "rgba(0,37,204,0.06)";
// //         ctx.fill();
// //         ctx.beginPath();
// //         ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
// //         ctx.fillStyle = n.color;
// //         ctx.globalAlpha = 0.6;
// //         ctx.fill();
// //         ctx.globalAlpha = 1;
// //         n.x += n.vx; n.y += n.vy;
// //         if (n.x < 0 || n.x > W) n.vx *= -1;
// //         if (n.y < 0 || n.y > H) n.vy *= -1;
// //       }
// //       raf = requestAnimationFrame(draw);
// //     }

// //     draw();
// //     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
// //   }, []);

// //   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: "block" }} />;
// // }

// const clipPath =
//   "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>
//           Webfluence Consultants — Digital Marketing Agency in Nepal
//         </title>
//         <meta
//           name="description"
//           content="Webfluence Consultants is Nepal's growth-focused digital marketing agency. We specialise in SEO, social media, performance ads, branding, video production, and web development."
//         />
//         <meta
//           name="keywords"
//           content="digital marketing agency Nepal, SEO Nepal, social media marketing Nepal, performance marketing, branding Nepal, web development Nepal, Butwal marketing agency"
//         />
//         <link
//           rel="canonical"
//           href="https://webfluence-consultants.vercel.app/"
//         />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Webfluence Consultants — Digital Marketing Agency in Nepal"
//         />
//         <meta
//           property="og:description"
//           content="We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale."
//         />
//         <meta
//           property="og:url"
//           content="https://webfluence-consultants.vercel.app/"
//         />
//         <meta property="og:site_name" content="Webfluence Consultants" />
//         <meta
//           property="og:image"
//           content="https://webfluence-consultants.vercel.app/wfc-black.png"
//         />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Webfluence Consultants — Digital Marketing Agency in Nepal"
//         />
//         <meta
//           name="twitter:description"
//           content="We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale."
//         />
//         <meta
//           name="twitter:image"
//           content="https://webfluence-consultants.vercel.app/wfc-black.png"
//         />
//       </Helmet>

//       <div>
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="fixed inset-0  w-full min-h-screen  object-cover opacity-90 -z-10"
//         >
//           <source src={bgVideo} type="video/mp4" />
//         </video>
//         <Navbar />

//         <div className="relative isolate px-6 pt-36 pb-16 lg:px-8 overflow-hidden">
//           {/* <ParticleNetwork className='hidden md:flex'/> */}

//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           >
//             <div
//               style={{ clipPath }}
//               className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
//             />
//           </div>

//           <div className="relative mx-auto max-w-2xl py-20 sm:py-32 lg:py-36">
//             <div className="mb-8 flex justify-center">
//               <div className="relative rounded-full px-3 py-1 text-sm/6 text-[#ff751f] ring-1 ring-[#0025cc]/20 hover:ring-[#0025cc]/40">
//                 Excited to take the next step.{" "}
//                 <a href="#about" className="font-semibold text-[#0025cc]">
//                   <span aria-hidden="true" className="absolute inset-0" />
//                   Read more <span aria-hidden="true">&rarr;</span>
//                 </a>
//               </div>
//             </div>

//             <div className="text-center">
//               <h1 className="text-4xl font-semibold tracking-tight sm:text-7xl leading-[1.05]">
//                 <WordCycler />
//               </h1>

//               <p className="mt-6 text-base sm:text-lg font-normal text-gray-500 leading-relaxed max-w-xl mx-auto">
//                 We partner with ambitious businesses to build digital engines
//                 that attract, convert, and retain customers at scale.
//               </p>

//               <div className="mt-10 flex items-center justify-center gap-x-6 ">
//                 <a
//                   href="#cta"
//                   className="text-sm font-semibold px-4 py-2 bg-[#0025cc] text-white border border-[#0025cc] hover:bg-white hover:text-[#0025cc] transition-colors"
//                 >
//                   Get started
//                 </a>
//                 <a
//                   href="#services"
//                   className="text-sm font-semibold px-4 py-2 text-[#0025cc] border border-[#0025cc] hover:bg-[#0025cc] hover:text-white transition-colors"
//                 >
//                   Learn more
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           >
//             <div
//               style={{ clipPath }}
//               className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default { Home , Navbar};
