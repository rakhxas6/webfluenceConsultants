import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import Container from "./atoms/Container";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Reveal from "./atoms/Reveal";
import Spinner from "./atoms/Spinner";
import logoFull from "../assets/wfclogo1.png";
import { cn } from "../lib/cn";
import { scrollTo } from "../lib/useSmoothScroll";
import { ADDRESS, EMAIL, EMAILJS, NAV_LINKS, PHONE, PHONE_HREF, SOCIALS } from "../lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LEGAL = [
  { label: "Privacy policy", path: "/privacy-policy" },
  { label: "Terms & conditions", path: "/terms-and-conditions" },
];

/** Closing colophon. Sits on ink so it reads as one dark block with the CTA above it. */
export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  const go = useCallback(
    (e, link) => {
      e.preventDefault();
      if (!link.hash) {
        navigate(link.path);
        scrollTo(0, { immediate: true });
        return;
      }
      const jump = () => {
        const el = document.getElementById(link.hash);
        if (el) scrollTo(el);
      };
      if (location.pathname === link.path) jump();
      else {
        navigate(link.path);
        requestAnimationFrame(() => setTimeout(jump, 120));
      }
    },
    [navigate, location.pathname],
  );

  const subscribe = async (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError("Enter a valid email address");
      setState("error");
      return;
    }
    setError("");
    setState("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.subscribeTemplate,
        { to_email: email, time: new Date().toLocaleString() },
        EMAILJS.publicKey,
      );
      setEmail("");
      setState("done");
    } catch (err) {
      console.error(err);
      setError("Couldn't subscribe just now — try again shortly");
      setState("error");
    }
  };

  return (
    <footer className="paper-grain relative overflow-hidden border-t border-paper/10 bg-ink text-paper">
      <Container className="relative pt-band">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          {/* ── Identity + list ────────────────────────────────────── */}
          <Reveal>
            <a href="/" onClick={(e) => go(e, { path: "/" })} className="inline-block">
              <img
                src={logoFull}
                alt="Webfluence Consultants"
                width="260"
                height="70"
                className="h-auto w-56 object-contain"
              />
            </a>
            <p className="mt-7 max-w-measure text-[0.9rem] leading-relaxed text-paper/55">
              We turn bold ideas into unstoppable brands — a growth partner built to make your
              business scale and leave competitors behind.
            </p>

            <form onSubmit={subscribe} noValidate className="mt-10 max-w-sm">
              <label htmlFor="footer-email" className="font-meta text-meta uppercase text-paper/50">
                Field notes — monthly, no filler
              </label>
              <div className="mt-3 flex items-center gap-3 border-b border-paper/25 pb-2 transition-colors duration-200 focus-within:border-flame">
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  placeholder="you@company.com"
                  aria-invalid={state === "error" ? "true" : undefined}
                  aria-describedby="footer-email-status"
                  className="min-w-0 flex-1 border-0 bg-transparent text-[0.9rem] text-paper placeholder:text-paper/35 focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center text-paper/60 transition-colors duration-200 hover:text-flame disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Subscribe to Field Notes"
                >
                  {state === "sending" ? (
                    <Spinner />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  )}
                </button>
              </div>
              <p
                id="footer-email-status"
                role="status"
                className={cn(
                  "mt-3 min-h-[1rem] font-meta text-meta uppercase",
                  state === "error" ? "text-flame" : "text-paper/45",
                )}
              >
                {state === "done" && "Subscribed — welcome aboard"}
                {state === "error" && error}
              </p>
            </form>
          </Reveal>

          {/* ── Navigation ─────────────────────────────────────────── */}
          <Reveal index={1}>
            <Label tone="invert" rule className="mb-7">
              Index
            </Label>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.hash ? `${link.path}#${link.hash}` : link.path}
                    onClick={(e) => go(e, link)}
                    className="link-draw text-[0.9rem] text-paper/60 transition-colors duration-200 hover:text-paper"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <Label tone="invert" rule className="mb-7 mt-12">
              Elsewhere
            </Label>
            <ul className="space-y-3.5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw inline-flex items-center gap-1.5 text-[0.9rem] text-paper/60 transition-colors duration-200 hover:text-paper"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ── Contact ────────────────────────────────────────────── */}
          <Reveal index={2}>
            <Label tone="invert" rule className="mb-7">
              Studio
            </Label>
            <address className="space-y-6 not-italic">
              <p className="text-[0.9rem] leading-relaxed text-paper/60">
                {ADDRESS.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-draw block text-[0.9rem] text-paper/60 transition-colors duration-200 hover:text-paper"
                >
                  {EMAIL}
                </a>
                <a
                  href={PHONE_HREF}
                  className="link-draw mt-2 block text-[0.9rem] text-paper/60 transition-colors duration-200 hover:text-paper"
                >
                  {PHONE}
                </a>
              </p>
            </address>

            <Button
              onClick={() => scrollTo(0)}
              variant="invert"
              size="sm"
              className="mt-10 border-paper/25"
            >
              Back to top
            </Button>
          </Reveal>
        </div>

        {/* ── Legal strip ────────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col gap-5 border-t border-paper/12 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-meta text-meta uppercase text-paper/40">
            © {new Date().getFullYear()} Webfluence Consultants — All rights reserved
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => go(e, item)}
                  className="link-draw font-meta text-meta uppercase text-paper/40 transition-colors duration-200 hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* ── Oversized wordmark, cropped by the page edge ─────────────── */}
      <div aria-hidden="true" className="select-none overflow-hidden">
        <p className="-mb-[0.2em] whitespace-nowrap px-gutter text-center font-display text-[clamp(2.25rem,12.2vw,12.5rem)] font-black uppercase leading-[0.8] tracking-[-0.045em] text-paper/[0.07]">
          Webfluence
        </p>
      </div>
    </footer>
  );
}
